import { useContext } from 'react'
import { InvoicesContext } from '../context/invoicesContext'

export function useInvoices () {
  const context = useContext(InvoicesContext)

  if (context === undefined) {
    throw new Error('useInvoices must be used within a InvoicesProvider')
  }

  return context
}
