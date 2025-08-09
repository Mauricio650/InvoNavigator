import { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { InvoicesContext } from '../../context/invoicesContext'
import { statusByDate } from '../../logic/statusByDate'
ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart () {
  const { invoicesData } = useContext(InvoicesContext)
  const statusMonth = statusByDate(invoicesData)
  const data = {
    labels: ['Pending', 'Accepted', 'Rejected'],
    datasets: [
      {
        label: '# of Invoices',
        data: [statusMonth.pending, statusMonth.accepted, statusMonth.rejected],
        backgroundColor: [
          'rgb(53, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)'
        ],
        borderColor: [
          'rgb(53, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 2
      }
    ]
  }
  return (
    <Doughnut data={data} />
  )
}
