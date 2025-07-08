import { TaskProgressBar } from './TaskProgressBar'
import { useInvoices } from '../hooks/useInvoices'
import '../assets/styles/animations.css'

export function HomeSummary () {
  const { invoicesData } = useInvoices()

  const statusMonth = [...invoicesData].reduce((acc, current) => {
    if (!Object.hasOwn(acc, current.status)) {
      acc[current.status] = 0
    }

    acc[current.status] += 1
    return acc
  }, {})

  return (

    <article className='w-full h-full flex flex-col'>
      <section className='w-full h-1/3'>
        <TaskProgressBar completed={34} total={100} />
      </section>

      <section className='w-full h-1/2 mb-10'>

        <div className=' bg-white/60  h-full flex flex-col gap-10 backdrop-blur-md p-4 rounded-xl shadow-lg'>

          <header className='relative overflow-hidden border-1 border-sky-50 shine w-full h-1/5 flex justify-center items-center bg-sky-500/90 backdrop-blur-lg p-4 rounded-xl shadow-lg'>
            <h1
              style={{ fontFamily: ' \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif ' }}
              className='text-3xl text-sky-950 font-semibold'
            >
              Monthly Invoice Status
            </h1>
          </header>

          <div className='w-full h-full" flex justify-center items-center'>

            <article className=' w-1/3 flex justify-center items-center '>
              <div className=' jello-horizontal border-1 border-sky-50 flex flex-col justify-center items-center bg-sky-600/30 text-sky-900 backdrop-blur-lg rounded-xl shadow-lg  p-5 '>
                <span className='text-2xl'>Accepted</span>
                <p className='text-green-800 font-bold text-xl'>{statusMonth.accepted}</p>
              </div>

            </article>

            <article className='w-1/3 flex  justify-center items-center '>
              <div className=' jello-horizontal border-1 border-sky-50 flex flex-col justify-center items-center backdrop-blur-lg rounded-xl shadow-lg bg-sky-600/30 text-sky-900 p-5'>
                <span className='text-2xl'>Pending</span>
                <p className='text-gray-800 font-bold text-xl'>{statusMonth.pending}</p>
              </div>

            </article>

            <article className='w-1/3 flex justify-center items-center'>
              <div className=' jello-horizontal border-1 border-sky-50 flex flex-col justify-center items-center backdrop-blur-md rounded-xl shadow-lg bg-sky-600/30 text-sky-900 p-5'>
                <span className='text-2xl'>Rejected</span>
                <p className='text-red-800 font-bold text-xl'>{statusMonth.rejected}</p>
              </div>

            </article>

          </div>

        </div>

      </section>

      <section className='w-full h-2/2'>
        <div className='bg-white/60 backdrop-blur-3xl p-4 rounded-xl shadow h-full'>
          <ul className='space-y-2'>
            <li>CONTAINER TASKS</li>
          </ul>

        </div>
      </section>
    </article>

  )
}
