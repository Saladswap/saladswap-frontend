import { useEffect } from 'react'
import { usePriceSaladBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const saladPriceUsd = usePriceSaladBusd()
  useEffect(() => {
    document.title = `SaladSwap - $${Number(saladPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
