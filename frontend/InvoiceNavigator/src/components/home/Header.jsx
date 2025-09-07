import { BiAnalyse, BiExit, BiHome, BiSlider, BiTable } from 'react-icons/bi'
import { DocumentLogo2, InLogo } from '../Icons'
import { SuperLi } from '../SuperLi'
import { useUserRequest } from '../../hooks/invoices/useUserRequests'

export function Header () {
  const { logOutREQ } = useUserRequest()

  return (
    <header className='flex flex-col gap-12 w-full h-full bg-sky-950 text-white font- shadow-lg'>
      <DocumentLogo2 />

      <nav className='flex flex-col'>
        <ul className='flex flex-col justify-center gap-1 2xl:gap-4 '>
          <SuperLi path='/home' text='' icon={BiHome} />
          <SuperLi path='invoices' text='' icon={BiTable} />
          <SuperLi path='analytics' text='' icon={BiAnalyse} />
          <SuperLi path='settings' text='' icon={BiSlider} />
          <li className='relative flex items-center gap-4 text-lg '>
            <div className='flex items-center ml-3'>
              <button
                onClick={() => logOutREQ()}
                className='cursor-pointer flex justify-center items-center gap-4 hover:text-sky-400 transition-all duration-200'
              >
                <BiExit className='size-6' />
              </button>
            </div>
          </li>
        </ul>

      </nav>
    </header>
  )
}
