import { useId } from 'react'
import { DocumentLogo } from '../components/Icons'
import '../assets/styles/login.css'
import { NavLink } from 'react-router-dom'

export function Register () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputFullName = useId()
  return (
    <section className='login'>
      <article className='login-container'>
        <header>
          <DocumentLogo />
          <h1>Invoice Navigator</h1>
        </header>
        <div className='container-form'>
          <form>
          <label className='sr-only' htmlFor={idInputFullName}>
              Full name
            </label>
            <input className='input-char' type='text' id={idInputFullName} required placeholder='Full name' />
            <label className='sr-only' htmlFor={idInputUsername}>
              Username
            </label>
            <input className='input-char' type='text' id={idInputUsername} required placeholder='Username' />
            <label className='sr-only' htmlFor={idInputPassword}>
              Password
            </label>
            <input className='input-char' type='password' id={idInputPassword} required placeholder='Password' />
            <aside>
              <button>Sign up</button>
            </aside>
          </form>
        </div>
        <div className='container-register'>
          <p>Do you already have an account? <span><NavLink to='/'>Log in</NavLink></span></p>
        </div>
      </article>
    </section>
  )
}