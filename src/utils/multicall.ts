import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { arrayify, BytesLike, concat, hexDataSlice, hexlify, hexZeroPad, isHexString } from '@ethersproject/bytes'
import { Logger } from '@ethersproject/logger'
import { getWeb3NoAccount } from 'utils/web3'
import MultiCallAbi from 'config/abi/Multicall.json'
import { getMulticallAddress } from 'utils/addressHelpers'

interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (exemple: balanceOf)
  params?: any[] // Function params
}

const version = 'abi/5.0.12'
const logger = new Logger(version)

const multicall = async (abi: any[], calls: Call[]) => {
  const web3 = getWeb3NoAccount()
  const multi = new web3.eth.Contract((MultiCallAbi as unknown) as AbiItem, getMulticallAddress())
  const itf = new Interface(abi)
  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  console.log('-- calldata : ', calldata)
  const { returnData } = await multi.methods.aggregate(calldata).call()
  console.log('-- returnData : ', returnData)
  const res = returnData.map((call, i) => {
    console.log('-- calls[i].name : ', calls[i].name, call)

    let functionFragment
    const data = call
    if (typeof calls[i].name === 'string') {
      functionFragment = itf.getFunction(calls[i].name)
    } else {
      functionFragment = calls[i].name
    }
    console.log('-- data : ', data)
    const bytes = arrayify(data)
    console.log('-- bytes : ', bytes)
    let reason: string = null
    let errorSignature: string = null
    switch (bytes.length % itf._abiCoder._getWordSize()) {
      case 0:
        try {
          console.log('-- outputs : ', functionFragment.outputs)
          return itf._abiCoder.decode(functionFragment.outputs, bytes)
        } catch (error) {
          console.log('-- error : ', error)
        }
        break

      case 4:
        if (hexlify(bytes.slice(0, 4)) === '0x08c379a0') {
          errorSignature = 'Error(string)'
          reason = itf._abiCoder.decode(['string'], bytes.slice(4))[0]
        }
        break
      default:
        break
    }

    return logger.throwError('call revert exception', Logger.errors.CALL_EXCEPTION, {
      method: functionFragment.format(),
      errorSignature,
      errorArgs: [reason],
      reason,
    })
    return itf.decodeFunctionResult(calls[i].name, call)
  })
  console.log('-- res : ', res)

  return res
}

export default multicall
