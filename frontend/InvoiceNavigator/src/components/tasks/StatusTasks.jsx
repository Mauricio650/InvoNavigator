import { useTasks } from '../../hooks/taskManager/useTasks'
import { FormNewTask } from './FormNewTask'

export function StatusTasks () {
  const { tasks } = useTasks()

  return (
    <article className='h-1/2 w-full  bg-gradient-to-r from-indigo-100 to-white rounded-lg  px-6 py-4 mt-4 flex flex-col gap-4 justify-center items-center'>
      <article className='flex'>
        <div className='text-left'>
          <h2 className='text-gray-700 text-lg font-medium'>Active Tasks</h2>
          <p className='text-2xl font-bold text-indigo-700'>{tasks.length}</p>
        </div>
        <div className='w-px h-10 bg-gray-300 mx-6' />
        <div className='text-left'>
          <h2 className='text-gray-700 text-lg font-medium'>Completed tasks</h2>
          <p className='text-2xl font-bold text-green-600'>{tasks.filter(t => t.status === 'completed').length}</p>
        </div>
      </article>

      <FormNewTask />
    </article>
  )
}
