import { TaskProgressBar } from './TaskProgressBar'
import '../assets/styles/animations.css'
import { StatusMonthly } from './StatusMonthly'
import { useTasks } from '../hooks/taskManager/useTasks'

export function HomeSummary () {
  const { tasks } = useTasks()
  return (

    <article className='w-full h-full flex flex-col'>
      <section className='w-full h-1/3'>
        <TaskProgressBar />
      </section>

      <section className='w-full h-1/2 mb-10'>
        <StatusMonthly />
      </section>

      <section className='w-full h-2/2'>
        <div className='bg-white/60 backdrop-blur-3xl p-4 rounded-xl shadow h-full'>
          <ul className='space-y-2'>
            {tasks.map(t => <li key={t.id}>{t.task}</li>)}
          </ul>

        </div>
      </section>
    </article>

  )
}
