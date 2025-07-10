import { useContext, useEffect } from 'react'
import { InvoicesContext } from '../context/invoicesContext'

export function useInvoices () {
  const context = useContext(InvoicesContext)
  const { updateInvoicesData, setLoading, setError } = context

  if (context === undefined) {
    throw new Error('useInvoices must be used within a InvoicesProvider')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:4000/home/invoices', {
          credentials: 'include'
        })
        const json = await res.json()
        updateInvoicesData({ data: json })
      } catch (err) {
        console.error('Error:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    const intervalID = setInterval(fetchData, 3600000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return context
}
