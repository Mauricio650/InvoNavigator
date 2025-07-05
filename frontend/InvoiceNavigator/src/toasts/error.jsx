import { BiError } from 'react-icons/bi'
import { toast } from 'sonner'

export const ErrorToast = ({ path, description }) => {
  return toast.custom((t) => (
    <div
      className='w-[380px] bg-sky-50 border border-red-400 rounded-lg p-4 shadow-md flex items-start gap-3 animate-in fade-in duration-300'
    >
      <BiError className='text-red-600 text-2xl mt-1' />
      <div className='flex flex-col text-red-700 font-mono'>
        <strong className='text-base'>Error in {path}</strong>
        <span className='text-sm'>{description}</span>
      </div>
    </div>
  ))
}
