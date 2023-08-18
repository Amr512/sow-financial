import { PieChart } from './charts/PieChart';

const TreasuryAssets = () => {
  const buttonsData = [
    {
      content: '7 Days',
      active: true,
    },
    {
      content: '14 Days',
      active: false,
    },
    {
      content: '30 Days',
      active: false,
    },
    {
      content: '90 Days',
      active: false,
    },
    {
      content: '180 Days',
      active: false,
    },
  ];

  const chartData = [
    {
      image: '/assets/Ellipse1.png',
      content: 'USD+',
    },
    {
      image: '/assets/Ellipse2.png',
      content: 'DAI / USDC',
    },
    {
      image: '/assets/Ellipse3.png',
      content: 'MATIC / SPHERE',
    },
    {
      image: '/assets/Ellipse4.png',
      content: 'USDT / USDC / DAI',
    },
  ];
  return (
    <>
      <div>
        <h2 className='uppercase font-[900] text-[24px] md:text-[48px] mt-[40px] md:mt-[100px] mb-[24px] md:mb-[50px]'>
          Value of treasury assets
        </h2>

        <div
          className='flex gap-[3px] md:gap-[10px] justify-between'
          id='btn-container'
        >
          {buttonsData.map((data, i) => {
            const { content, active } = data;

            return (
              <button
                className={`py-[8px] px-[12px] md:p-[8px] text-[10px] md:text-[20px] lg:py-[31px] lg:px-[55px] rounded-[7px] ${
                  active ? 'bg-[#821DFE]' : 'bg-[#35185F]'
                }`}
                key={i}
              >
                {content}
              </button>
            );
          })}
        </div>

        <h2 className='my-[20px] md:my-[50px]  text-[14px] md:text-[30px] font-[600] text-center'>
          Total: $6M
        </h2>
        <div className='flex w-full justify-center items-center relative'>
          <h2 className='md:text-[40px] absolute top-[100px] md:top-[280px] left-[90px] md:left-[240px] z-[999999]'>
            $2M
          </h2>
          <h2 className='md:text-[40px] absolute top-[100px] md:top-[280px] right-[90px] md:right-[240px] z-[999999]'>
            $2M
          </h2>
          <h2 className='md:text-[40px] absolute bottom-[80px] md:bottom-[280px] left-[90px] md:left-[240px] z-[999999]'>
            $2M
          </h2>
          <h2 className='md:text-[40px] absolute bottom-[80px] md:bottom-[280px] right-[90px] md:right-[240px] z-[999999]'>
            $2M
          </h2>
          <PieChart />
          {/* <img src="/assets/pieChart.png" alt="chart" /> */}
        </div>
        <div className='flex flex-col md:flex-row gap-[10px] md:gap-[30px] justify-center mt-[30px] md:mt-[55px]'>
          {chartData.map((data, i) => {
            const { content, image } = data;

            return (
              <div className='flex gap-[10px] items-center' key={i}>
                <img src={image} alt='icon' className='h-[15px] md:h-[auto]' />
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TreasuryAssets;
