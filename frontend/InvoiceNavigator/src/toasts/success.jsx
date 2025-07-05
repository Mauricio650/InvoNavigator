import { BiCheck } from 'react-icons/bi'
import { toast } from 'sonner'

export const SuccessToast = ({ title, description }) => {
  return toast.custom((t) => (
    <div
      className='w-[380px] bg-sky-50 border border-green-400 rounded-lg p-4 shadow-md flex items-start gap-3 animate-in fade-in duration-300'
    >
      <BiCheck className='text-green-600 text-2xl mt-1' />
      <div className='flex flex-col text-green-700 font-mono'>
        <strong className='text-base'>{title}</strong>
        <span className='text-sm'>{description}</span>
      </div>
    </div>
  ))
}
