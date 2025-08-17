import { useState } from 'react'
import { MenuItem, IconButton, Menu } from '@mui/material'
import { BiDotsVerticalRounded, BiSolidFilePdf, BiCheck, BiX, BiMessageAdd } from 'react-icons/bi'
import { ModalMessage } from './ModalMessage'
import { validatePartialInvoice, schemaInvoice } from '../../schemas/invoices'
import { ErrorToast } from '../../toasts/error'
import { SuccessToast } from '../../toasts/success'

export function StatusActionsCells ({ id, number, onStatusChange, fileId, rowStatus }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [showModal, setShowModal] = useState(null)
  const open = Boolean(anchorEl)
  const API_URL = import.meta.env.VITE_API_URL

  const handleCloseModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const result = validatePartialInvoice(data, schemaInvoice)
    if (!result) return ErrorToast({ path: 'Modal Message', description: 'Invalid characters, please try again' })

    const res = await fetch(`${API_URL}/home/updateMessage/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(result.data)
    })

    const response = await res.json()
    if (response.status) return SuccessToast({ title: 'Successfully', description: response.message })
    ErrorToast({ path: 'Notes', description: response })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAccept = async () => {
    if (rowStatus !== 'pending') return ErrorToast({ path: 'Table', description: `The invoice is already ${rowStatus}` })
    try {
      const res = await fetch(`${API_URL}/home/updateStatus/${id}`, {
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
        return SuccessToast({ title: 'Successfully', description: 'invoice has been accepted' })
      }
    } catch (error) {
      ErrorToast({ path: 'Table', description: 'error, please try again' })
      console.error('Error accepting invoice:', error)
    }
    handleClose()
  }

  const handleReject = async () => {
    if (rowStatus !== 'pending') return ErrorToast({ path: 'Table', description: `The invoice is already ${rowStatus}` })
    try {
      const res = await fetch(`${API_URL}/home/updateStatus/${id}`, {
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
        return SuccessToast({ title: 'Successfully', description: 'invoice has been rejected' })
      }
    } catch (error) {
      ErrorToast({ path: 'Table', description: 'error, please try again' })
      console.error('Error rejecting invoice:', error)
    }
    handleClose()
  }

  const handleDownLoad = async () => {
    try {
      const response = await fetch(`${API_URL}/home/download/` + fileId, {
        credentials: 'include'
      })

      if (!response.ok) {
        ErrorToast({ path: 'table', description: `error downloading invoice ${number} please,try again` })
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
      SuccessToast({ title: 'Successfully', description: `Invoice ${number} downloaded` })
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <>
      {showModal && <ModalMessage handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} />}

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
          <MenuItem onClick={() => setShowModal(true)}>Note  <BiMessageAdd size={22} /> </MenuItem>
        </Menu>
      </div>
    </>

  )
}
