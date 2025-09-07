import { toast } from 'sonner'
import { BiCheck, BiError, BiTime } from 'react-icons/bi'
import { InvoicesContext } from '../../context/invoicesContext'
import { useContext } from 'react'
import { statusByDate } from '../../logic/statusByDate'

export function StatusMonthly () {
  const { invoicesData, error, loading } = useContext(InvoicesContext)

  const statusMonth = statusByDate(invoicesData)

  if (error)toast.warning('Error retrieving information of monthly invoices status, please try again')

  /* const statusMonth = { pending: 1, accepted: 2, rejected: 10 } */

  if (loading) return <h1>Loading....</h1>

  return (
    <article className=' bg-white/60 gap-5 backdrop-blur-md p-4 rounded-xl shadow-lg h-full flex flex-col'>

      <header className='relative overflow-hidden border-1 p-2 border-sky-50 shine w-full flex justify-center items-center bg-sky-500/90 backdrop-blur-lg rounded-xl shadow-lg'>
        <h1
          style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
          className='text-2xl text-sky-950 font-semibold'
        >
          Monthly Invoice Status
        </h1>
      </header>

      <article className='w-full h-full flex justify-evenly items-center'>

        <article className='flex justify-center items-center '>
          <div className=' p-1 sm:p-3 ring-2 ring-sky-50 flex flex-col gap-1 justify-center items-center bg-lime-500/30 text-sky-900 backdrop-blur-lg rounded-xl shadow-lg'>
            <BiCheck size={17} />
            <span className='text-xs md:text-xl'>Accepted </span>
            <p className='text-sky-950 font-bold text-ms md:text-xl'>{statusMonth.accepted ? statusMonth.accepted : 0}</p>
          </div>

        </article>

        <article className=' flex  justify-center items-center '>
          <div className=' p-1 sm:p-3 ring-2 ring-sky-50 flex flex-col gap-1 justify-center items-center backdrop-blur-lg rounded-xl shadow-lg bg-yellow-300/30 text-sky-900'>
            <BiTime size={17} />
            <span className='text-xs md:text-xl'>Pending</span>
            <p className='text-sky-950 font-bold text-ms md:text-xl'>{statusMonth.pending ? statusMonth.pending : 0}</p>
          </div>

        </article>

        <article className=' flex justify-center items-center'>
          <div className=' p-1 sm:p-3  ring-2 ring-sky-50  flex flex-col gap-1 justify-center items-center backdrop-blur-md rounded-xl shadow-lg bg-red-400/30 text-sky-900 '>
            <BiError size={17} />
            <span className='text-xs md:text-xl'>Rejected</span>
            <p className='text-sky-950 font-bold text-ms md:text-xl'>{statusMonth.rejected ? statusMonth.rejected : 0}</p>
          </div>

        </article>

      </article>

    </article>
  )
}
