import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: (context) => {
          if (context.tick.$context.index === 0) {
            return '#FFFFFF'
          } else {
            return '#FFFFFF00'
          }
        },

      },
      ticks: {
        color: "#FFFFFF",
        font: {
          size: '16px'
        }
      },
    },
    y: {
      grid: {
        color: (context) => {
          if (context.tick.$context.index === 0) {
            return '#FFFFFF'
          } else {
            return '#373737'
          }
        },
      },
      ticks: {
        callback: function (value, index, ticks) {
          return "$" + value + "M";
        },
        color: "#FFFFFF",
        font: {
          size: '16px'
        }
      },
    },
  },
};

const labels = [
  "June 17",
  "June 18",
  "June 19",
  "June 20",
  "June 21",
  "June 22",
  "June 23",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["1", "2", "3", "2", "4", "3", "2", "5"],
      borderColor: "#06B8E0",
      backgroundColor: "#821DFE",
      pointRadius: 5,
      pointBorderColor: "#821DFE",
    },
  ],
};

export function LineChart() {

  return (
    <>
      {/* make iframe fill parent container */}
      <style dangerouslySetInnerHTML={{
        __html: `
    #dexscreener-embed{
      position:relative;
      width:100%;
      padding-bottom:125%;
    }
    @media(min-width:1400px){
      #dexscreener-embed
      {padding-bottom:65%;
      }
    }
    #dexscreener-embed iframe{
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      border:0;
      border-radius:24px;}
    `}} />
      <div id="dexscreener-embed" >
        <iframe src="https://dexscreener.com/bsc/0xf41723395ABE6e1D9D9c2D0CCF4e3839A8E637d6?embed=1&theme=dark&trades=0&info=0" />
      </div>
    </>
  )
  //<Line options={options} data={data} />;
}
