import { useState, useRef } from 'react'
import { MenuItem, IconButton, Menu } from '@mui/material'
import { BiDotsVerticalRounded, BiSolidFilePdf, BiCheck, BiX, BiMessageAdd, BiSave, BiXCircle } from 'react-icons/bi'
import { toast } from 'sonner'

import { BtnClassic } from '../BtnClassic'

export function StatusActionsCells ({ id, number, onStatusChange, fileId, rowStatus }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const modalREF = useRef(null)

  const handleCloseModal = (e) => {
    e.preventDefault()
    modalREF.current.close()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAccept = async () => {
    if (rowStatus !== 'pending') return toast.warning('The invoice is already ' + rowStatus)
    try {
      const res = await fetch(`http://localhost:4000/home/updateStatus/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ action: 'accept' })

      })
      const response = await res.json()
      if (response.status) {
        onStatusChange({ id, newStatus: 'accepted' })
        return toast.success('invoice has been accepted')
      }
    } catch (error) {
      toast.warning('error, please try again')
      console.error('Error accepting invoice:', error)
    }
    handleClose()
  }

  const handleReject = async () => {
    if (rowStatus !== 'pending') return toast.warning('The invoice is already ' + rowStatus)
    try {
      const res = await fetch(`http://localhost:4000/home/updateStatus/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ action: 'reject' })

      })
      const response = await res.json()
      if (response.status) {
        onStatusChange({ id, newStatus: 'rejected' })
        return toast.success('invoice has been rejected')
      }
    } catch (error) {
      toast.warning('error, please try again')
      console.error('Error rejecting invoice:', error)
    }
    handleClose()
  }

  const handleDownLoad = async () => {
    try {
      const response = await fetch('http://localhost:4000/home/download/' + fileId, {
        credentials: 'include'
      })

      if (!response.ok) {
        toast.warning('error downloading invoice' + number + ' please,try again!')
        throw new Error('error downloading invoice')
      }

      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Invoice_' + number + '.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
      toast.success('invoice ' + number + ' downloaded')
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <>
      <dialog className='w-md h-lg p-4 m-auto shadow-lg rounded' ref={modalREF} id='ModalNote'>
        <form className='flex flex-col justify-center items-center gap-2' onSubmit={handleSubmit}>
          <input
            type='text'
            name='message'
            placeholder='Escribe una nota...'
            required
            className='w-full placeholder:italic placeholder:text-gray-400 ring-1'
          />
          <aside className='flex gap-2 justify-center items-center'>
            <BtnClassic><BiSave size={23} /></BtnClassic>
            <BtnClassic onClick={handleCloseModal}><BiXCircle size={23} /></BtnClassic>
          </aside>
        </form>
      </dialog>

      <div>
        <IconButton onClick={handleClick}>
          <BiDotsVerticalRounded size={22} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleAccept}>Accept  <BiCheck size={22} /></MenuItem>
          <MenuItem onClick={handleReject}>Reject <BiX size={22} /></MenuItem>
          <MenuItem onClick={handleDownLoad}>Download  <BiSolidFilePdf size={22} /> </MenuItem>
          <MenuItem onClick={() => modalREF.current.showModal()}>Note  <BiMessageAdd size={22} /> </MenuItem>
        </Menu>
      </div>
    </>

  )
}
