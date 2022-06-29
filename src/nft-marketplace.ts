import { BigInt } from '@graphprotocol/graph-ts';
import {
    NftMarketplace,
    AddedAdminRoyalty,
    ChangedDefaultFeeForOwner,
    DisabledAdminRoyalty,
    FeePercentageChange,
    FeeReceiverChange,
    FeeTransferred,
    RoleAdminChanged,
    RoleGranted,
    RoleRevoked,
    RoyaltyTransferred,
    SwapMade,
    SwapsPaused,
    SwapsUnpaused,
} from '../generated/NftMarketplace/NftMarketplace';
import { Order } from '../generated/schema';

function numberToTokenType(tokenType: number): string {
    if (tokenType == 0) {
        return "ERC20";
    } else if (tokenType == 1) {
        return "ERC721";
    } else {
        return "ERC1155";
    }
}

export function handleSwapMade(event: SwapMade): void {
    const OrderInst = new Order(event.params.orderId);

    OrderInst.buyerAddress = event.params.buyer;
    OrderInst.sellerAddress = event.params.seller;
    OrderInst.closeDate = event.block.timestamp;
    OrderInst.deadline = event.params.signatureInfo.deadline;
    // token to get
    OrderInst.tokenToGetType = numberToTokenType(event.params.signatureInfo.tokenToGet.tokenType);
    OrderInst.tokenToGetAddress = event.params.signatureInfo.tokenToGet.tokenAddress;
    OrderInst.tokenToGetId = event.params.signatureInfo.tokenToGet.id;
    OrderInst.tokenToGetAmount = event.params.signatureInfo.tokenToGet.amount;
    // token to give
    OrderInst.tokenToGiveType = numberToTokenType(event.params.signatureInfo.tokenToGive.tokenType);
    OrderInst.tokenToGiveAddress = event.params.signatureInfo.tokenToGive.tokenAddress;
    OrderInst.tokenToGiveId = event.params.signatureInfo.tokenToGive.id;
    OrderInst.tokenToGiveAmount = event.params.signatureInfo.tokenToGive.amount;

    OrderInst.save();
}

export function handleAddedAdminRoyalty(event: AddedAdminRoyalty): void {}

export function handleChangedDefaultFeeForOwner(
    event: ChangedDefaultFeeForOwner,
): void {}

export function handleDisabledAdminRoyalty(event: DisabledAdminRoyalty): void {}

export function handleFeePercentageChange(event: FeePercentageChange): void {}

export function handleFeeReceiverChange(event: FeeReceiverChange): void {}

export function handleFeeTransferred(event: FeeTransferred): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleRoyaltyTransferred(event: RoyaltyTransferred): void {}

export function handleSwapsPaused(event: SwapsPaused): void {}

export function handleSwapsUnpaused(event: SwapsUnpaused): void {}
