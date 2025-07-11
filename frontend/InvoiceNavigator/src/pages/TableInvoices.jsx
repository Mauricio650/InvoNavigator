import { useContext, useState } from 'react'
import { InvoicesContext } from '../context/invoicesContext'
import { Box, MenuItem, IconButton, Menu } from '@mui/material'
import { BiDotsVerticalRounded, BiSolidFilePdf, BiCheck, BiX } from 'react-icons/bi'
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa'
import { DataGrid } from '@mui/x-data-grid'
import { DateTime } from 'luxon'
import { toast } from 'sonner'

const columns = [
  {
    field: 'actions',
    headerName: 'Acciones',
    width: 150,
    sortable: false,
    flex: 1,
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = useState(null)
      const open = Boolean(anchorEl)

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
      }

      const handleClose = () => {
        setAnchorEl(null)
      }

      const handleVer = () => {
        console.log('Ver:', params.row)
        handleClose()
      }

      const handleEditar = () => {
        console.log('Editar:', params.row)
        handleClose()
      }

      const handleDownLoad = async () => {
        try {
          const response = await fetch('http://localhost:4000/home/download/' + params.row.fileId, {
            credentials: 'include'
          })

          if (!response.ok) {
            toast.warning('error downloading invoice' + params.row.number + ' please,try again!')
            throw new Error('error downloading invoice')
          }

          const blob = await response.blob()

          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'Invoice_' + params.row.number + '.pdf'
          document.body.appendChild(a)
          a.click()
          a.remove()
          window.URL.revokeObjectURL(url)
          toast.success('invoice ' + params.row.number + ' downloaded')
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
            <MenuItem onClick={handleVer}>Accept <BiCheck size={22} /></MenuItem>
            <MenuItem onClick={handleEditar}>Reject <BiX size={22} /></MenuItem>
            <MenuItem onClick={handleDownLoad}>Download <BiSolidFilePdf size={22} /> </MenuItem>
          </Menu>
        </div>
      )
    }
  },
  { field: '_id', headerName: 'ID', width: 70, flex: 1, sortable: false },
  { field: 'number', headerName: 'Number', width: 130, flex: 1 },
  {
    field: 'company',
    headerName: 'Company',
    width: 130,
    flex: 1
  },
  {
    field: 'uploadAt',
    headerName: 'Date',
    width: 90,
    type: 'string',
    renderCell: (params) => {
      return DateTime.fromISO(params.value)
        .setLocale('es')
        .toFormat('dd/LL/yyyy')
    },
    flex: 1
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
    width: 160,
    flex: 1,
    cellClassName: () => 'flex justify-center items-center',
    renderCell: params => {
      if (params.value === 'accepted') return <FaCheckCircle size={22} className='text-green-600' />
      if (params.value === 'rejected') return <FaTimesCircle size={22} className='text-red-600' />
      if (params.value === 'pending') return <FaClock size={22} className='text-yellow-500' />
    }
  }

]

const paginationModel = { page: 0, pageSize: 10 }

export function TableInvoices () {
  const { invoicesData } = useContext(InvoicesContext)
  const rows = invoicesData
  return (
    <section className='w-full h-full flex flex-col gap-5'>
      <article className='w-full h-1/4 items-center bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg'>
        <h1>Filtros</h1>
      </article>
      <article className='w-full  h-[600px] bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg'>
        <Box sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            showToolbar
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[10]}
            sx={{ border: 0 }}
          />
        </Box>
      </article>
    </section>

  )
}
