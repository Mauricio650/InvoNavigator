import { useId } from 'react'
import { BtnClassic } from '../BtnClassic'
import { useInvoices } from '../../hooks/invoices/useInvoices'
import { BiReset } from 'react-icons/bi'
import { useFetchInvoices } from '../../hooks/fetchs/useFetchInvoices'
import { useRef } from 'react'

export function FiltersInvoices () {
  const idInputCompany = useId()
  const idInputNumber = useId()
  const idSelectStatus = useId()
  const idInputDateFrom = useId()
  const idInputDateTo = useId()
  const formRef = useRef(null)
  const { updateInvoicesData } = useInvoices()
  const { fetchData } = useFetchInvoices()

  const handledSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const filteredData = Object.entries(formData).reduce((acc, cv) => {
      if (cv[1] !== '') {
        acc[cv[0]] = cv[1]
        return acc
      }
      return acc
    }, {})
    try {
      const res = await fetch('http://localhost:4000/home/filterInvoices', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(filteredData)
      })
      const response = await res.json()
      const data = response.invoices.map(i => ({
        ...i,
        id: i._id
      }))
      updateInvoicesData({ data })
    } catch (error) {
      console.error('Internal server error', error)
    }
  }

  const handleClear = () => {
    fetchData()
    formRef.current.reset()
  }

  return (
    <article className='bg-white/60 h-full backdrop-blur-md p-4 rounded-xl shadow-lg'>

      <form ref={formRef} onSubmit={handledSubmit} className='h-full flex flex-col gap-3 justify-around items-center'>
        <div className='w-full flex gap-5 justify-around items-center'>
          <div>
            <label htmlFor={idInputCompany} className='block'>
              Company
            </label>
            <input type='text' name='company' id={idInputCompany} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>

          <div>
            <label htmlFor={idInputNumber} className='block'>
              Number
            </label>
            <input type='text' name='number' id={idInputNumber} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='FEV12345' />
          </div>

          <div>
            <label htmlFor={idSelectStatus} className='block'>
              Status
            </label>
            <select name='status' id={idSelectStatus} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white'>
              <option value=''>All</option>
              <option value='pending'>Pending</option>
              <option value='accepted'>Accepted</option>
              <option value='rejected'>Rejected</option>
            </select>
          </div>

          <div>
            <label htmlFor={idInputDateFrom} className='block'>
              From
            </label>
            <input required type='date' name='from' id={idInputDateFrom} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>

          <div>
            <label htmlFor={idInputDateTo} className='block'>
              To
            </label>
            <input type='date' name='to' id={idInputDateTo} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>
        </div>

        <aside className='flex gap-5 justify-center items-center'>
          <BtnClassic>
            Search
          </BtnClassic>
          <div
            onClick={handleClear} className='font-medium text-white cursor-pointer
     bg-sky-600 rounded-sm px-2 ring-2 ring-sky-50 border-b-4 border-l-3 border-r-2 border-t-2 border-transparent
    hover:bg-sky-700 hover:border-sky-950 shadow-lg shadow-sky-500/50 hover:shadow-sky-50 transition-all ease-linear duration-200
    '
          >
            <BiReset size={22} />
          </div>
        </aside>

      </form>

    </article>
  )
}
