import { useRef } from 'react'
import { BtnClassic } from '../components/BtnClassic'
import { BiSave, BiXCircle } from 'react-icons/bi'

export function PruebaPage () {
  const btnCloseModalREF = useRef(null)
  const btnShowModalREF = useRef(null)
  const modalREF = useRef(null)

  const handleShowModal = (e) => {
    modalREF.current.showModal()
  }

  const handleCloseModal = (e) => {
    modalREF.current.close()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }
  return (
    <dialog className='w-md h-lg p-4 m-auto shadow-lg rounded' ref={modalREF} id='ModalNote'>
      <form className='flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit}>
        <textarea className='w-full placeholder:italic placeholder:text-gray-400 ring-1' required name='message' id='note' placeholder='write a message...' />
        <aside className='flex gap-2 justify-center items-center'>
          <BtnClassic><BiSave size={23} /></BtnClassic>
          <BtnClassic onClick={handleCloseModal} ref={btnCloseModalREF}><BiXCircle size={23} /></BtnClassic>
        </aside>
      </form>
    </dialog>
  )
}
