import { Box } from '@mui/material'
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa'
import { DataGrid } from '@mui/x-data-grid'
import { DateTime } from 'luxon'
import { StatusActionsCells } from '../components/StatusActionsCells'
import { useRowsTable } from '../hooks/useRowsTable'

export function TableInvoices () {
  const { rows, updateRowStatus } = useRowsTable()

  const columns = [
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      resizable: false,
      sortable: false,
      renderCell: params => <StatusActionsCells rowStatus={params.row.status} id={params.row.id} fileId={params.row.fileId} number={params.row.number} onStatusChange={updateRowStatus} />
    },
    { field: '_id', headerName: 'ID', width: 100, resizable: false, sortable: false },
    { field: 'number', headerName: 'Number', width: 200, resizable: true },
    {
      field: 'company',
      headerName: 'Company',
      width: 130,
      flex: 1
    },
    {
      field: 'uploadAt',
      headerName: 'Date',
      width: 100,
      resizable: false,
      type: 'string',
      renderCell: (params) => {
        return DateTime.fromISO(params.value)
          .setLocale('es')
          .toFormat('dd/LL/yyyy')
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      width: 100,
      resizable: false,
      cellClassName: () => 'flex justify-center items-center',
      renderCell: params => {
        if (params.value === 'accepted') return <FaCheckCircle size={22} className='text-green-600' />
        if (params.value === 'rejected') return <FaTimesCircle size={22} className='text-red-600' />
        if (params.value === 'pending') return <FaClock size={22} className='text-yellow-500' />
      }
    }

  ]

  const paginationModel = { page: 0, pageSize: 10 }
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
            initialState={{ pagination: { paginationModel }, sorting: { sortModel: [{ field: 'date', sort: 'asc' }] } }}
            pageSizeOptions={[10]}
            sx={{
              border: 0,
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: '700',
                width: '100%'
              },
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: '#DBECFF'
              }
            }}
          />
        </Box>
      </article>
    </section>

  )
}
