import BigNumber from 'bignumber.js'
import { getSaladAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's SALAD balance is at least the amount passed in
 */
const useHasSaladBalance = (minimumBalance: BigNumber) => {
  const saladBalance = useTokenBalance(getSaladAddress())
  return saladBalance.gte(minimumBalance)
}

export default useHasSaladBalance
