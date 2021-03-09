import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceSaladBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const SaladWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const saladAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(saladAmount).multipliedBy(usePriceSaladBusd()).toNumber()

  return (
    <Block>
      <CardValue value={saladAmount} lineHeight="1.5" />
      <CardBusdValue value={claimAmountBusd} decimals={2} />
    </Block>
  )
}

export default SaladWinnings
