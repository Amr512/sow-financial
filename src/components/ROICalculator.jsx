const ROICalculator = () => {
  const inputFields = [
    {
      label: "Investment:",
      placeholder: "$50,000.00",
    },
    {
      label: "Return:",
      placeholder: "$75,000.00",
    },
    {
      label: "Number of month:",
      placeholder: "1",
    },
  ];
  return (
    <>
      <div className='rounded-[10px] border-[#FFFFFF40] border-[0.2px] w-[100%] md:w-[50%] px-[35px] pt-[35px] pb-[45px] gradient-card '>
        <div>
          <h2 className='uppercase text-[16px] md:text-[30px] font-[700]'>
            ROI calculator
          </h2>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='mt-[40px] md:mt-[60px] mb-[40px] md:mb-[95px] 3xl:mb-[65px]'>
            {inputFields.map((field, i) => {
              const { label, placeholder } = field;

              return (
                <div className='mb-[35px]' key={i}>
                  <label
                    htmlFor='invesment'
                    className='block mb-[20px] text-[16px] font-medium dark:text-white'
                  >
                    {label}
                  </label>

                  <input
                    type='text'
                    className='bg-[#301452] border-[0.3px] border-[#FFFFFF40]  text-[16px] font-[600] rounded-[7px] focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] md:py-[20px] ps-[22px] placeholder:text-[16px] 
                  placeholder:font-[600]
                  dark:placeholder-[#FFFFFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder={placeholder}
                  />
                </div>
              );
            })}
          </div>
          <button className='text-[12px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px] px-[45px] md:px-[1vw] py-[15px] mt-[10px] md:mt-[45px] w-[100%] text-center'>
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default ROICalculator;
