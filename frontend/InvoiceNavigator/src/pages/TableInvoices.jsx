import { useContext } from 'react'
import { InvoicesContext } from '../context/invoicesContext'

export function TableInvoices () {
  const { invoicesData } = useContext(InvoicesContext)
  console.log(invoicesData)
  return (
    <section className='w-full h-full flex flex-col gap-5'>
      <article className='w-full h-1/3 items-center bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg'>
        <h1>Filtros</h1>
      </article>
      <article className='w-full h-full items-center bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg'>
        <h1>TABLA</h1>
      </article>
    </section>

  )
}
