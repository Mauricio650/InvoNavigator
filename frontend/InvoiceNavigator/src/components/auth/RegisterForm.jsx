import { useId, useState } from 'react'
import { InLogo } from '../Icons'
import { NavLink } from 'react-router-dom'
import { useUserRequest } from '../../hooks/invoices/useUserRequests'
import { validateSchemaUser } from '../../schemas/user'
import { ErrorToast } from '../../toasts/error'
import { BiShow, BiHide, BiSolidUser, BiSolidLockAlt, BiSolidIdCard } from 'react-icons/bi'
import { BtnClassic } from '../BtnClassic'

export function RegisterForm () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputFullName = useId()
  const [showPassword, setShowPassword] = useState(false)

  const { registerREQ } = useUserRequest()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))
    const result = validateSchemaUser(formData)

    if (!result.success) {
      const errors = { error: true }
      result.error.issues.forEach(e => {
        errors.path = e.path.toLocaleString()
        errors.message = e.message
        return errors
      })
      return ErrorToast({ path: errors.path, description: errors.message })
    }

    registerREQ({ formData })
  }
  return (

      <section className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
        <article className='z-2 bg-sky-950 flex flex-col justify-center items-center shadow-sky-950 shadow-lg p-5 text-white font-mono border-1 border-sky-900 rounded-md'>
          <header className='flex justify-center items-center flex-col'>
            <InLogo />
          </header>
          <div className='mt-8 mb-8'>
            <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>

              <label className='sr-only' htmlFor={idInputFullName}>
                Full name
              </label>
              <div className='relative w-full flex justify-center'>
                <BiSolidIdCard className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
                <input className=' py-1 px-8 text-center border-1 border-sky-400 rounded-lg' name='fullName' type='text' id={idInputFullName} required placeholder='Full name' />
              </div>

              <label className='sr-only' htmlFor={idInputUsername}>Username</label>
              <div className='relative w-full flex justify-center'>
                <BiSolidUser className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
                <input
                  className='py-1 px-8 text-center border-1 border-sky-400 rounded-lg'
                  name='username'
                  type='text'
                  id={idInputUsername}
                  required
                  placeholder='Username'
                  autoComplete='true'
                />
              </div>

              <label className='sr-only' htmlFor={idInputPassword}>Password</label>
              <div className='relative w-full flex justify-center'>
                <BiSolidLockAlt className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
                <input
                  className='py-1 px-8 text-center border-1 border-sky-400 rounded-lg'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  id={idInputPassword}
                  required
                  placeholder='Password'
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
                <BtnClassic>Sign Up</BtnClassic>
              </aside>
            </form>
          </div>
          <div>
            <p>Do you already have an account?
              <span className='cursor-pointer font-extrabold text-sky-400 hover:text-sky-50'>
                <NavLink to='/'> Log in</NavLink>
              </span>
            </p>
          </div>
        </article>
      </section>


  )
}
