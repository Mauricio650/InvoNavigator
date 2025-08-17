import { useId, useRef } from 'react'
import { BtnClassic } from '../BtnClassic'
import { ErrorToast } from '../../toasts/error'
import { SuccessToast } from '../../toasts/success'

export function UploadForm () {
  const companyID = useId()
  const numberID = useId()
  const pdfID = useId()
  const toID = useId()
  const formREF = useRef(null)
  const API_URL = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      })
      const response = await res.json()
      if (response.error) return ErrorToast({ path: 'Upload Form', description: response.error })
      formREF.current.reset()
      if (response.status) return SuccessToast({ title: 'Upload Form', description: 'The invoice was uploaded' })
    } catch (e) {
      ErrorToast({ path: 'Unknown', description: 'wait a minute and try again' })
    }
  }
  return (
    <form ref={formREF} onSubmit={handleSubmit} className='bg-sky-900 p-4 font-mono text-lg text-white w-md flex flex-col justify-center items-center gap-5 rounded-2xl shadow-md' encType='multipart/form-data'>
      <label htmlFor={toID}>
        To
        <select id={toID} name='to' className='bg-sky-950 p-1 ml-2 rounded shadow-md ring-1 ring-sky-300'>
          <option value='User1'>User1</option>
          <option value='User2'>User2</option>
          <option value='User3'>User3</option>
          <option value='User4'>User4</option>
        </select>
      </label>

      <label htmlFor={companyID}>
        Company <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='company' id={companyID} type='text' placeholder='Company sas...' required />
      </label>

      <label htmlFor={numberID}>
        Number <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='number' id={numberID} type='text' placeholder='FEV 82612...' required />
      </label>

      <label htmlFor={pdfID}>
        PDF <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='myfile' id={pdfID} type='file' placeholder='FEV 82612...' accept='.pdf' required />
      </label>

      <aside>
        <BtnClassic>Upload</BtnClassic>
      </aside>
    </form>
  )
}
