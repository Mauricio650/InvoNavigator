import { useContext } from 'react'
import { FormNewTask } from './FormNewTask'
import { TasksContext } from '../../context/taskManager/tasksContext'

export function StatusTasks () {
  const { tasks } = useContext(TasksContext)

  return (
    <article className='h-full 2xl:h-1/2 w-full  bg-gradient-to-r from-indigo-100 to-white rounded-lg px-2  2xl:px-6 2xl:py-4 2xl:mt-4 flex flex-col gap-1 2xl:gap-4 justify-center items-center'>
      <article className='flex'>
        <div className='text-left'>
          <h2 className='text-gray-700 text-xs text-center 2xl:text-lg 2xl:font-medium'>Active Tasks</h2>
          <p className='2xl:text-2xl text-xs text-center font-bold text-indigo-700'>{tasks.length}</p>
        </div>
        <div className='w-px 2xl:h-10 bg-gray-300 2xl:mx-6' />
        <div className='text-left'>
          <h2 className='text-gray-700 text-xs text-center 2xl:text-lg 2xl:font-medium'>Completed tasks</h2>
          <p className='2xl:text-2xl text-xs text-center font-bold text-green-600'>{tasks.filter(t => t.status === 'completed').length}</p>
        </div>
      </article>

      <FormNewTask />
    </article>
  )
}
