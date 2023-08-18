import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["USD+", "DAI / USDC", "MATIC / SPHERE", "USDT / USDC / DAI"],
  datasets: [
    {
      label: '# of Votes',
      data: [25,25,25,25],
      backgroundColor: [
        '#50E9B2',
        '#06B8E0',
        '#821DFE',
        '#1576C6',
      ],
      borderColor: [
        '#50E9B2',
        '#06B8E0',
        '#821DFE',
        '#1576C6',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive: true,
  plugins: {
    legend: {
        display:false,
    },
  },
}

export function PieChart() {
  return <Pie data={data} options={options}/>;
}
