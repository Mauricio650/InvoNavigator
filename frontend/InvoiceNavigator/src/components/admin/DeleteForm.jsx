import { useId, useRef } from 'react'
import { BtnClassic } from '../BtnClassic'
import { ErrorToast } from '../../toasts/error'
import { SuccessToast } from '../../toasts/success'

export function DeleteForm () {
  const idDID = useId()
  const formDeleteREF = useRef(null)
  const API_URL = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(`${API_URL}/home/invoices/delete/${formData.id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      const response = await res.json()
      if (response.error) return ErrorToast({ path: 'Delete Form', description: response.error })
      formDeleteREF.current.reset()
      if (response.message) return SuccessToast({ title: 'Delete Form', description: 'The invoice was deleted' })
    } catch (e) {
      ErrorToast({ path: 'Unknown', description: 'wait a minute and try again' })
    }
  }

  return (
    <form ref={formDeleteREF} onSubmit={handleSubmit} className='bg-sky-900 p-4 font-mono text-lg text-white w-md flex flex-col justify-center items-center gap-5 rounded-2xl shadow-md'>
      <label htmlFor={idDID}>
        Id <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='id' id={idDID} type='text' placeholder='' required />
      </label>
      <aside>
        <BtnClassic>Delete</BtnClassic>
      </aside>
    </form>
  )
}
