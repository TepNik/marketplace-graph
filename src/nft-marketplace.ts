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
import { ExampleEntity } from '../generated/schema';

export function handleAddedAdminRoyalty(event: AddedAdminRoyalty): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = ExampleEntity.load(event.transaction.from.toHex());

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!entity) {
        entity = new ExampleEntity(event.transaction.from.toHex());

        // Entity fields can be set using simple assignments
        entity.count = BigInt.fromI32(0);
    }

    // BigInt and BigDecimal math are supported
    entity.count = entity.count.plus(BigInt.fromI32(1));

    // Entity fields can be set based on event parameters
    entity.manager = event.params.manager;
    entity.token = event.params.token;

    // Entities can be written to the store with `.save()`
    entity.save();

    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.

    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract.DEFAULT_ADMIN_ROLE(...)
    // - contract.defaultFeeForOwner(...)
    // - contract.feePercentage(...)
    // - contract.feeReceiver(...)
    // - contract.getRoleAdmin(...)
    // - contract.getRoleMember(...)
    // - contract.getRoleMemberCount(...)
    // - contract.getRoyaltyInfo(...)
    // - contract.hasRole(...)
    // - contract.isOrderCompleted(...)
    // - contract.isPaused(...)
    // - contract.royaltiesInfo(...)
    // - contract.supportsInterface(...)
    // - contract.wNative(...)
}

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

export function handleSwapMade(event: SwapMade): void {}

export function handleSwapsPaused(event: SwapsPaused): void {}

export function handleSwapsUnpaused(event: SwapsUnpaused): void {}
