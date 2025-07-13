import { useContext, useState, useEffect } from 'react'
import { InvoicesContext } from '../../context/invoicesContext'
export function useRowsTable () {
  const { invoicesData } = useContext(InvoicesContext)
  const [rows, setRows] = useState([])

  useEffect(() => {
    const reversed = [...invoicesData].reverse()
    setRows(reversed)
  }, [invoicesData])

  const updateRowStatus = ({ id, newStatus }) => {
    setRows(prev => prev.map(row => row.id === id ? { ...row, status: newStatus } : row))
  }

  return { rows, updateRowStatus }
}
