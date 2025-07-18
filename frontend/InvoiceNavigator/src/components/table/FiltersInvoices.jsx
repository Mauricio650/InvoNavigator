import { useId } from 'react'
import { BtnClassic } from '../BtnClassic'

export function FiltersInvoices () {
  const idInputCompany = useId()
  const idInputNumber = useId()
  const idSelectStatus = useId()
  const idInputDateFrom = useId()
  const idInputDateTo = useId()

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
      console.log(response)
    } catch (error) {
      console.error('Internal server error', error)
    }
  }

  return (
    <article className='bg-white/60 h-full backdrop-blur-md p-4 rounded-xl shadow-lg'>

      <form onSubmit={handledSubmit} className='h-full flex flex-col gap-3 justify-around items-center'>
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
            <input type='date' name='from' id={idInputDateFrom} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>

          <div>
            <label htmlFor={idInputDateTo} className='block'>
              To
            </label>
            <input type='date' name='to' id={idInputDateTo} className='max-w-sm p-1 bg-gray-100 ring-2 ring-gray-500 rounded-xl focus:outline-blue-800 focus:bg-gray-400 focus:text-white' placeholder='Tesla enterprise' />
          </div>
        </div>

        <aside>
          <BtnClassic>
            Search
          </BtnClassic>
        </aside>

      </form>

    </article>
  )
}
