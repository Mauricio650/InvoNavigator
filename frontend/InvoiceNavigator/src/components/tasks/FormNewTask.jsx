import { useRef } from 'react'
import { useTasks } from '../../hooks/taskManager/useTasks'
import { toast } from 'sonner'

export function FormNewTask () {
  const inputRef = useRef(null)
  const { newTask } = useTasks()

  const handleSubmit = e => {
    e.preventDefault()
    const regex = /[^a-zA-Z0-9 ]|^[^a-zA-Z]*$/
    if (regex.test(inputRef.current.value)) return toast.warning('Invalid characters, please try again!')
    newTask(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <article className='w-full  text-sky-900 backdrop-blur-md px-6 py-4 mt-4  rounded-xl shadow p-6 max-w-xl mx-auto'>
      <h2 className='text-center text-xl font-semibold text-gray-800 mb-4'>
        Add New Task
      </h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
        <input
          ref={inputRef}
          type='text'
          name='task'
          placeholder='Enter your task...'
          className='flex-1 w-full px-4 py-3 rounded-lg shadow-md bg-white/80 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
          required
        />
        <button
          type='submit'
          className='bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200'
        >
          Add Task
        </button>
      </form>
    </article>
  )
}
