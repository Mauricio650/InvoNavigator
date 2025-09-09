import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/home/Header'
import { StatusDaily } from '../components/home/StatusDaily'
import { StatusTasks } from '../components/tasks/StatusTasks'

export function Home () {
  const location = useLocation()
  return (
    <>
      <section className='font-mono flex w-full max-w-screen min-h-screen'>
        <section>
          <Header />
        </section>

        <section className='w-full justify-between flex flex-col sm:flex-row bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
          <section className='flex-1 p-3'>
             <Outlet />
          </section>
         
          <article className={`flex flex-col justify-between py-3 p-1
             ${location.pathname === '/home/settings/changePassword' || 
             location.pathname === '/home/invoices' ? 'hidden' : "" }`}>
            <StatusDaily />
            <StatusTasks />
          </article>
          
        </section>

        

      </section>
    </>
  )
}
