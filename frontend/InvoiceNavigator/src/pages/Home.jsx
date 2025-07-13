import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { StatusDaily } from '../components/StatusDaily'
import { StatusTasks } from '../components/tasks/StatusTasks'

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
          <article className='w-full h-full bg-sky-950/0 flex flex-col items-center p-6 gap-10'>

            <StatusDaily />

            <StatusTasks />

          </article>
        </section>

      </article>
    </>
  )
}
