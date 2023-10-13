import { useContractWrite, usePrepareContractWrite, useAccount, useContractRead, erc20ABI, useBalance, useTransaction, useWaitForTransaction } from "wagmi";
import { SOW_ABI, SOW_CONTRACT_ADDRESS, USDC_ADDRESS } from "../contracts/contractConfigs";
import { useEffect } from "react";
import { useState } from "react";
import { formatEther } from "viem";
import { useSearchParams } from "react-router-dom";
const PurchaseSow = () => {

  const [allowance, setAllowance] = useState(BigInt(0))
  const [amount, setAmount] = useState(BigInt(1))
  const [Balance, setBalance] = useState(0)
  const [SOWBalance, setSOWBalance] = useState(0)
  const [price, setPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(BigInt(0))
  const [USDCBalance, setUSDCBalance] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const {address} = useAccount()

  //an ugly amount of read requests, could be batched
  const {data:balanceData, refetch:refetchBNB, isFetching:isFetchingBNB} = useBalance({
    address:address,
    onSuccess: (data) => {
    setBalance(data)
  }});
  const {isFetching, refetch} = useContractRead({
    abi:erc20ABI,
    address:USDC_ADDRESS,
    functionName:"allowance",
    args:[address, SOW_CONTRACT_ADDRESS],
    onSuccess: (data) => {
      setAllowance(data)
    }
  })
  const {isFetching:isFetchingBalance, refetch:refetchBalance} = useContractRead({
    abi:erc20ABI,
    address:USDC_ADDRESS,
    functionName:"balanceOf",
    args:[address],
    onSuccess: (data) => {
      setUSDCBalance(data)
    }
  })

  const {isFetching:isFetchingSOW, refetch:refetchSOW} = useContractRead({
    abi:SOW_ABI,
    address:SOW_CONTRACT_ADDRESS,
    functionName:"balanceOf",
    args:[address],
    onSuccess: (data) => {
      setSOWBalance(data)
    }
  })
  const {isFetching:isFetchingPrice, refetch:refetchPrice} = useContractRead({
    abi:SOW_ABI,
    address:SOW_CONTRACT_ADDRESS,
    functionName:"costInUsdc",
    onSuccess: (data) => {
      setPrice(data)
    }
  })
  const {isFetching:isFetchingTotalSupply, refetch:refetchTotalSupply} = useContractRead({
    abi:SOW_ABI,
    address:SOW_CONTRACT_ADDRESS,
    functionName:"totalSupply",
    onSuccess: (data) => {
      setTotalSupply(data)
    }
  })
  const {isFetching:isFetchingMaxSupply, refetch:refetchMaxSupply} = useContractRead({
    abi:SOW_ABI,
    address:SOW_CONTRACT_ADDRESS,
    functionName:"maxNFTSupply",
    onSuccess: (data) => {
      setMaxSupply(data)
    }
  })

  useEffect(()=>{
    setTotalPrice(BigInt(amount) * BigInt(price))
  }, [amount,price])

  const {config:approveTx} = usePrepareContractWrite({
    abi:erc20ABI,
    address:USDC_ADDRESS,
    functionName:"approve",
    args:[SOW_CONTRACT_ADDRESS, 0]//BigInt(amount) * BigInt(price)],
  })

  
  const {write:approveUSDC, data:approveData} = useContractWrite(approveTx)
  const {data:approveReceipt } = useWaitForTransaction({hash:approveData?.hash, onSuccess:(data)=>{
    //todo: replace with a better alert modal
    alert('Successfully Approved USDC')
  },onError:(error)=>{
    //todo: replace with a better alert modal
    alert(error.message)
  }})

  const {config:mintTx} = usePrepareContractWrite({
    abi:SOW_ABI,
    address:SOW_CONTRACT_ADDRESS,
    functionName:'MintInToken',
    args:[amount],
  })


  const {write:mint, data:mintData} = useContractWrite(mintTx)

  const {data:mintReceipt } = useWaitForTransaction({hash:mintData?.hash, onSuccess:(data)=>{
    //todo: replace with a better alert modal
    alert('Successfully Minted SOW!')
  },onError:(error)=>{
    //todo: replace with a better alert modal
    alert(error.message)
  }})

  return (
    <>
      <div>
        <h2 className='uppercase font-[900] text-[24px] md:text-[48px] mt-[40px] md:mt-[100px] mb-[20px] md:mb-[50px]'>
          Purchase SOW
        </h2>

        <div className='rounded-[20px] border-[#FFFFFF40] border-[0.2px] gradient-card px-[30px] md:px-[50px] py-[28px] md:py-[70px] text-center'>
          <h4 className='tracking-[2.4px] md:tracking-[6px] text-[12px] md:text-[30px] font-[600] mb-[15px] md:mb-[60px]'>
            1 SOW PASS = ${formatEther(price.toString())} ~ 0.10BNB
          </h4>

          <p className='text-[11px] md:text-[24px] font-[400] mb-[18px] md:mb-[60px]'>
            You have <span className='font-[600]'>{Number(SOWBalance)}</span> SOW PASSES
          </p>

          <div className='flex'>
            <input
              type='number'
              aria-autocomplete="none"
              onWheel={(e)=>e.target.blur()}
              onKeyDown={(e)=>{
                (e.key === 'ArrowUp' || e.key === 'ArrowDown')? e.preventDefault() : null
                if (e.key && !/\d/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onChange={(e)=>{
                setAmount(e.target.value)
              }}
              min={1}
              defaultValue={1}
              style={{ appearance: 'textfield', 'MozAppearance': 'textfield', 'WebkitAppearance': 'textfield' }}
              //stuff that didn't look good:
              //placeholder:text-[12px] md:placeholder:text-[25px] placeholder:font-[600] dark:placeholder-[#FFFFFF]
              className='bg-[#301452] border-[0.1px] border-[#FFFFFF40]  text-[16px] font-[600] rounded-l-[7px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] md:py-[20px] ps-[22px] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={amount}
            />
            <span className='inline-flex items-center px-3 justify-center text-[#FFFFFF] bg-[#821DFE]  rounded-r-md w-[62px] md:w-[200px] text-[12px] md:text-[30px] font-[600]'>
              SOW
            </span>
          </div>

          <div className='py-[18px] md:py-[60px] border-b-[0.3px] border-[#FFFFFF40]'>
            <h2 className='font-[500] text-[12px] md:text-[30px] text-[#BCBCBC]'>
              1 SOW PASS = ${formatEther(price.toString())} USDC ~ 0.10 BNB
            </h2>
          </div>

          <div className='pt-[17px] md:pt-[60px] pb-[13px] md:pb-[90px]'>
            {USDCBalance < price?<h2 className='text-[12px] md:text-[30px] font-[600] mb-[13px] md:mb-[50px]'>
              Insufficient USDC Balance
            </h2>:''}

            <div className='flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center'>
              <p className='text-[11px] md:text-[24px]'>USDC Balance:</p>
              <p className='text-[12px] md:text-[30px] font-[500]'>${formatEther(USDCBalance)}</p>
            </div>
            <div className='flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center'>
              <p className='text-[11px] md:text-[24px]'>BNB Balance:</p>
              <p className='text-[12px] md:text-[30px] font-[500]'>{Balance.formatted?.slice(0,6)}</p>
            </div>
            <div className='flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center'>
              <p className='text-[11px] md:text-[24px]'>Total Minted:</p>
              <p className='text-[12px] md:text-[30px] font-[500]'>{Number(totalSupply)}/{Number(maxSupply)}</p>
            </div>
          </div>

          {allowance > totalPrice? <button onClick={()=> approveUSDC()} className='text-[12px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px] px-[1vw] py-[10px] md:py-[20px] text-center w-[100%]'>
            Approve {formatEther(totalPrice)} USDC to mint {amount} SOW
          </button>:<button onClick={()=> mint()} className='text-[12px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px] px-[1vw] py-[10px] md:py-[20px] text-center w-[100%]'>
            Mint {amount.toString()} SOW for {formatEther(totalPrice)} USDC
          </button>}

          {/* <button className='text-[12px] md:text-[20px]  font-[600] uppercase bg-[#35185F;] rounded-[7px] px-[1vw] py-[10px] md:py-[20px] mt-[16px] md:mt-[45px] w-[100%]'>
            Mint with credit card
          </button> */}
        </div>
      </div>
    </>
  );
};

export default PurchaseSow;
