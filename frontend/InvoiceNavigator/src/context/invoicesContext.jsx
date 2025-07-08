import { useState, createContext } from 'react'

export const InvoicesContext = createContext()

export function InvoiceProvider ({ children }) {
  const [invoicesData, setInvoicesData] = useState([])

  const updateInvoicesData = ({ data }) => {
    setInvoicesData(data)
  }

  return (
    <InvoicesContext.Provider
      value={{ invoicesData, updateInvoicesData }}
    >
      {children}
    </InvoicesContext.Provider>
  )
}
