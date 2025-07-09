import { useContext } from 'react'
import { InvoicesContext } from '../context/invoicesContext'

export function useInvoices () {
  const { invoicesData, updateInvoicesData, loading, error } = useContext(InvoicesContext)

  return { invoicesData, updateInvoicesData, loading, error }
}
