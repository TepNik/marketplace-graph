// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddedAdminRoyalty extends ethereum.Event {
  get params(): AddedAdminRoyalty__Params {
    return new AddedAdminRoyalty__Params(this);
  }
}

export class AddedAdminRoyalty__Params {
  _event: AddedAdminRoyalty;

  constructor(event: AddedAdminRoyalty) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get royaltyReceiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get royaltyPercentage(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class ChangedDefaultFeeForOwner extends ethereum.Event {
  get params(): ChangedDefaultFeeForOwner__Params {
    return new ChangedDefaultFeeForOwner__Params(this);
  }
}

export class ChangedDefaultFeeForOwner__Params {
  _event: ChangedDefaultFeeForOwner;

  constructor(event: ChangedDefaultFeeForOwner) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DisabledAdminRoyalty extends ethereum.Event {
  get params(): DisabledAdminRoyalty__Params {
    return new DisabledAdminRoyalty__Params(this);
  }
}

export class DisabledAdminRoyalty__Params {
  _event: DisabledAdminRoyalty;

  constructor(event: DisabledAdminRoyalty) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FeePercentageChange extends ethereum.Event {
  get params(): FeePercentageChange__Params {
    return new FeePercentageChange__Params(this);
  }
}

export class FeePercentageChange__Params {
  _event: FeePercentageChange;

  constructor(event: FeePercentageChange) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FeeReceiverChange extends ethereum.Event {
  get params(): FeeReceiverChange__Params {
    return new FeeReceiverChange__Params(this);
  }
}

export class FeeReceiverChange__Params {
  _event: FeeReceiverChange;

  constructor(event: FeeReceiverChange) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldValue(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newValue(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class FeeTransferred extends ethereum.Event {
  get params(): FeeTransferred__Params {
    return new FeeTransferred__Params(this);
  }
}

export class FeeTransferred__Params {
  _event: FeeTransferred;

  constructor(event: FeeTransferred) {
    this._event = event;
  }

  get feeReceiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoyaltyTransferred extends ethereum.Event {
  get params(): RoyaltyTransferred__Params {
    return new RoyaltyTransferred__Params(this);
  }
}

export class RoyaltyTransferred__Params {
  _event: RoyaltyTransferred;

  constructor(event: RoyaltyTransferred) {
    this._event = event;
  }

  get royaltyReceiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SwapMade extends ethereum.Event {
  get params(): SwapMade__Params {
    return new SwapMade__Params(this);
  }
}

export class SwapMade__Params {
  _event: SwapMade;

  constructor(event: SwapMade) {
    this._event = event;
  }

  get signatureInfo(): SwapMadeSignatureInfoStruct {
    return changetype<SwapMadeSignatureInfoStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get orderId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class SwapMadeSignatureInfoStruct extends ethereum.Tuple {
  get marketplaceAddress(): Address {
    return this[0].toAddress();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get isTokenToGetMulti(): boolean {
    return this[2].toBoolean();
  }

  get isTokenToGiveMulti(): boolean {
    return this[3].toBoolean();
  }

  get tokenToGet(): SwapMadeSignatureInfoTokenToGetStruct {
    return changetype<SwapMadeSignatureInfoTokenToGetStruct>(this[4].toTuple());
  }

  get tokenToGive(): SwapMadeSignatureInfoTokenToGiveStruct {
    return changetype<SwapMadeSignatureInfoTokenToGiveStruct>(
      this[5].toTuple()
    );
  }

  get deadline(): BigInt {
    return this[6].toBigInt();
  }
}

export class SwapMadeSignatureInfoTokenToGetStruct extends ethereum.Tuple {
  get tokenType(): i32 {
    return this[0].toI32();
  }

  get tokenAddress(): Address {
    return this[1].toAddress();
  }

  get id(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class SwapMadeSignatureInfoTokenToGiveStruct extends ethereum.Tuple {
  get tokenType(): i32 {
    return this[0].toI32();
  }

  get tokenAddress(): Address {
    return this[1].toAddress();
  }

  get id(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class SwapsPaused extends ethereum.Event {
  get params(): SwapsPaused__Params {
    return new SwapsPaused__Params(this);
  }
}

export class SwapsPaused__Params {
  _event: SwapsPaused;

  constructor(event: SwapsPaused) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SwapsUnpaused extends ethereum.Event {
  get params(): SwapsUnpaused__Params {
    return new SwapsUnpaused__Params(this);
  }
}

export class SwapsUnpaused__Params {
  _event: SwapsUnpaused;

  constructor(event: SwapsUnpaused) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NftMarketplace__getRoyaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class NftMarketplace__royaltiesInfoResult {
  value0: boolean;
  value1: Address;
  value2: i32;

  constructor(value0: boolean, value1: Address, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }

  getIsEnabled(): boolean {
    return this.value0;
  }

  getRoyaltyReceiver(): Address {
    return this.value1;
  }

  getRoyaltyPercentage(): i32 {
    return this.value2;
  }
}

export class NftMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NftMarketplace {
    return new NftMarketplace("NftMarketplace", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  defaultFeeForOwner(): BigInt {
    let result = super.call(
      "defaultFeeForOwner",
      "defaultFeeForOwner():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultFeeForOwner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultFeeForOwner",
      "defaultFeeForOwner():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feePercentage(): BigInt {
    let result = super.call("feePercentage", "feePercentage():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feePercentage",
      "feePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeReceiver(): Address {
    let result = super.call("feeReceiver", "feeReceiver():(address)", []);

    return result[0].toAddress();
  }

  try_feeReceiver(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeReceiver", "feeReceiver():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoyaltyInfo(
    token: Address,
    tokenId: BigInt,
    salePrice: BigInt
  ): NftMarketplace__getRoyaltyInfoResult {
    let result = super.call(
      "getRoyaltyInfo",
      "getRoyaltyInfo(address,uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );

    return new NftMarketplace__getRoyaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_getRoyaltyInfo(
    token: Address,
    tokenId: BigInt,
    salePrice: BigInt
  ): ethereum.CallResult<NftMarketplace__getRoyaltyInfoResult> {
    let result = super.tryCall(
      "getRoyaltyInfo",
      "getRoyaltyInfo(address,uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NftMarketplace__getRoyaltyInfoResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOrderCompleted(param0: Bytes): boolean {
    let result = super.call(
      "isOrderCompleted",
      "isOrderCompleted(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try_isOrderCompleted(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOrderCompleted",
      "isOrderCompleted(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  royaltiesInfo(param0: Address): NftMarketplace__royaltiesInfoResult {
    let result = super.call(
      "royaltiesInfo",
      "royaltiesInfo(address):(bool,address,uint16)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new NftMarketplace__royaltiesInfoResult(
      result[0].toBoolean(),
      result[1].toAddress(),
      result[2].toI32()
    );
  }

  try_royaltiesInfo(
    param0: Address
  ): ethereum.CallResult<NftMarketplace__royaltiesInfoResult> {
    let result = super.tryCall(
      "royaltiesInfo",
      "royaltiesInfo(address):(bool,address,uint16)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NftMarketplace__royaltiesInfoResult(
        value[0].toBoolean(),
        value[1].toAddress(),
        value[2].toI32()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  wNative(): Address {
    let result = super.call("wNative", "wNative():(address)", []);

    return result[0].toAddress();
  }

  try_wNative(): ethereum.CallResult<Address> {
    let result = super.tryCall("wNative", "wNative():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _feeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wnative(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DisableAdminRoyaltyCall extends ethereum.Call {
  get inputs(): DisableAdminRoyaltyCall__Inputs {
    return new DisableAdminRoyaltyCall__Inputs(this);
  }

  get outputs(): DisableAdminRoyaltyCall__Outputs {
    return new DisableAdminRoyaltyCall__Outputs(this);
  }
}

export class DisableAdminRoyaltyCall__Inputs {
  _call: DisableAdminRoyaltyCall;

  constructor(call: DisableAdminRoyaltyCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DisableAdminRoyaltyCall__Outputs {
  _call: DisableAdminRoyaltyCall;

  constructor(call: DisableAdminRoyaltyCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MakeSwapCall extends ethereum.Call {
  get inputs(): MakeSwapCall__Inputs {
    return new MakeSwapCall__Inputs(this);
  }

  get outputs(): MakeSwapCall__Outputs {
    return new MakeSwapCall__Outputs(this);
  }
}

export class MakeSwapCall__Inputs {
  _call: MakeSwapCall;

  constructor(call: MakeSwapCall) {
    this._call = call;
  }

  get signatureInfoSeller(): MakeSwapCallSignatureInfoSellerStruct {
    return changetype<MakeSwapCallSignatureInfoSellerStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get sellerSignature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get sellerAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class MakeSwapCall__Outputs {
  _call: MakeSwapCall;

  constructor(call: MakeSwapCall) {
    this._call = call;
  }
}

export class MakeSwapCallSignatureInfoSellerStruct extends ethereum.Tuple {
  get marketplaceAddress(): Address {
    return this[0].toAddress();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get isTokenToGetMulti(): boolean {
    return this[2].toBoolean();
  }

  get isTokenToGiveMulti(): boolean {
    return this[3].toBoolean();
  }

  get tokenToGet(): MakeSwapCallSignatureInfoSellerTokenToGetStruct {
    return changetype<MakeSwapCallSignatureInfoSellerTokenToGetStruct>(
      this[4].toTuple()
    );
  }

  get tokenToGive(): MakeSwapCallSignatureInfoSellerTokenToGiveStruct {
    return changetype<MakeSwapCallSignatureInfoSellerTokenToGiveStruct>(
      this[5].toTuple()
    );
  }

  get deadline(): BigInt {
    return this[6].toBigInt();
  }
}

export class MakeSwapCallSignatureInfoSellerTokenToGetStruct extends ethereum.Tuple {
  get tokenType(): i32 {
    return this[0].toI32();
  }

  get tokenAddress(): Address {
    return this[1].toAddress();
  }

  get id(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class MakeSwapCallSignatureInfoSellerTokenToGiveStruct extends ethereum.Tuple {
  get tokenType(): i32 {
    return this[0].toI32();
  }

  get tokenAddress(): Address {
    return this[1].toAddress();
  }

  get id(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetDefaultFeeForOwnerCall extends ethereum.Call {
  get inputs(): SetDefaultFeeForOwnerCall__Inputs {
    return new SetDefaultFeeForOwnerCall__Inputs(this);
  }

  get outputs(): SetDefaultFeeForOwnerCall__Outputs {
    return new SetDefaultFeeForOwnerCall__Outputs(this);
  }
}

export class SetDefaultFeeForOwnerCall__Inputs {
  _call: SetDefaultFeeForOwnerCall;

  constructor(call: SetDefaultFeeForOwnerCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDefaultFeeForOwnerCall__Outputs {
  _call: SetDefaultFeeForOwnerCall;

  constructor(call: SetDefaultFeeForOwnerCall) {
    this._call = call;
  }
}

export class SetFeePercentageCall extends ethereum.Call {
  get inputs(): SetFeePercentageCall__Inputs {
    return new SetFeePercentageCall__Inputs(this);
  }

  get outputs(): SetFeePercentageCall__Outputs {
    return new SetFeePercentageCall__Outputs(this);
  }
}

export class SetFeePercentageCall__Inputs {
  _call: SetFeePercentageCall;

  constructor(call: SetFeePercentageCall) {
    this._call = call;
  }

  get newValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeePercentageCall__Outputs {
  _call: SetFeePercentageCall;

  constructor(call: SetFeePercentageCall) {
    this._call = call;
  }
}

export class SetFeeReceiverCall extends ethereum.Call {
  get inputs(): SetFeeReceiverCall__Inputs {
    return new SetFeeReceiverCall__Inputs(this);
  }

  get outputs(): SetFeeReceiverCall__Outputs {
    return new SetFeeReceiverCall__Outputs(this);
  }
}

export class SetFeeReceiverCall__Inputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }

  get newValue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeReceiverCall__Outputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }
}

export class SetRoyaltyCall extends ethereum.Call {
  get inputs(): SetRoyaltyCall__Inputs {
    return new SetRoyaltyCall__Inputs(this);
  }

  get outputs(): SetRoyaltyCall__Outputs {
    return new SetRoyaltyCall__Outputs(this);
  }
}

export class SetRoyaltyCall__Inputs {
  _call: SetRoyaltyCall;

  constructor(call: SetRoyaltyCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get royaltyReceiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get royaltyPercentage(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class SetRoyaltyCall__Outputs {
  _call: SetRoyaltyCall;

  constructor(call: SetRoyaltyCall) {
    this._call = call;
  }
}

export class TogglePauseCall extends ethereum.Call {
  get inputs(): TogglePauseCall__Inputs {
    return new TogglePauseCall__Inputs(this);
  }

  get outputs(): TogglePauseCall__Outputs {
    return new TogglePauseCall__Outputs(this);
  }
}

export class TogglePauseCall__Inputs {
  _call: TogglePauseCall;

  constructor(call: TogglePauseCall) {
    this._call = call;
  }
}

export class TogglePauseCall__Outputs {
  _call: TogglePauseCall;

  constructor(call: TogglePauseCall) {
    this._call = call;
  }
}
