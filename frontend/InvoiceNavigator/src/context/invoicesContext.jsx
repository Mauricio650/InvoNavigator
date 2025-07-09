import { useState, useEffect, createContext } from 'react'

export const InvoicesContext = createContext()

export function InvoiceProvider ({ children }) {
  const [invoicesData, setInvoicesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const updateInvoicesData = ({ data }) => {
    setInvoicesData(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('http://localhost:4000/home/invoices', {
          credentials: 'include'
        })
        const json = await res.json()
        setInvoicesData(json)
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

  return (
    <InvoicesContext.Provider
      value={{ invoicesData, updateInvoicesData, loading, error }}
    >
      {children}
    </InvoicesContext.Provider>
  )
}
