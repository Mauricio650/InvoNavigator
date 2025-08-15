import { BiAnalyse, BiExit, BiHome, BiSlider, BiTable } from 'react-icons/bi'
import { DocumentLogo2, InLogo } from '../Icons'
import { SuperLi } from '../SuperLi'
import { useAuth } from '../../hooks/auth/useAuth'
import { useUserRequest } from '../../hooks/invoices/useUserRequests'

export function Header () {
  const { user } = useAuth()
  const { logOutREQ } = useUserRequest()

  return (
    <header className='flex flex-col gap-12 w-full h-full bg-sky-950 text-white font- shadow-lg'>
      <div className='flex items-center'>
        <DocumentLogo2 />
        <div>
          <h1 className=' text-sky-50 text-xs 2xl:text-2xl'>{user.user.username}</h1>
          <span className='font-bold text-xs 2xl:text-ms text-sky-500'>{user.user.fullName}</span>
        </div>
      </div>
      <nav className='flex flex-col'>
        <h3 className='font-bold text-sky-500 text-xs 2xl:text-lg ml-10 mb-10'> Menu </h3>
        <ul className='flex flex-col justify-center gap-1 2xl:gap-4 '>
          <SuperLi path='/home' text='Home' icon={BiHome} />
          <SuperLi path='invoices' text='Invoices' icon={BiTable} />
          <SuperLi path='analytics' text='Analytics' icon={BiAnalyse} />
          <SuperLi path='settings' text='Settings' icon={BiSlider} />
          <li className='relative flex items-center gap-4 text-lg '>
            <div className='flex items-center gap-4 ml-10 h-10'>
              <button
                onClick={() => logOutREQ()}
                className='cursor-pointer flex justify-center items-center gap-4 hover:text-sky-400 transition-all duration-200'
              >
                <BiExit className='size-6' />
                Exit
              </button>
            </div>
          </li>
        </ul>

      </nav>
      <div className='h-full 2xl:flex justify-center items-end hidden'>
        <InLogo />
      </div>
    </header>
  )
}
