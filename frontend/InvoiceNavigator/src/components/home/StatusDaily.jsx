import { toast } from 'sonner'
import { statusByDate } from '../../logic/statusByDate'
import { BiCheck, BiError, BiTime } from 'react-icons/bi'
import { useContext } from 'react'
import { InvoicesContext } from '../../context/invoicesContext'

export function StatusDaily () {
  const { invoicesData, error, loading } = useContext(InvoicesContext)
  const date = new Date().toISOString().split('T', 1).toString()

  const invoicesFilteredByDay = [...invoicesData].filter((i) => (i.uploadAt.split('T', 1).toString() === date))

  const invoiceDaily = statusByDate(invoicesFilteredByDay)

  /* const invoiceDaily = {pending:1, accepted:2,rejected:10} */

  if (loading) return <h1>Loading....</h1>
  if (error) toast.warning('Error retrieving information of daily invoices status, please try again')

  return (
    <section className='h-full 2xl:h-1/3  flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-100 to-white backdrop-blur-md rounded-xl shadow-md px-6 py-4 mt-6 mb-4 w-full'>
      <h2 className='text-center text-xs 2xl:text-xl font-bold text-gray-800 2xl:mb-4'>
        Daily Invoice Status
      </h2>
      <div className='flex flex-col 2xl:flex-row justify-between items-center text-center'>
        <div>
          <p className='text-xs 2xl:text-xl  text-gray-600 flex items-center justify-center 2xl:gap-1'>
            <BiCheck size={15} />
            <span>Accepted</span>
          </p>
          <p className='2xl:text-2xl font-bold text-green-600'>{invoiceDaily.accepted ? invoiceDaily.accepted : 0}</p>
        </div>
        <div className='w-px bg-gray-300 2xl:h-10 2xl:mx-3' />
        <div >
          <p className='text-xs 2xl:text-xl text-gray-600 flex items-center justify-center 2xl:gap-1'>
            <BiTime size={15} />
            <span>Pending</span>
          </p>
          <p className='2xl:text-2xl font-bold text-yellow-500'>{invoiceDaily.pending ? invoiceDaily.pending : 0}</p>
        </div>
        <div className='w-px bg-gray-300 2xl:h-10 2xl:mx-3' />
        <div >
          <p className='text-xs 2xl:text-xl text-gray-600 flex items-center justify-center 2xl:gap-1'>
            <BiError size={15} />
            <span>Rejected</span>
          </p>
          <p className='2xl:text-2xl font-bold text-red-500'>{invoiceDaily.rejected ? invoiceDaily.rejected : 0}</p>
        </div>
      </div>
    </section>

  )
}
