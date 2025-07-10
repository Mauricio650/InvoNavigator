import { useState, createContext } from 'react'

export const InvoicesContext = createContext()

export function InvoiceProvider ({ children }) {
  const [invoicesData, setInvoicesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const updateInvoicesData = ({ data }) => {
    setInvoicesData(data)
  }

  return (
    <InvoicesContext.Provider
      value={{ invoicesData, updateInvoicesData, loading, error, setLoading, setError }}
    >
      {children}
    </InvoicesContext.Provider>
  )
}
