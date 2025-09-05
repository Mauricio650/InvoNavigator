import { useInvoices } from "./useInvoices"

export function useFilterInvoices () {
const API_URL = import.meta.env.VITE_API_URL
const VITE_API_LOCAL = import.meta.env.VITE_API_LOCAL
const { updateInvoicesData } = useInvoices()

  const handledSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const filteredData = Object.entries(formData).reduce((acc, cv) => {
      if (cv[1] !== '') {
        acc[cv[0]] = cv[1]
        return acc
      }
      return acc
    }, {})
    try {
      const res = await fetch(`${API_URL}/home/filterInvoices`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(filteredData)
      })
      const response = await res.json()
      const data = response.invoices.map(i => ({
        ...i,
        id: i._id
      }))
      updateInvoicesData({ data })
    } catch (error) {
      console.error('Internal server error', error)
    }
  }

  return {handledSubmit}
}