import { LineChart } from "./charts/LineChart";

const SowPrice = () => {
  return (
    <>
      <div>
        <h2 className="uppercase font-[900] text-[24px] md:text-[48px] mt-[40px] md:mt-[100px] mb-[24px] md:mb-[50px] text-center">
          SOW PRICE
        </h2>
        <LineChart />
        {/* <img src="/src/assets/lineChart.png" alt="chart" className="w-[100%]"/> */}
      </div>
    </>
  );
};

export default SowPrice;
