import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Home () {
  return (
    <>
      <article className='flex justify-between w-screen h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
        <section>
          <Header />
        </section>
        {Outlet &&
          <Outlet />}

      </article>
    </>
  )
}
