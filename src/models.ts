import { BigInt } from '@graphprotocol/graph-ts';

export enum TokenType {
    ERC20,
    ERC721,
    ERC1155,
}

export const DataRangeNames = [
    'ALL_TIME',
    'HOURLY',
    'DAILY',
    'WEEKLY',
    'MONTHLY',
    'YEARLY',
];

export const DataRangeIntervals = [
    BigInt.fromString('0'),
    BigInt.fromString('3600'),
    BigInt.fromString('86400'),
    BigInt.fromString('604800'),
    BigInt.fromString('2592000'),
    BigInt.fromString('31536000'),
];
