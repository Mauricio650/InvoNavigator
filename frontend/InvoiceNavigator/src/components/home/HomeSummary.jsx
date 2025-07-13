import { TaskProgressBar } from '../tasks/TaskProgressBar'
import '../../assets/styles/animations.css'
import { StatusMonthly } from './StatusMonthly'
import { Tasks } from '../tasks/Tasks'
import { useFetchInvoices } from '../../hooks/fetchs/useFetchInvoices'

export function HomeSummary () {
  useFetchInvoices()
  return (

    <article className='w-full h-full flex flex-col'>
      <section className='w-full h-1/3'>
        <TaskProgressBar />
      </section>

      <section className='w-full h-1/2 mb-10'>
        <StatusMonthly />
      </section>

      <section className='w-full h-2/2 overflow-y-scroll bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg'>
        <Tasks />
      </section>

    </article>

  )
}
