import { useState } from 'react'
import { MenuItem, IconButton, Menu } from '@mui/material'
import { BiDotsVerticalRounded, BiSolidFilePdf, BiCheck, BiX } from 'react-icons/bi'
import { toast } from 'sonner'

export function StatusActionsCells ({ id, number, onStatusChange, fileId, rowStatus }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

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
    <div>
      <IconButton onClick={handleClick}>
        <BiDotsVerticalRounded size={22} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccept}>Accept <BiCheck size={22} /></MenuItem>
        <MenuItem onClick={handleReject}>Reject<BiX size={22} /></MenuItem>
        <MenuItem onClick={handleDownLoad}>Download <BiSolidFilePdf size={22} /> </MenuItem>
      </Menu>
    </div>
  )
}
