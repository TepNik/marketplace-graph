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
import { Order, NftToken } from '../generated/schema';

import { ERC721 } from '../generated/NftMarketplace/ERC721';
import { ERC1155 } from '../generated/NftMarketplace/ERC1155';
import { ERC20 } from '../generated/NftMarketplace/ERC20';

import { numberToTokenType } from './helpers';

export function handleSwapMade(event: SwapMade): void {
    const OrderInst = new Order(event.params.orderId);

    OrderInst.buyerAddress = event.params.buyer;
    OrderInst.sellerAddress = event.params.seller;
    OrderInst.closeDate = event.block.timestamp;
    OrderInst.deadline = event.params.signatureInfo.deadline;
    // token to get
    OrderInst.tokenToGetType = numberToTokenType(
        event.params.signatureInfo.tokenToGet.tokenType,
    );
    OrderInst.tokenToGetAddress =
        event.params.signatureInfo.tokenToGet.tokenAddress;
    OrderInst.tokenToGetId = event.params.signatureInfo.tokenToGet.id;
    OrderInst.tokenToGetAmount = event.params.signatureInfo.tokenToGet.amount;
    // token to give
    OrderInst.tokenToGiveType = numberToTokenType(
        event.params.signatureInfo.tokenToGive.tokenType,
    );
    OrderInst.tokenToGiveAddress =
        event.params.signatureInfo.tokenToGive.tokenAddress;
    OrderInst.tokenToGiveId = event.params.signatureInfo.tokenToGive.id;
    OrderInst.tokenToGiveAmount = event.params.signatureInfo.tokenToGive.amount;

    OrderInst.save();

    if (OrderInst.tokenToGetType != "ERC20") {
        let nftTokenInst = NftToken.load(OrderInst.tokenToGetAddress);
        if (nftTokenInst == null) {
            nftTokenInst = new NftToken(OrderInst.tokenToGetAddress);
            nftTokenInst.orders = [];
        }

        nftTokenInst.orders.push(OrderInst.id);
        nftTokenInst.save();
    }

    if (OrderInst.tokenToGiveType != "ERC20") {
        let nftTokenInst = NftToken.load(OrderInst.tokenToGiveAddress);
        if (nftTokenInst == null) {
            nftTokenInst = new NftToken(OrderInst.tokenToGiveAddress);
            nftTokenInst.orders = [];
        }

        nftTokenInst.orders.push(OrderInst.id);
        nftTokenInst.save();
    }
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
