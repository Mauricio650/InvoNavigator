import { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { InvoicesContext } from '../../context/invoicesContext'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChartNotes () {
  const { invoicesData } = useContext(InvoicesContext)
  const notesAndRejected = [...invoicesData].reduce((acc, prev) => {
    if (prev.status !== 'rejected') return acc
    if (prev.status === 'rejected') {
      acc.rejected += 1
      if (prev.message !== 'empty') {
        acc.howMany += 1
      }
    }
    return acc
  }, { rejected: 0, howMany: 0 })
  const data = {
    labels: ['Rejected', 'With Notes'],
    datasets: [
      {
        label: '# of Invoices',
        data: [notesAndRejected.rejected, notesAndRejected.howMany],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)'
        ],
        borderWidth: 2
      }
    ]
  }
  return (
    <Doughnut data={data} />
  )
}
