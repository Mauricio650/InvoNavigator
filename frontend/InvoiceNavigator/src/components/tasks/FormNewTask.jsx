import { useRef } from 'react'
import { useTasks } from '../../hooks/taskManager/useTasks'
import { toast } from 'sonner'
import { useAuth } from '../../hooks/auth/useAuth'

export function FormNewTask () {
  const inputRef = useRef(null)
  const { newTask } = useTasks()
  const { user } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    const regex = /[^a-zA-Z0-9 ]|^[^a-zA-Z]*$/
    if (regex.test(inputRef.current.value)) return toast.warning('Invalid characters, please try again!')
    newTask({ task: inputRef.current.value, user: user.user.username })
    inputRef.current.value = ''
  }

  return (
    <article className='text-sky-900 backdrop-blur-md rounded-xl'>
      <h2 className='text-center text-xs 2xl:text-xl font-semibold text-gray-800 2xl:mb-4'>
        Add New Task
      </h2>
      <form onSubmit={handleSubmit} className='flex p-4 flex-col justify-center items-evenly gap-3'>
        <input
          ref={inputRef}
          type='text'
          name='task'
          placeholder='Enter your task...'
          className='flex-1 w-full  p-2 text-xs 2xl:text-lg rounded-lg shadow-md bg-white/80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <button
          type='submit'
          className='bg-blue-600 text-xs p-1 2xl:text-lg cursor-pointer text-white 2xl:px-6 2xl:py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200'
        >
          Add Task
        </button>
      </form>
    </article>
  )
}
