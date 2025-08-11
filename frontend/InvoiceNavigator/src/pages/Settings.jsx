import { Outlet } from 'react-router-dom'
import { Menu } from '../components/settings/Menu'

export function Settings () {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
      <article className='w-full h-1/2'>
        <Menu />
      </article>

      <article className='w-full h-1/2'>
        <Outlet />
      </article>

    </section>
  )
}
