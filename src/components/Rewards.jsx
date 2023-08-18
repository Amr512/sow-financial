import { useRef } from 'react';
const Rewards = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div>
        <h2 className='uppercase font-[900] text-[24px] md:text-[48px] mt-[40px] md:mt-[100px] mb-[20px] md:mb-[50px]'>
          Claim your rewards
        </h2>

        <div className='hidden md:flex justify-between gap-[20px]'>
          {[...Array(3)].map((_e, i) => (
            <div
              className='rounded-[20px] border-[#FFFFFF40] border-[0.2px] gradient-card px-[7px] md:px-[20px] py-[12px] md:py-[32px] w-[33.33%] text-center'
              key={i}
            >
              <div className='relative flex w-full justify-center items-center'>
                <img src='/assets/circle.png' alt='circle' />
              </div>

              <div className='my-[18px] md:my-[45px]'>
                <p className='font-[600] text-[11px] md:text-[20px] '>
                  <span className='font-[400]'>Value:</span> $50,000
                </p>
              </div>

              <button className='flex items-center gap-[10px] text-[10px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px]  py-[5px] md:py-[16px] mt-[18px] md:mt-[45px] justify-center w-[100%]'>
                <img
                  src='/assets/material-symbols_trophy.png'
                  alt='icon'
                  className='w-[15px] md:w-[auto]'
                />
                Claim
              </button>
            </div>
          ))}
        </div>

        <div className='block md:hidden relative'>
          <button
            type='button'
            onClick={() => scroll(40)}
            className='absolute top-[70px] right-0 z-[999999] w-[26px]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
            >
              <g filter='url(#filter0_d_60_475)'>
                <circle cx='17' cy='17' r='13' fill='white' />
              </g>
              <path
                d='M15.1719 20.6566L18.8281 17.0004L15.1719 13.3441'
                stroke='#3D3D3D'
                strokeWidth='1.7'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <defs>
                <filter
                  id='filter0_d_60_475'
                  x='0'
                  y='0'
                  width='34'
                  height='34'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_60_475'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_60_475'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
            <span className='sr-only'>Icon description</span>
          </button>
          <div
            className='flex md:hidden overflow-x-scroll pb-10 hide-scroll-bar'
            ref={ref}
          >
            <div className='flex flex-nowrap'>
              {[...Array(4)].map((_e, i) => (
                <div className='inline-block px-3' key={i}>
                  <div className='w-[108px] max-w-xs overflow-hidden shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-[20px] border-[#FFFFFF40] border-[0.2px] gradient-card px-[7px] md:px-[20px] py-[12px] md:py-[32px] text-center'>
                    <div className='relative flex w-full justify-center items-center'>
                      <img src='/assets/circle.png' alt='circle' />
                    </div>

                    <div className='my-[18px] md:my-[45px]'>
                      <p className='font-[600] text-[11px] md:text-[20px] '>
                        <span className='font-[400]'>Value:</span> $50,000
                      </p>
                    </div>

                    <button className='flex items-center gap-[10px] text-[10px] md:text-[20px] font-[600] uppercase bg-[#821DFE] rounded-[7px]  py-[5px] md:py-[16px] mt-[18px] md:mt-[45px] justify-center w-[100%]'>
                      <img
                        src='/assets/material-symbols_trophy.png'
                        alt='icon'
                        className='w-[15px] md:w-[auto]'
                      />
                      Claim
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewards;
