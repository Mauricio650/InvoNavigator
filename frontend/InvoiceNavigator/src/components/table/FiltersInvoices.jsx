import { useId, useRef } from 'react'
import { BtnClassic } from '../BtnClassic'
import { BiReset } from 'react-icons/bi'
import { useFetchInvoices } from '../../hooks/fetchs/useFetchInvoices'
import { useFilterInvoices } from '../../hooks/invoices/useFilterInvoices'


export function FiltersInvoices () {
  const idInputCompany = useId()
  const idInputNumber = useId()
  const idSelectStatus = useId()
  const idInputDateFrom = useId()
  const idInputDateTo = useId()
  const formRef = useRef(null)
  const { fetchData } = useFetchInvoices()
  const {handledSubmit} = useFilterInvoices()
  

  const handleClear = () => {
    fetchData()
    formRef.current.reset()
  }

  return (
    <article className='bg-white/60 text-xs 2xl:text-lg w-full h-full backdrop-blur-md p-1 2xl:p-3 rounded-xl shadow-lg'>

      <form ref={formRef} onSubmit={handledSubmit} className='h-full w-full flex flex-col gap-2 2xl:gap-5 justify-around items-center'>
        <div className='w-full flex flex-col 2xl:flex-row 2xl:gap-5 justify-around items-center'>
          <div>
            <label htmlFor={idInputCompany} className='block text-center'>
              Company
            </label>
            <input type='text' name='company' id={idInputCompany} className='bg-gray-100 ring-1 2xl:ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>

          <div>
            <label htmlFor={idInputNumber} className='block text-center'>
              Number
            </label>
            <input type='text' name='number' id={idInputNumber} className='  bg-gray-100 ring-1 2xl:ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='FEV12345' />
          </div>

          <div>
            <label htmlFor={idSelectStatus} className='block text-center'>
              Status
            </label>
            <select name='status' id={idSelectStatus} className=' bg-gray-100 ring-1 2xl:ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white'>
              <option value=''>All</option>
              <option value='pending'>Pending</option>
              <option value='accepted'>Accepted</option>
              <option value='rejected'>Rejected</option>
            </select>
          </div>

          <div>
            <label htmlFor={idInputDateFrom} className='block text-center'>
              From
            </label>
            <input required type='date' name='from' id={idInputDateFrom} className=' bg-gray-100 ring-1 2xl:ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>

          <div>
            <label htmlFor={idInputDateTo} className='block text-center'>
              To
            </label>
            <input type='date' name='toD' id={idInputDateTo} className=' bg-gray-100 ring-1 2xl:ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>
        </div>

        <aside className='flex gap-2 2xl:gap-5 justify-center items-center'>
          <BtnClassic>
            Search
          </BtnClassic>
          <div
            onClick={handleClear} className='font-medium text-white cursor-pointer
     bg-sky-600 rounded-sm px-1 2xl:px-2 ring-1 2xl:ring-2 ring-sky-50 border-b-4 border-l-3 border-r-2 border-t-2 border-transparent
    hover:bg-sky-700 hover:border-sky-950 shadow-lg shadow-sky-500/50 hover:shadow-sky-50 transition-all ease-linear duration-200
    '
          >
            <BiReset />
          </div>
        </aside>

      </form>

    </article>
  )
}
