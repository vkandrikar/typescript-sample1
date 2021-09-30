import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [3, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options: any = {
  title: {
    display: true,
    text: 'Line Chart Sample'
  },
  scales: {
    y: {
      display: true,
      title: {
        display: true,
        text: 'Values'
      },
      ticks: {
        stepSize: 5
      },
      min: 0
    },
    x: {
      title: {
        display: true,
        text: 'xAxis title'
      }
    }
  },
};

export const LineChartSample = () => {
  return (
    <div style={{ width: '800px', height: '70vh', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  )
}
