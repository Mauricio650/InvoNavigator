import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../components/admin/Header.jsx'

export function AdminPage () {
  return (
    <>
      <article className='w-full flex justify-center items-center gap-3'>
        <HeaderAdmin />
      </article>
      <article className='w-full h-full flex justify-center items-center'>
        <Outlet />
      </article>
    </>
  )
}
