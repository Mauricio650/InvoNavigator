import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useContext } from 'react'
import { Bar } from 'react-chartjs-2'
import { InvoicesContext } from '../../context/invoicesContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export function BartChart () {
  const { invoicesData } = useContext(InvoicesContext)

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthStatus = [...invoicesData].reduce((acc, prev) => {
    const monthNumber = new Date(prev.uploadAt).getMonth()
    acc[prev.status][monthNumber] += 1
    return acc
  }, {
    accepted: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    rejected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    pending: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  })

  const data = {
    labels,
    datasets: [
      {
        label: 'Pending',
        data: monthStatus.pending,
        backgroundColor: 'rgb(53, 162, 235)'
      },
      {
        label: 'Accepted',
        data: monthStatus.accepted,
        backgroundColor: 'rgb(75, 192, 192)'
      },
      {
        label: 'Rejected',
        data: monthStatus.rejected,
        backgroundColor: 'rgb(255, 99, 132)'
      }
    ]
  }
  return <Bar options={options} data={data} />
}
