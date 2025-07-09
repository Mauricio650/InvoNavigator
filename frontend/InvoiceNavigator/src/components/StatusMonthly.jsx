import { toast } from 'sonner'
import { useInvoices } from '../hooks/useInvoices'
import { statusByDate } from '../logic/statusByDate'
import { BiCheck, BiError, BiTime, BiTimer } from 'react-icons/bi'

export function StatusMonthly () {
  const { invoicesData, loading, error } = useInvoices()

  const statusMonth = statusByDate(invoicesData)

  if (loading) return <h1>Loading....</h1>

  return (
    <article className=' bg-white/60  h-full flex flex-col gap-10 backdrop-blur-md p-4 rounded-xl shadow-lg'>

      <header className='relative overflow-hidden border-1 border-sky-50 shine w-full h-1/5 flex justify-center items-center bg-sky-500/90 backdrop-blur-lg p-4 rounded-xl shadow-lg'>
        <h1
          style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
          className='text-2xl text-sky-950 font-semibold'
        >
          Monthly Invoice Status
        </h1>
      </header>

      {error && toast.warning('Error retrieving information of monthly invoices status, please try again')}

      <article className='w-full h-full" flex justify-center items-center'>

        <article className=' w-1/3 flex justify-center items-center '>
          <div className='  ring-2 ring-sky-50 flex flex-col gap-1 justify-center items-center bg-lime-500/30 text-sky-900 backdrop-blur-lg rounded-xl shadow-lg  p-5 '>
          <BiCheck />
<span className='text-xl'>Accepted </span>
            <p className='text-sky-950 font-bold text-xl'>{statusMonth.accepted}</p>
          </div>

        </article>

        <article className='w-1/3 flex  justify-center items-center '>
          <div className=' ring-2 ring-sky-50 flex flex-col gap-1 justify-center items-center backdrop-blur-lg rounded-xl shadow-lg bg-yellow-300/30 text-sky-900 p-5'>
          <BiTime></BiTime>
            <span className='text-xl'>Pending</span> 
            <p className='text-sky-950 font-bold text-xl'>{statusMonth.pending}</p>
          </div>

        </article>

        <article className='w-1/3 flex justify-center items-center'>
          <div className='  ring-2 ring-sky-50  flex flex-col gap-1 justify-center items-center backdrop-blur-md rounded-xl shadow-lg bg-red-400/30 text-sky-900 p-5'>
          <BiError></BiError>
<span className='text-xl'>Rejected</span> 
            <p className='text-sky-950 font-bold text-xl'>{statusMonth.rejected}</p>
          </div>

        </article>

      </article>

    </article>
  )
}
