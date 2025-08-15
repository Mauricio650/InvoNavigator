import { FiltersInvoices } from '../components/table/FiltersInvoices'
import { DatagridTable } from '../components/table/DatagridTable'

export function TableInvoices () {
  return (
    <section className='w-full h-full flex flex-col gap-2 2xl:gap-5'>
      <article className='w-full 2-xl:h-1/4 items-center bg-white/60 backdrop-blur-md p-2 2xl:p-4 rounded-xl shadow-lg'>
        <FiltersInvoices />
      </article>
      <article className='h-full overflow-x-auto'>
        <DatagridTable />
      </article>
    </section>

  )
}
