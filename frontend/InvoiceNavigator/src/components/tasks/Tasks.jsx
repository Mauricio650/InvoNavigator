import { useContext } from 'react'
import { BiCheckCircle, BiTimeFive, BiTrash, BiCheck, BiTaskX } from 'react-icons/bi'
import { TasksContext } from '../../context/tasksContext'
import { useAuth } from '../../hooks/useAuth'

export function Tasks () {
  const { tasks, deleteTask, changeStatusTask } = useContext(TasksContext)
  const { user } = useAuth()
  return (
    <div className='rounded-xl h-full w-full'>
      {tasks?.length === 0 && (
        <div className='flex flex-col items-center justify-center h-full gap-4 text-center empty-fade'>
          <BiTaskX className='text-6xl text-blue-400 drop-shadow-md' />
          <h2 className='text-xl font-semibold text-gray-700'>¡You have no pending Tasks!</h2>
          <p className='text-sm text-gray-500'>Add a new task to start organizing your day 🚀</p>
        </div>
      )}

      <ul className='space-y-3'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='flex items-center justify-between bg-white/60 backdrop-blur-md rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all hover:bg-gray-200 duration-200'
          >
            {/* Left: icon + task name */}
            <div className='flex items-center gap-3'>
              {task.status === 'completed'
                ? (
                  <BiCheckCircle size={28} className='text-green-500' />
                  )
                : (
                  <BiTimeFive size={28} className='text-yellow-500 ' />
                  )}

              <span className={`text-sm sm:text-base font-medium ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.task}
              </span>
            </div>

            <div className='flex items-center gap-2'>
              {task.status !== 'completed' && (
                <button
                  onClick={() => changeStatusTask({ id: task.id, user: user.user.username })}
                  title='Mark as done'
                  className='text-green-600 hover:text-green-800 transition'
                >
                  <BiCheck size={28} />
                </button>
              )}
              <button
                onClick={() => deleteTask({ id: task.id, user: user.user.username })}
                title='Delete'
                className='text-red-500 hover:text-red-700 transition'
              >
                <BiTrash size={28} />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}
