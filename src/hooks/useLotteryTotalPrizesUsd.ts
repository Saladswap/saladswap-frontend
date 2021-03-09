import { usePriceSaladBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalSalad = getBalanceNumber(totalRewards)
  const saladPriceBusd = usePriceSaladBusd()

  return totalSalad * saladPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
