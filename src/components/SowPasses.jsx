const SowPasses = () => {
  return (
    <>
      <div className='rounded-[10px] border-[#FFFFFF40] border-[0.2px] w-[100%] md:w-[50%]  px-[35px] pt-[35px] pb-[45px] text-center gradient-card mb-[30px] md:mb-[0px]'>
        <div id='card-header'>
          <div className='flex w-full justify-center items-center'>
            <img src='/assets/logo-icon.png' alt='icon' />
          </div>
          <div>
            <h4 className='mt-[16px] md:mt-[25px] mb-[12px] md:mb-[20px] text-[16px] md:text-[24px] font-[700]'>
              SOW PASSES
            </h4>
            <div className='flex gap-[5px] justify-center items-center'>
              <img
                src='/assets/mdi_twitter.png'
                className='w-[12px] h-[12px] md:w-[auto] md:h-[auto]'
              />
              <p className='font-[500] text-[#821DFE] text-[12px] md:text-[16px]'>
                SOW_Financial
              </p>
            </div>
            <div>
              <p
                className='leading-[26px]
                text-[#CACACA] mt-[19px] md:mt-[30px] mb-[20px] md:mb-[35px] md:mx-[30px]'
              >
                Store of Wealth Fund Pass, a yield generating NFT allowing you
                to receive a sustainable yield from real yield investments.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-[46px]'>
          <div>
            <div className='flex justify-between mb-[13px] md:mb-[20px]'>
              <p className='font-[500] leading-[26px]'>Quantity</p>

              <select
                name='quantity'
                className='sel w-[66px] bg-[#2A104D] rounded-[3px] text-center border-[0.2px] border-[#FFFFFF40] h-[30px] pr-[10px]'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <div className='flex justify-between mb-[13px] md:mb-[20px]'>
              <p className='font-[500] leading-[26px]'>Item Cost</p>
              <p className='font-[500] leading-[26px]'>$25.00</p>
            </div>
            <div className='flex justify-between mb-[13px] md:mb-[20px]'>
              <p className='font-[500] leading-[26px]'>Item Cost</p>
              <p className='font-[500] leading-[26px]'>$25.00</p>
            </div>
            <div className='flex justify-between mb-[13px] md:mb-[20px]'>
              <p className='font-[500] leading-[26px]'>Fees</p>
              <p className='font-[400] leading-[26px] text-[#888888]'>
                Calculated at payment
              </p>
            </div>
            <div className='flex justify-between pt-[20px] border-t-[0.2px]'>
              <p className='font-[500] leading-[26px]'>Subtotal</p>
              <p className='font-[400] leading-[26px]'>$25.00</p>
            </div>
          </div>
          <div>
            <button className='flex items-center gap-[10px] text-[12px] md:text-[20px] font-[600] uppercase bg-[#35185F;] rounded-[7px] px-[45px] md:px-[66px] py-[15px] mt-[10px] md:mt-[45px] w-[100%] justify-center'>
              <img src='/assets/ic_baseline-email.png' alt='icon' />
              Continue with email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SowPasses;
