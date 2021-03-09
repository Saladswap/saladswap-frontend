import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'

const useGetProfileCosts = () => {
  const [costs, setCosts] = useState({
    numberSaladToReactivate: new BigNumber(0),
    numberSaladToRegister: new BigNumber(0),
    numberSaladToUpdate: new BigNumber(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberSaladToReactivate, numberSaladToRegister, numberSaladToUpdate] = await makeBatchRequest([
          profileContract.methods.numberSaladToReactivate().call,
          profileContract.methods.numberSaladToRegister().call,
          profileContract.methods.numberSaladToUpdate().call,
        ])

        setCosts({
          numberSaladToReactivate: new BigNumber(numberSaladToReactivate as string),
          numberSaladToRegister: new BigNumber(numberSaladToRegister as string),
          numberSaladToUpdate: new BigNumber(numberSaladToUpdate as string),
        })
      } catch (error) {
        toastError('Error', 'Could not retrieve SALAD costs for profile')
      }
    }

    fetchCosts()
  }, [setCosts, toastError])

  return costs
}

export default useGetProfileCosts
