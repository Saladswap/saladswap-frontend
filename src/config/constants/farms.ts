import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SALAD',
    lpAddresses: {
      97: '0x9EffAf5A3684c510263075e2E91d2594CcA671b2',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // Salad Token
    },
    tokenSymbol: 'SAUCE',
    tokenAddresses: {
      97: '0x9EffAf5A3684c510263075e2E91d2594CcA671b2',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SALAD-BNB LP',
    lpAddresses: {
      97: '0xCa1f193043C4da5Fd262C3D365456553147BBACE',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6', // SaladPair
    },
    tokenSymbol: 'SALAD',
    tokenAddresses: {
      97: '0x9EffAf5A3684c510263075e2E91d2594CcA671b2',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x1F6bc7FC277Aa532E2Ec377867323BC9520704d0',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0x9C93C282dD2Bd3EB6647e06809fFF76bf2e07dc7',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
