import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SALAD',
    stakingTokenName: QuoteToken.SALAD,
    stakingTokenAddress: '0x9EffAf5A3684c510263075e2E91d2594CcA671b2',
    contractAddress: {
      97: '0x34f3D65814313f4Ddcdc2c52f9ce0c83F6e96084',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E', // MasterChef
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://saladswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 20,
    image: 'SALADBNB',
    tokenName: 'SALAD',
    stakingTokenName: QuoteToken.BNB,
    stakingLimit: 10,
    contractAddress: {
      97: '0x50Ed2706128a3E4549eDFB99237638d216965Ca6',
      56: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a', // BnbStaking
    },
    poolCategory: PoolCategory.BINANCE,
    projectLink: 'https://saladswap.finance/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 19,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.SALAD,
    stakingTokenAddress: '0x9EffAf5A3684c510263075e2E91d2594CcA671b2',
    contractAddress: {
      97: '0x25e8EC626cC964bAB7A9A1cc85D7b6a522Ff8217',
      56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124', // SmartChef
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://saladswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0041',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
]

export default pools
