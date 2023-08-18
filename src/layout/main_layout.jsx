import LeftMenu from "../components/LeftMenu";
import PurchaseSow from "../components/PurchaseSow";
import ROICalculator from "../components/ROICalculator";
import Rewards from "../components/Rewards";
import SowPasses from "../components/SowPasses";
import SowPrice from "../components/SowPrice";
import TreasuryAssets from "../components/TreasuryAssets";

const MainLayout = () => {
  return (
    <>
      <div className="md:flex justify-between gap-[20px] mt-[56px]">
        <div className="hidden md:block ">
          <LeftMenu />
        </div>
        <div className="w-[100%]">
          <div className="md:flex gap-[20px] w-[100%]">
            <SowPasses />
            <ROICalculator />
          </div>

          <div>
            <Rewards />
          </div>

          <div>
            <PurchaseSow />
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
