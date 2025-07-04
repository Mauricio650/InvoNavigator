import { useId } from 'react'
import { DocumentLogo } from '../components/Icons'
import { NavLink } from 'react-router-dom'
import { useUserRequest } from '../hooks/useUserRequests'

export function RegisterForm () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputFullName = useId()

  const { registerREQ } = useUserRequest()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))
    registerREQ({ formData })
  }
  return (
    <section className='w-screen h-screen flex justify-center items-center bg-sky-950'>
      <article className='flex flex-col justify-center items-center shadow-xl/20 shadow-sky-50/100 p-5 text-white font-mono border-1 border-sky-900 rounded-md'>
        <header className='flex justify-center items-center flex-col'>
          <DocumentLogo />
        </header>
        <div className='mt-8 mb-8'>
          <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>
            <label className='sr-only' htmlFor={idInputFullName}>
              Full name
            </label>
            <input className=' py-1 text-center border-1 border-sky-400 rounded-t-xl' name='fullName' type='text' id={idInputFullName} required placeholder='Full name' />
            <label className='sr-only' htmlFor={idInputUsername}>
              Username
            </label>
            <input className=' py-1 text-center border-1 border-sky-400 rounded-t-xl' name='username' type='text' id={idInputUsername} required placeholder='Username' />
            <label className='sr-only' htmlFor={idInputPassword}>
              Password
            </label>
            <input className=' py-1 text-center border-1 border-sky-400 rounded-t-xl' name='password' type='password' id={idInputPassword} required placeholder='Password' />
            <aside>
              <button className='bg-sky-600 rounded-lg px-2 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'>Sign up</button>
            </aside>
          </form>
        </div>
        <div>
          <p>Do you already have an account? <span className='bg-sky-600 rounded-lg px-2 py-0.5 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'><NavLink to='/'>Log in</NavLink></span></p>
        </div>
      </article>
    </section>
  )
}
