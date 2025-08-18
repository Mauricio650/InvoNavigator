import { useEffect } from 'react'
import { useInvoices } from '../invoices/useInvoices'
export function useFetchInvoices () {
  const { updateInvoicesData, setLoading, setError } = useInvoices()
  const API_URL = import.meta.env.VITE_API_URL

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/home/invoices`, {
        credentials: 'include'
      })
      const json = await res.json()
      const data = json.map(i => ({
        ...i,
        id: i._id
      }))
      updateInvoicesData({ data })
    } catch (err) {
      console.error('Error:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()

    const intervalID = setInterval(fetchData, 3600000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return { fetchData }
}
