import { BigDecimal, BigInt, Address, log } from '@graphprotocol/graph-ts';

import { ERC20 } from '../generated/NftMarketplace/ERC20';
import { UniswapPair } from '../generated/NftMarketplace/UniswapPair';
import { UniswapFactory } from '../generated/NftMarketplace/UniswapFactory';
import { UniswapRouter } from '../generated/NftMarketplace/UniswapRouter';

const UniswapFactoryAddress = Address.fromString(
    '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
);
const UniswapRouterAddress = Address.fromString(
    '0x10ED43C718714eb63d5aA57B78B54704E256024E',
);

const WbnbAddress = Address.fromString(
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
);
const WbnbDecimals = 18;
const UsdcAddress = Address.fromString(
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
);
const UsdtAddress = Address.fromString(
    '0x55d398326f99059fF775485246999027B3197955',
);
const BusdAddress = Address.fromString(
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
);

const WbnbUsdcPairAddress = Address.fromString(
    '0xd99c7F6C65857AC913a8f880A4cb84032AB2FC5b',
);
const WbnbUsdtPairAddress = Address.fromString(
    '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
);
const WbnbBusdPairAddress = Address.fromString(
    '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
);

const ZERO_ADDRESS = Address.fromString(
    '0x0000000000000000000000000000000000000000',
);

const truncateLength = 10;

export function getTokenPriceInUsd(
    tokenAddress: Address,
    tokenAmount: BigInt,
): BigDecimal {
    const tokenInst = ERC20.bind(tokenAddress);
    const tokenDecimals = tokenInst.decimals();

    if (
        tokenAddress.equals(UsdcAddress) ||
        tokenAddress.equals(UsdtAddress) ||
        tokenAddress.equals(BusdAddress)
    ) {
        return tokenAmount.toBigDecimal().div(
            BigInt.fromString('10')
                .pow(tokenDecimals as u8)
                .toBigDecimal(),
        );
    }

    if (tokenAddress.equals(WbnbAddress)) {
        return tokenAmount
            .toBigDecimal()
            .div(
                BigInt.fromString('10')
                    .pow(WbnbDecimals as u8)
                    .toBigDecimal(),
            )
            .times(getEthPriceUsd());
    }

    const UniswapFactoryInst = UniswapFactory.bind(UniswapFactoryAddress);
    const tokenWethPairAddress = UniswapFactoryInst.getPair(
        WbnbAddress,
        tokenAddress,
    );
    if (tokenWethPairAddress.equals(ZERO_ADDRESS)) {
        return BigDecimal.fromString('0');
    }
    const tokenWethPairInst = UniswapPair.bind(tokenWethPairAddress);

    const tokenWethPairParameters = getPairParameters(tokenWethPairInst);

    const UniswapRouterInst = UniswapRouter.bind(UniswapRouterAddress);
    const wethPrice = UniswapRouterInst.getAmountIn(
        tokenAmount,
        tokenWethPairParameters.wethAmount,
        tokenWethPairParameters.tokenAmount,
    );

    const ethPriceUsd = getEthPriceUsd();
    const tokenPriceUsd = wethPrice
        .toBigDecimal()
        .div(
            BigInt.fromString('10')
                .pow(WbnbDecimals as u8)
                .toBigDecimal(),
        )
        .times(ethPriceUsd);

    return tokenPriceUsd;
}

export function getEthPriceUsd(): BigDecimal {
    const WbnbUsdcPairInst = UniswapPair.bind(WbnbUsdcPairAddress);
    const WbnbUsdtPairInst = UniswapPair.bind(WbnbUsdtPairAddress);
    const WbnbBusdPairInst = UniswapPair.bind(WbnbBusdPairAddress);

    const WbnbUsdcPairParameters = getPairParameters(WbnbUsdcPairInst);
    const WbnbUsdtPairParameters = getPairParameters(WbnbUsdtPairInst);
    const WbnbBusdPairParameters = getPairParameters(WbnbBusdPairInst);

    const totalLiquidityETH = WbnbUsdcPairParameters.wethAmount
        .plus(WbnbUsdtPairParameters.wethAmount)
        .plus(WbnbBusdPairParameters.wethAmount);
    const WbnbUsdcWeight = WbnbUsdcPairParameters.wethAmount
        .toBigDecimal()
        .div(totalLiquidityETH.toBigDecimal());
    const WbnbUsdtWeight = WbnbUsdtPairParameters.wethAmount
        .toBigDecimal()
        .div(totalLiquidityETH.toBigDecimal());
    const WbnbBusdWeight = WbnbBusdPairParameters.wethAmount
        .toBigDecimal()
        .div(totalLiquidityETH.toBigDecimal());

    return WbnbUsdcPairParameters.tokenPrice
        .times(WbnbUsdcWeight)
        .plus(WbnbUsdtPairParameters.tokenPrice.times(WbnbUsdtWeight))
        .plus(WbnbBusdPairParameters.tokenPrice.times(WbnbBusdWeight));
}

function getPairParameters(pair: UniswapPair): PairParameters {
    const result: PairParameters = {
        tokenAmount: BigInt.fromString('0'),
        tokenPrice: BigDecimal.fromString('0'),
        tokenAddress: ZERO_ADDRESS,
        tokenDecimals: 0,

        wethAmount: BigInt.fromString('0'),
        wethPrice: BigDecimal.fromString('0'),
    } as PairParameters;

    const token0 = pair.token0();
    const token1 = pair.token1();
    const reserves = pair.getReserves();

    if (token0.equals(WbnbAddress)) {
        result.wethAmount = reserves.get_reserve0();
        result.tokenAmount = reserves.get_reserve1();

        result.tokenAddress = token1;

        const tokenInst = ERC20.bind(token1);
        const tokenDecimals = tokenInst.decimals();
        result.tokenDecimals = tokenDecimals;
    } else if (token1.equals(WbnbAddress)) {
        result.tokenAmount = reserves.get_reserve0();
        result.wethAmount = reserves.get_reserve1();

        result.tokenAddress = token0;

        const tokenInst = ERC20.bind(token0);
        const tokenDecimals = tokenInst.decimals();
        result.tokenDecimals = tokenDecimals;
    } else {
        return result;
    }
    const UniswapRouterInst = UniswapRouter.bind(UniswapRouterAddress);

    result.tokenPrice = UniswapRouterInst.getAmountIn(
        BigInt.fromString('10').pow(result.tokenDecimals as u8),
        result.wethAmount,
        result.tokenAmount,
    )
        .toBigDecimal()
        .div(
            BigInt.fromString('10')
                .pow(WbnbDecimals as u8)
                .toBigDecimal(),
        );

    result.wethPrice = UniswapRouterInst.getAmountIn(
        BigInt.fromString('10').pow(WbnbDecimals as u8),
        result.tokenAmount,
        result.wethAmount,
    )
        .toBigDecimal()
        .div(
            BigInt.fromString('10')
                .pow(result.tokenDecimals as u8)
                .toBigDecimal(),
        );

    return result;
}

class PairParameters {
    tokenAmount: BigInt;
    tokenPrice: BigDecimal;
    tokenAddress: Address;
    tokenDecimals: number;

    wethAmount: BigInt;
    wethPrice: BigDecimal;
}
