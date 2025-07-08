import { useContext, useEffect } from 'react'
import { InvoicesContext } from '../context/invoicesContext'
import { data } from 'react-router-dom'

export function useInvoices () {
  const { invoicesData, updateInvoicesData } = useContext(InvoicesContext)

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
      }
    }

    fetchData()

    const intervalID = setInterval(fetchData, 3600000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return { invoicesData }
}
