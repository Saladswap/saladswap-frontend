import React from 'react'
import { Card, CardBody, Heading, Text } from '@saladswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getSaladAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledSaladStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const SaladStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getSaladAddress()))
  const saladSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledSaladStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Salad Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total SALAD Supply')}</Text>
          {saladSupply && <CardValue fontSize="14px" value={saladSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total SALAD Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New SALAD/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
      </CardBody>
    </StyledSaladStats>
  )
}

export default SaladStats
