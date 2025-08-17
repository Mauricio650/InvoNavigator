import { useId, useRef } from 'react'
import { BtnClassic } from '../BtnClassic'
import { ErrorToast } from '../../toasts/error'
import { SuccessToast } from '../../toasts/success'

export function UpdateForm () {
  const companyUID = useId()
  const numberUID = useId()
  const pdfUID = useId()
  const toUID = useId()
  const fileUID = useId()
  const noteUID = useId()
  const statusUID = useId()
  const dataUID = useId()
  const companyREF = useRef(null)
  const numberREF = useRef(null)
  const statusREF = useRef(null)
  const messageREF = useRef(null)
  const toREF = useRef(null)
  const fileIdREF = useRef(null)
  const documentID = useRef()
  const formCheckREF = useRef(null)
  const formUpdateREF = useRef(null)
  const API_URL = import.meta.env.VITE_API_URL

  const handleSubmitSearchId = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    try {
      const res = await fetch(`${API_URL}/validateId`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const response = await res.json()
      if (response.error) return ErrorToast({ path: 'Update Form', description: response.error })
      companyREF.current.value = response.data.company
      statusREF.current.value = response.data.status
      numberREF.current.value = response.data.number
      toREF.current.value = response.data.to
      messageREF.current.value = response.data.message
      fileIdREF.current.value = response.data.fileId
      documentID.current = formData.id
      return formCheckREF.current.reset()
    } catch (e) {
      ErrorToast({ path: 'Unknown', description: e.message })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      const res = await fetch(`${API_URL}/home/invoices/update/${documentID.current}`, {
        method: 'PATCH',
        credentials: 'include',
        body: formData
      })
      const response = await res.json()
      if (response.error) return ErrorToast({ path: 'Update Form', description: response.error })
      if (response.status) {
        SuccessToast({ title: 'Update Form', description: 'The invoice was updated' })
        return formUpdateREF.current.reset()
      }
    } catch (e) {
      ErrorToast({ path: 'Unknown', description: 'wait a minute and try again' })
    }
  }
  return (
    <article className='flex flex-col gap-2 justify-center items-center'>
      <form ref={formCheckREF} onSubmit={handleSubmitSearchId} className='bg-sky-900 p-4 font-mono text-lg text-white w-md flex flex-col justify-center items-center gap-5 rounded-2xl shadow-md'>
        <label htmlFor={dataUID}>
          Id <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='id' id={dataUID} type='text' placeholder='' required />
        </label>
        <aside>
          <BtnClassic>Search</BtnClassic>
        </aside>
      </form>
      <form ref={formUpdateREF} onSubmit={handleSubmit} className='bg-sky-900 p-4 font-mono text-lg text-white w-md flex flex-col justify-center items-center gap-5 rounded-2xl shadow-md' encType='multipart/form-data'>

        <div className='flex justify-center items-center gap-2'>

          <label htmlFor={statusUID}>
            Status
            <select ref={statusREF} id={statusUID} name='status' className='bg-sky-950 p-1 ml-2 rounded shadow-md ring-1 ring-sky-300'>
              <option value='pending'>Pending</option>
              <option value='rejected'>Rejected</option>
              <option value='accepted'>Accepted</option>
            </select>
          </label>

          <label htmlFor={toUID}>
            To
            <select id={toUID} ref={toREF} name='to' className='bg-sky-950 p-1 ml-2 rounded shadow-md ring-1 ring-sky-300'>
              <option value='User1'>User1</option>
              <option value='User2'>User2</option>
              <option value='User3'>User3</option>
              <option value='User4'>User4</option>
            </select>
          </label>

        </div>

        <label htmlFor={companyUID}>
          Company <input ref={companyREF} className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='company' id={companyUID} type='text' placeholder='Company sas...' required />
        </label>

        <label htmlFor={numberUID}>
          Number <input ref={numberREF} className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='number' id={numberUID} type='text' placeholder='FEV 82612...' required />
        </label>

        <label htmlFor={fileUID}>
          file Id <input ref={fileIdREF} className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='fileId' id={fileUID} type='text' placeholder='' required />
        </label>

        <label htmlFor={noteUID} className='flex justify-center items-center gap-2'>
          Note <textarea ref={messageREF} className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='message' id={noteUID} type='' placeholder='this is a message...' required />
        </label>

        <label htmlFor={pdfUID}>
          PDF <input className='bg-sky-950 p-1 rounded shadow-md ring-1 ring-sky-300' name='myfile' id={pdfUID} type='file' placeholder='FEV 82612...' accept='.pdf' />
        </label>

        <aside>
          <BtnClassic>Upload</BtnClassic>
        </aside>
      </form>
    </article>
  )
}
