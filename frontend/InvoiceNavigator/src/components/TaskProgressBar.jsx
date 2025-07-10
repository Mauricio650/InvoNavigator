import { useAuth } from '../hooks/useAuth'
import { useContext } from 'react'
import { TasksContext } from '../context/tasksContext'

export function TaskProgressBar () {
  const { tasks } = useContext(TasksContext)
  const completedTasks = tasks.filter(t => t.status === 'completed')

  const percentage = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0
  const { user } = useAuth()
  const { username } = user.user

  return (
    <div
      style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
      className='w-full flex  justify-between items-center'
    >
      <h1
        className='text-sky-900 text-2xl font-bold'
      >
        Hi {username}!
      </h1>

      <div className='flex items-center w-xs'>

        <div className='w-md flex justify-end mr-5'>
          <p className='text-sky-800 font-medium'>{percentage}% Task Completed</p>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div className='w-full bg-white rounded-full h-2'>
            <div
              className='bg-blue-700 h-2 rounded-full'
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

      </div>

    </div>
  )
}
