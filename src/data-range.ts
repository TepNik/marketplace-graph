import { Address, BigInt, BigDecimal, Bytes, log } from '@graphprotocol/graph-ts';

import {
    NftTokenRangeData,
    NftToken,
    OrderRangeData,
} from '../generated/schema';

import { DataRangeNames, DataRangeIntervals, TokenType } from './models';

const MinusOne = BigInt.fromString('-1');
const Zero = BigInt.fromString('0');

export function saveNftTokenRangeData(
    tokenAddress: Address,
    timestamp: BigInt,
    usdVolume: BigDecimal
): void {
    for (let i = 0; i < DataRangeNames.length; ++i) {
        if (DataRangeIntervals[i].equals(MinusOne)) {
            continue;
        }

        let intervalNumber: BigInt;
        if (DataRangeIntervals[i].equals(Zero)) {
            intervalNumber = Zero;
        } else {
            intervalNumber = timestamp.div(DataRangeIntervals[i]);
        }
        const id =
            tokenAddress.toHexString() +
            '-' +
            DataRangeNames[i] +
            '-' +
            intervalNumber.toString();

        let rangeDataInst = NftTokenRangeData.load(id);
        if (rangeDataInst == null) {
            rangeDataInst = new NftTokenRangeData(id);

            const nftTokenInst = new NftToken(tokenAddress);
            rangeDataInst.nftToken = nftTokenInst.id;
            //log.debug("rangeDataInst.nftToken = {}", [rangeDataInst.nftToken.toHexString()]);

            rangeDataInst.rangeType = DataRangeNames[i];
            rangeDataInst.intervalNumber = intervalNumber;

            rangeDataInst.totalOrders = 0;
            rangeDataInst.totalVolumeUsd = BigDecimal.fromString('0');
        }

        ++rangeDataInst.totalOrders;
        rangeDataInst.totalVolumeUsd =
            rangeDataInst.totalVolumeUsd.plus(usdVolume);

        rangeDataInst.save();
    }
}

export function saveOrderRangeData(
    timestamp: BigInt,
    usdVolume: BigDecimal,
): void {
    for (let i = 0; i < DataRangeNames.length; ++i) {
        if (DataRangeIntervals[i].equals(MinusOne)) {
            continue;
        }

        let intervalNumber: BigInt;
        if (DataRangeIntervals[i].equals(Zero)) {
            intervalNumber = Zero;
        } else {
            intervalNumber = timestamp.div(DataRangeIntervals[i]);
        }
        const id = DataRangeNames[i] + '-' + intervalNumber.toString();

        let rangeDataInst = OrderRangeData.load(id);
        if (rangeDataInst == null) {
            rangeDataInst = new OrderRangeData(id);

            rangeDataInst.rangeType = DataRangeNames[i];
            rangeDataInst.intervalNumber = intervalNumber;

            rangeDataInst.totalOrders = 0;
            rangeDataInst.totalVolumeUsd = BigDecimal.fromString('0');
        }

        ++rangeDataInst.totalOrders;
        rangeDataInst.totalVolumeUsd =
            rangeDataInst.totalVolumeUsd.plus(usdVolume);

        rangeDataInst.save();
    }
}
