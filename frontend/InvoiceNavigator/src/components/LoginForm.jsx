import { useId, useState, useEffect, useRef } from 'react'
import { DocumentLogo } from './Icons'
import { NavLink } from 'react-router-dom'
import { useUserRequest } from '../hooks/useUserRequests'
import { validatePartialUser } from '../schemas/user'
import { ErrorToast } from '../toasts/error'
import { BiShow, BiHide, BiSolidUser, BiSolidLockAlt } from 'react-icons/bi'

export function LoginForm () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputRememberMe = useId()
  const [showPassword, setShowPassword] = useState(false)
  const { loginREQ } = useUserRequest()

  const inputUsernameREF = useRef()
  const inputPasswordREF = useRef()
  const inputRememberREF = useRef()

  useEffect(() => {
    const rawData = window.localStorage.getItem('formData')
    if (rawData) {
      const parsed = JSON.parse(rawData)

      if (inputUsernameREF.current) {
        inputUsernameREF.current.value = parsed.username
        inputRememberREF.current.checked = true
      }

      if (inputPasswordREF.current) {
        inputPasswordREF.current.value = parsed.password
      }
    }
  }, [])

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
    <div>Joderr ssssstio</div>
    <div>
      <h1>joderrr</h1>
    </div>
    <section className='w-screen h-screen flex justify-center items-center bg-sky-800'>
      <article className='bg-sky-950 flex flex-col justify-center items-center shadow-xl/20 shadow-sky-50/100 p-5 text-white font-mono border-1 border-sky-900 rounded-md'>
        <header className='flex justify-center items-center flex-col'>
          <DocumentLogo />
          <h1 style={{ fontSize: '4rem' }}>extraer usse effect ----- HACER LOGOUT ----- PERSINTENCIA DE LA SESION CON LOCAL STORAGE Y EL TOKEN</h1>
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
              <button className='cursor-pointer bg-sky-600 rounded-xs px-2 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'>Log in</button>
              <div className='flex gap-2 justify-baseline'>
                <label className='sr-only' htmlFor={idInputRememberMe}>Remember me</label>
                <span className='text-gray-500'>Remember me</span>
                <input ref={inputRememberREF} className='rounded-b-2xl' type='checkbox' name='RememberMe' id={idInputRememberMe} />
              </div>
            </aside>
          </form>
        </div>

        <div>
          <p>You don’t have an account?{' '}
            <span className='cursor-pointer bg-sky-600 rounded-xs px-2 py-0.5 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'>
              <NavLink to='/register'>Sign up</NavLink>
            </span>
          </p>
        </div>
      </article>
    </section>
  )
}
