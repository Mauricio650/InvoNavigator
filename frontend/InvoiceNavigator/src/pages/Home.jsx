import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Home () {
  return (
    <>
      <article className='flex justify-between w-screen h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 font-mono'>
        <section className='w-xs  shadow-xl backdrop-blur-md   shadow-sky-950'>
          <Header />
        </section>

        <section className='w-2/3 shadow-gray-500 p-10'>
          <Outlet />
        </section>

        <section className='w-1/4 shadow-xl backdrop-blur-md   shadow-sky-700'>

          <div className='w-full h-full bg-sky-950/0 flex flex-col items-center p-6 gap-10'>

            <div className='h-1/6 w-full bg-sky-100 text-sky-900 backdrop-blur-md p-4 rounded-xl shadow'>
              <h1 className='text-center'>
                Container-invoice per day pending,rejected,accepted,
              </h1>
            </div>

            <div className='h-1/6 w-full  bg-sky-100 text-sky-900 backdrop-blur-md p-4 rounded-xl shadow'>
              <h1 className='text-center'>
                Container-Task actives,completed
              </h1>
            </div>

            <div className='h-full w-full bg-sky-100 text-sky-900 backdrop-blur-md p-4 rounded-xl shadow'>
              <h1 className='text-center'>
                Container-Create Task,
              </h1>
            </div>

          </div>

        </section>

      </article>
    </>
  )
}
