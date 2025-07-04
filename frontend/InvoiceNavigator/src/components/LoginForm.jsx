import { useId } from 'react'
import { DocumentLogo } from './Icons'
import { NavLink } from 'react-router-dom'
import { useUserRequest } from '../hooks/useUserRequests'

export function LoginForm () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputRememberMe = useId()

  const { loginREQ } = useUserRequest()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))
    console.log(formData)
    loginREQ({ formData })
  }

  return (
    <section className='w-screen h-screen flex justify-center items-center bg-sky-950'>
      <article className='flex flex-col justify-center items-center shadow-xl/20 shadow-sky-50/100 p-5 text-white font-mono border-1 border-sky-900 rounded-md'>
        <header className='flex justify-center items-center flex-col'>
          <DocumentLogo />
          <h1>GUARDAR EN LOCAL STORAGE Y AGREGAR ICONOS AL LOGIN Y REGISTER, AGREGAR 'VER CONTRASEÑA, AGREGAR QUE NO SE ENVIE LA PETICION SI ESTÁ MAL LOS INPUTS, EXTRAER DE ALGUNA MANERA LAS ALERTAS'</h1>
        </header>
        <div className='mt-8 mb-8'>
          <form className='flex flex-col justify-center items-center gap-6' onSubmit={handleSubmit}>
            <label className='sr-only' htmlFor={idInputUsername}>
              Username
            </label>
            <input className=' py-1 text-center border-1 border-sky-400 rounded-t-xl' name='username' type='text' id={idInputUsername} required placeholder='Username' autoComplete='true' />
            <label className='sr-only' htmlFor={idInputPassword}>
              Password
            </label>
            <input className=' py-1 text-center border-1 border-sky-400 rounded-b-xl' name='password' type='password' id={idInputPassword} required placeholder='Password' />
            <aside className='flex flex-col justify-center items-center gap-4'>
              <button className='bg-sky-600 rounded-lg px-2 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'>Log in</button>
              <div className='flex gap-2 justify-baseline'>
                <label className='sr-only' htmlFor={idInputRememberMe}>Remember me</label>
                <span className='text-gray-500'>Remember me</span>
                <input className='rounded-b-2xl' type='checkbox' name='RememberMe' id={idInputRememberMe} />
              </div>
            </aside>
          </form>
        </div>
        <div>
          <p>You don´t have an account? <span className='bg-sky-600 rounded-lg px-2 py-0.5 ring-1 ring-sky-50 hover:bg-sky-700 shadow-lg shadow-sky-500/50'><NavLink to='/register'>Sign up</NavLink></span></p>
        </div>
      </article>
    </section>
  )
}
