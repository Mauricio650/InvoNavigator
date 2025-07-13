import { useId, useState } from 'react'
import { InLogo } from '../Icons'
import { NavLink } from 'react-router-dom'
import { useUserRequest } from '../../hooks/invoices/useUserRequests'
import { validatePartialUser } from '../../schemas/user'
import { ErrorToast } from '../../toasts/error'
import { BiShow, BiHide, BiSolidUser, BiSolidLockAlt } from 'react-icons/bi'
import { useRememberMe } from '../../hooks/auth/useRememberMe'
import { BtnClassic } from '../BtnClassic'

export function LoginForm () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputRememberMe = useId()
  const [showPassword, setShowPassword] = useState(false)
  const { loginREQ } = useUserRequest()
  const { inputPasswordREF, inputRememberREF, inputUsernameREF } = useRememberMe()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))
    const result = validatePartialUser(formData)

    if (!result.success) {
      const errors = { error: true }
      result.error.issues.forEach(e => {
        errors.path = e.path.toLocaleString()
        errors.message = e.message
        return errors
      })
      return ErrorToast({ path: errors.path, description: errors.message })
    }

    loginREQ({ formData })
  }

  return (
    <div className='min-h-screen w-full relative bg-white'>
      <div
        className='absolute inset-0 z-0'
        style={{
          background: '#ffffff',
          backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: 'blur(80px)',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <section className=' w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
        <article className='z-2 bg-sky-950 flex flex-col justify-center items-center shadow-sky-950 shadow-lg p-5 text-white font-mono border-1 border-sky-900 rounded-md'>
          <header className='flex justify-center items-center flex-col'>
            <InLogo />
          </header>

          <div className='mt-8 mb-8'>
            <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>

              <label className='sr-only' htmlFor={idInputUsername}>Username</label>
              <div className='relative w-full flex justify-center'>
                <BiSolidUser className='absolute left-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100' />
                <input
                  ref={inputUsernameREF}
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
                  ref={inputPasswordREF}
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
                  className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-sky-300 hover:text-sky-100'
                  aria-label='Toggle password visibility'
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>

              <aside className='flex flex-col justify-center items-center gap-4'>
                <BtnClassic>Log in</BtnClassic>
                <div className='flex gap-2 justify-baseline'>
                  <label className='sr-only' htmlFor={idInputRememberMe}>Remember me</label>
                  <span className='text-gray-500'>Remember me</span>
                  <input ref={inputRememberREF} className='rounded-b-2xl' type='checkbox' name='RememberMe' id={idInputRememberMe} />
                </div>
              </aside>
            </form>
          </div>

          <div>
            <p>You don’t have an account?
              <span className='cursor-pointer font-extrabold text-sky-400 hover:text-sky-50'>
                <NavLink to='/register'> Sign up</NavLink>
              </span>
            </p>
          </div>
        </article>

      </section>

    </div>

  )
}
