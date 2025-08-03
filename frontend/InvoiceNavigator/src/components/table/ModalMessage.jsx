import reactDOM from 'react-dom'
import { BiSave, BiXCircle } from 'react-icons/bi'
import { BtnClassic } from '../BtnClassic'

export function ModalMessage ({ handleSubmit, handleCloseModal }) {
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null
  return reactDOM.createPortal(
    <div
      role='dialog'
      aria-modal='true'
      className='fixed w-full h-full inset-0 flex items-center justify-center z-50'
    >
      <form className='flex w-sm h-sm flex-col p-10 bg-sky-800 justify-center items-center gap-2 rounded-2xl shadow-sky-50 shadow-lg' onSubmit={handleSubmit}>
        <input
          type='text'
          name='message'
          placeholder='Write a note...'
          required
          className='w-full p-5 text-sky-50 placeholder:italic placeholder:text-gray-400 ring-1 rounded'
        />
        <aside className='flex gap-2 justify-center items-center'>
          <BtnClassic><BiSave size={23} /></BtnClassic>
          <BtnClassic onClick={handleCloseModal}><BiXCircle size={23} /></BtnClassic>
        </aside>
      </form>
    </div>,
    modalRoot
  )
}
