import LeftMenu from '../components/LeftMenu';
import PurchaseSow from '../components/PurchaseSow';
import ROICalculator from '../components/ROICalculator';
import Rewards from '../components/Rewards';
import SowPasses from '../components/SowPasses';
import SowPrice from '../components/SowPrice';
import TreasuryAssets from '../components/TreasuryAssets';

const MainLayout = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-[25%_75%]'>
        <div className='hidden md:block '>
          <LeftMenu />
        </div>
        <div className=''>
          <div className='md:flex gap-[20px] w-[100%]'>
            <SowPasses />
            <ROICalculator />
          </div>

          <div>
            <Rewards />
          </div>

          <div>
            <PurchaseSow id='mint' />
          </div>
          <div>
            <SowPrice />
          </div>
          <div>
            <TreasuryAssets />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
