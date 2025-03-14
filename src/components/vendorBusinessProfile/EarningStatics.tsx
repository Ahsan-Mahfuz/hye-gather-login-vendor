'use client'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const EarningStatics = () => {
  const currentYear = new Date().getFullYear()

  const years = Array.from(
    { length: currentYear - 2024 + 1 },
    (_, i) => 2024 + i
  )
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const EarningStaticsGrowth = {
    labels: months,
    datasets: [
      {
        label: 'Earnings',
        data: [150, 120, 110, 130, 120, 140, 135, 130, 125, 120, 115, 125],
        backgroundColor: '#0033A0',
      },
    ],
  }

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow my-10 border">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Earning Statics </h2>
        <select className="p-2 bg-blue-100 text-xs rounded-md cursor-pointer outline-none">
          {years.map((year) => (
            <option
              key={year}
              value={year}
              className="p-2 text-xs cursor-pointer"
            >
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full h-[300px] sm:h-[400px]">
        <Bar
          data={EarningStaticsGrowth}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              bar: {
                borderRadius: 30,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 50,
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default EarningStatics
