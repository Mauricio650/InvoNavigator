import { useAuth } from '../../hooks/auth/useAuth'
import { useContext } from 'react'
import { TasksContext } from '../../context/taskManager/tasksContext'

export function TaskProgressBar () {
  const { tasks } = useContext(TasksContext)

  const completedTasks = [...tasks].filter(t => t.status === 'completed')

  const percentage = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0
  const { user } = useAuth()
  const { username } = user.user

  return (
    <div
      style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
      className='w-full flex  sm:justify-between items-center'
    >
      <h1
        className='text-sky-900 sm:text-2xl font-bold'
      >
        Hi {username}!
      </h1>

      <article className='flex-1 flex justify-end gap-2 items-center'>
        <p className='font-bol text-xs sm:text-md text-white'>{tasks.length == 0 ? 'No tasks' : 'Task completed'} {percentage}%</p>
        <div className='relative w-[100px] rounded-full bg-white h-2'>
          <div style={{'width': percentage}} className={`absolute h-[100%] rounded-full bg-blue-600`}></div>
        </div>
      </article>

    </div>
  )
}
