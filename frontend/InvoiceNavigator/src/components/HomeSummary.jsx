import { TaskProgressBar } from './TaskProgressBar'
import '../assets/styles/animations.css'
import { StatusMonthly } from './StatusMonthly'

export function HomeSummary () {
  return (

    <article className='w-full h-full flex flex-col'>
      <section className='w-full h-1/3'>
        <TaskProgressBar completed={34} total={100} />
      </section>

      <section className='w-full h-1/2 mb-10'>
        <StatusMonthly />
      </section>

      <section className='w-full h-2/2'>
        <div className='bg-white/60 backdrop-blur-3xl p-4 rounded-xl shadow h-full'>
          <ul className='space-y-2'>
            <li>CONTAINER TASKS</li>
          </ul>

        </div>
      </section>
    </article>

  )
}
