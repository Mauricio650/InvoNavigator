import { useContext } from 'react'
import { FormNewTask } from './FormNewTask'
import { TasksContext } from '../../context/taskManager/tasksContext'

export function StatusTasks () {
  const { tasks } = useContext(TasksContext)

  return (
    <article className='p-2 flex flex-col justify-evenly w-full h-full bg-white/60 backdrop-blur-md rounded-lg'>
     <FormNewTask />
      <article className='flex flex-col md:flex-row justify-evenly gap-2'>
        <div className='text-left bg-white/60 backdrop-blur-md p-2 rounded-xl'>
          <h2 className='text-gray-700 text-xs text-center 2xl:text-lg 2xl:font-medium'>Active Tasks</h2>
          <p className='2xl:text-2xl text-xs text-center font-bold text-indigo-700'>{tasks.length}</p>
        </div>
        <div className=' bg-gray-300' />
        <div className='text-left bg-white/60 backdrop-blur-md p-2 rounded-xl'>
          <h2 className='text-gray-700 text-xs text-center 2xl:text-lg 2xl:font-medium'>Completed tasks</h2>
          <p className='2xl:text-2xl text-xs text-center font-bold text-green-600'>{tasks.filter(t => t.status === 'completed').length}</p>
        </div>
      </article>
    </article>
  )
}
