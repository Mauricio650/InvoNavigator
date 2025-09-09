import { Outlet } from 'react-router-dom'
import { Menu } from '../components/settings/Menu'

export function Settings () {
  return (
    <section className='w-full h-full flex flex-col justify-between items-center gap-2'>
      <article className='w-full'>
        <Menu />
      </article>

      <article className='flex-1 w-full bg-white/30 rounded-lg backdrop-blur-md flex justify-center items-center'>
        <Outlet />
      </article>
    </section>
  )
}
