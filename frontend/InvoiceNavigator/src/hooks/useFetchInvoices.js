import { useEffect } from 'react'
import { useInvoices } from './useInvoices'
export function useFetchInvoices () {
  const { updateInvoicesData, setLoading, setError } = useInvoices()
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
}
