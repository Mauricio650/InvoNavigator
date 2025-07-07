import { useLocation, NavLink } from 'react-router-dom'

export const SuperLi = ({ text, path, icon: Icon }) => {
  const location = useLocation()
  const isActive = location.pathname === path || location.pathname === '/home/' + path
  return (
    <li className='relative flex items-center gap-4 text-lg '>
      {isActive && <div className='absolute bg-sky-400 l-1 w-2 h-15 rounded-r-xl shadow-2xl' />}
      <div className='flex items-center gap-4 ml-10 h-10'>
        <NavLink
          to={path}
          className={() => {
            return isActive ? 'text-sky-400 font-extrabold pointer-events-none flex justify-center items-center gap-4 hover:text-sky-400 transition-all duration-200' : 'flex justify-center items-center gap-4 hover:text-sky-400 transition-all duration-200'
          }}
        >
          <Icon className='size-6' />
          {text}
        </NavLink>
      </div>
    </li>
  )
}
