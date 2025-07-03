import { useId } from 'react'
import { DocumentLogo } from '../components/Icons'
import '../assets/styles/loginForm.css'
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
    <section className='login'>
      <article className='login-container'>
        <header>
          <DocumentLogo />
          <h1>Invoice Navigator</h1>
        </header>
        <div className='container-form'>
          <form onSubmit={handleSubmit}>
            <label className='sr-only' htmlFor={idInputFullName}>
              Full name
            </label>
            <input className='input-char' name='fullName' type='text' id={idInputFullName} required placeholder='Full name' />
            <label className='sr-only' htmlFor={idInputUsername}>
              Username
            </label>
            <input className='input-char' name='username' type='text' id={idInputUsername} required placeholder='Username' />
            <label className='sr-only' htmlFor={idInputPassword}>
              Password
            </label>
            <input className='input-char' name='password' type='password' id={idInputPassword} required placeholder='Password' />
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
