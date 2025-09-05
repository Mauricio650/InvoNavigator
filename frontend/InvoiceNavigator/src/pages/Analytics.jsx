import { BartChart } from '../components/analytics/BarChart'
import { DoughnutChart } from '../components/analytics/DoughnutChart'
import { DoughnutChartNotes } from '../components/analytics/DoughnutChartNotes'
import { FiltersInvoices } from '../components/table/FiltersInvoices'

export function Analytics () {
  return (
    <section className='w-full h-full flex flex-col gap-2 2xl:gap-5'>
      <article className='w-full 2xl:h-1/4 items-center bg-white/60 backdrop-blur-md p-2 2xl:p-4 rounded-xl shadow-lg'>
        <FiltersInvoices />
      </article>
      <article className='flex flex-col w-full  2xl:h-[600px] bg-white/60 backdrop-blur-md p-2 2xl:p-4 rounded-xl shadow-lg'>
        <div className='flex w-full 2xl:h-1/2'>
          <section className='w-[150px] sm:w-[250px] 2xl:w-1/2 flex items-center justify-center'>
            <DoughnutChart />
          </section>
          <section className='w-[150px] sm:w-[250px] 2xl:w-1/2 flex items-center justify-center'>
            <DoughnutChartNotes />
          </section>
        </div>

        <div className='flex w-full 2xl:h-1/2 justify-center items-center'>
          <section className='w-full h-full flex justify-center items-center'>
            <BartChart />
          </section>
        </div>

      </article>
    </section>
  )
}
