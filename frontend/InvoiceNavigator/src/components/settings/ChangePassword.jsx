import {useId } from 'react'
import { BtnClassic } from '../BtnClassic'
import { BiHide, BiShow, BiSolidLockAlt } from 'react-icons/bi'
import { useChangePassword } from '../../hooks/auth/useChangePassword'





export function ChangePassword () {
  const idInputPasswordOLD = useId()
  const idInputPasswordNEW = useId()
  const {setShowPassword, showPassword, handleSubmit} = useChangePassword()
  

  return (
    <article className='w-full h-1/2 flex flex-col justify-center items-center gap-3'>
      <form className='bg-sky-900 text-sky-100 flex flex-col justify-center items-center gap-6 p-10 rounded shadow-lg' onSubmit={handleSubmit}>

        <label className='sr-only' htmlFor={idInputPasswordOLD}>Current Password</label>
        <div className='relative w-full flex justify-center'>
          <BiSolidLockAlt className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
          <input
            className='py-1 px-8 text-center border-1 border-sky-400 rounded-lg'
            name='passwordOLD'
            type={showPassword ? 'text' : 'password'}
            id={idInputPasswordOLD}
            required
            placeholder='Current password'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer  absolute right-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100'
            aria-label='Toggle password visibility'
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </button>
        </div>

        <label className='sr-only' htmlFor={idInputPasswordNEW}>New Password</label>
        <div className='relative w-full flex justify-center'>
          <BiSolidLockAlt className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
          <input
            className='py-1 px-8 text-center border-1 border-sky-400 rounded-lg'
            name='passwordNEW'
            type={showPassword ? 'text' : 'password'}
            id={idInputPasswordNEW}
            required
            placeholder='New Password'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer  absolute right-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100'
            aria-label='Toggle password visibility'
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </button>
        </div>
        <aside>
          <BtnClassic>Update Password</BtnClassic>
        </aside>
      </form>
    </article>
  )
}
