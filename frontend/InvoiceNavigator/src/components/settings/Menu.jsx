import { BtnClassic } from '../BtnClassic'
import { ProfileLogo } from '../Icons'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export function Menu () {
  const { user } = useContext(AuthContext)
  return (
    <article className='flex flex-col justify-center items-center gap-3 bg-white/40 backdrop-blur-md py-3 rounded-lg'>
      <ProfileLogo />
      <h2 className='font-mono font-bold text-gray-500 text-lg'>{user.user.fullName}</h2>
      <NavLink to='changePassword'>
        <BtnClassic>
          New password
        </BtnClassic>
      </NavLink>
    </article>
  )
}
