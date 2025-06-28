import { useId } from 'react'
import { DocumentLogo } from '../components/Icons'
import '../assets/styles/login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Login () {
  const idInputPassword = useId()
  const idInputUsername = useId()
  const idInputRememberMe = useId()
  const navigate = useNavigate()
  const { updateUser } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    console.log(formData)
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if (json.ok) {
        updateUser(json.user)
        return navigate('/home')
      }
    } catch (error) {
      throw new Error(error)
    }
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
            <label className='sr-only' htmlFor={idInputUsername}>
              Username
            </label>
            <input name='username' className='input-char' type='text' id={idInputUsername} required placeholder='username' />
            <label className='sr-only' htmlFor={idInputPassword}>
              Password
            </label>
            <input name='password' className='input-char' type='password' id={idInputPassword} required placeholder='password' />
            <aside>
              <button>Log in</button>
              <div>
                <label htmlFor={idInputRememberMe}>Remember me</label>
                <input type='checkbox' name='RememberMe' id={idInputRememberMe} />
              </div>
            </aside>
          </form>
        </div>
        <div className='container-register'>
          <p>You don´t have an account? <span><NavLink to='/register'>Sign up</NavLink></span></p>
        </div>
      </article>
    </section>
  )
}
