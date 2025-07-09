import { useInvoices } from '../hooks/useInvoices'
import { toast } from 'sonner'
import { statusByDate } from '../logic/statusByDate'
import { BiCheck, BiError, BiTime } from 'react-icons/bi'

export function StatusDaily () {
  const { invoicesData, loading, error } = useInvoices()
  /* const date = new Date().toISOString().split('T', 1).toString() */
  const date = '2025-04-13'

  console.log(invoicesData)

  const invoicesFilteredByDay = [...invoicesData].filter((i) => (i.uploadAt.split('T', 1).toString() === date))

  const invoiceDaily = statusByDate(invoicesFilteredByDay)

  if (loading) return <h1>Loading....</h1>

  return (
    <article className=' h-1/5 w-full flex flex-col justify-center items-center gap-3  bg-sky-100 text-sky-900 backdrop-blur-md p-3 rounded-xl shadow-lg'>

      <header className='relative overflow-hidden shine border-1 border-sky-50 w-full h-1 flex justify-center items-center bg-sky-500/90 backdrop-blur-lg p-4 rounded-xl shadow-lg'>
        <h1
          style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
          className='text-lg text-sky-950 font-semibold'
        >
          Daily Invoice Status
        </h1>
      </header>

      {error && toast.warning('Error retrieving information of daily invoices status, please try again')}

      <article className='w-full h-full flex justify-center items-center'>

        <article className=' w-1/3 flex justify-center items-center  '>
          <div className='  ring-2 ring-sky-50  flex flex-col gap-1 justify-center items-center bg-lime-500/30 text-sky-900 backdrop-blur-lg rounded-xl shadow-lg p-3'>
          <BiCheck />
            <span className='text-sm'>Accepted</span>
            <p className='text-sky-950 font-bold text-sm'>{invoiceDaily.accepted ? invoiceDaily.accepted : 0}</p>
          </div>

        </article>

        <article className='w-1/3 flex  justify-center items-center '>
          <div className='  ring-2 ring-sky-50  flex flex-col gap-1 justify-center items-center backdrop-blur-lg rounded-xl shadow-lg bg-yellow-300/30 text-sky-900 p-3'>
          <BiTime></BiTime>
            <span className='text-sm'>Pending</span>
            <p className='text-sky-950 font-bold text-sm'>{invoiceDaily.pending ? invoiceDaily.pending : 0}</p>
          </div>

        </article>

        <article className='w-1/3 flex justify-center items-center'>
          <div className='  ring-2 ring-sky-50  flex flex-col gap-1 justify-center items-center backdrop-blur-md rounded-xl shadow-lg bg-red-400/30 text-sky-900 p-3'>
          <BiError></BiError>
<span className='text-sm'>Rejected</span>
            <p className='text-sky-950 font-bold text-sm'>{invoiceDaily.rejected ? invoiceDaily.rejected : 0}</p>
          </div>

        </article>

      </article>

    </article>
  )
}
