const PurchaseSow = () => {
  return (
    <>
      <div>
        <h2 className="uppercase font-[900] text-[24px] md:text-[48px] mt-[40px] md:mt-[100px] mb-[20px] md:mb-[50px]">
          Purchase SOW
        </h2>

        <div className="rounded-[20px] border-[#FFFFFF40] border-[0.2px] gradient-card px-[30px] md:px-[50px] py-[28px] md:py-[70px] text-center">
          <h4 className="tracking-[2.4px] md:tracking-[6px] text-[12px] md:text-[30px] font-[600] mb-[15px] md:mb-[60px]">
            1 SOW PASS = $25 ~ 0.10BNB
          </h4>

          <p className="text-[11px] md:text-[24px] font-[400] mb-[18px] md:mb-[60px]">
            You have <span className="font-[600]">0</span> SOW PASSES
          </p>

          <div className="flex">
            <input
              type="text"
              className="bg-[#301452] border-[0.1px] border-[#FFFFFF40]  text-[16px] font-[600] rounded-l-[7px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] md:py-[20px] ps-[22px] placeholder:text-[12px] md:placeholder:text-[25px] 
            placeholder:font-[600]
            dark:placeholder-[#FFFFFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
            />
            <span className="inline-flex items-center px-3 justify-center text-[#FFFFFF] bg-[#821DFE]  rounded-r-md w-[62px] md:w-[200px] text-[12px] md:text-[30px] font-[600]">
              SOW
            </span>
          </div>

          <div className="py-[18px] md:py-[60px] border-b-[0.3px] border-[#FFFFFF40]">
            <h2 className="font-[500] text-[12px] md:text-[30px] text-[#BCBCBC]">
              1 SOW PASS = $25 USDC ~ 0.10 BNB
            </h2>
          </div>

          <div className="pt-[17px] md:pt-[60px] pb-[13px] md:pb-[90px]">
            <h2 className="text-[12px] md:text-[30px] font-[600] mb-[13px] md:mb-[50px]">
              Insufficient USDC Balance
            </h2>

            <div className="flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center">
              <p className="text-[11px] md:text-[24px]">USDC Balance:</p>
              <p className="text-[12px] md:text-[30px] font-[500]">$0</p>
            </div>
            <div className="flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center">
              <p className="text-[11px] md:text-[24px]">Binance Balance:</p>
              <p className="text-[12px] md:text-[30px] font-[500]">0</p>
            </div>
            <div className="flex gap-[30px] mb-[11px] md:mb-[30px] items-center justify-center">
              <p className="text-[11px] md:text-[24px]">Total Minted:</p>
              <p className="text-[12px] md:text-[30px] font-[500]">800/1000</p>
            </div>
          </div>

          <button className="text-[12px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px] px-[66px] py-[10px] md:py-[20px] text-center w-[100%]">
            Approve USDC
          </button>

          <button className="text-[12px] md:text-[20px]  font-[600] uppercase bg-[#35185F;] rounded-[7px] px-[66px] py-[10px] md:py-[20px] mt-[16px] md:mt-[45px] w-[100%]">
            Mint with credit card
          </button>
        </div>
      </div>
    </>
  );
};

export default PurchaseSow;
