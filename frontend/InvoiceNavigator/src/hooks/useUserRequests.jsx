import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { ErrorToast } from '../toasts/error'
import { SuccessToast } from '../toasts/success'

export function useUserRequest () {
  const navigate = useNavigate()
  const { updateUser } = useAuth()

  const loginREQ = async ({ formData }) => {
    if (formData?.RememberMe) {
      window.localStorage.setItem('formData', JSON.stringify(formData))
    } else {
      const raw = window.localStorage.getItem('formData')
      if (raw) {
        const parse = JSON.parse(raw)
        if (parse.username === formData.username) {
          window.localStorage.removeItem('formData')
        }
      }
    }

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

      if (!response.ok || json.error) {
        ErrorToast({ path: 'form', description: json.error })
        throw new Error(`HTTP error! ${response.status}: ${json?.message || json.error}`)
      }

      if (json.ok) {
        updateUser(json.user)
        return navigate('/home')
      }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const registerREQ = async ({ formData }) => {
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const json = await response.json()

      if (!response.ok || json.error) {
        ErrorToast({ path: 'form', description: json.error })

        throw new Error(`HTTP error! ${response.status}: ${json?.message || json.error}`)
      }

      if (json.ok) {
        SuccessToast({ title: 'User has been created', description: json.UserCreated })
        navigate('/login')
      }
    } catch (error) {
      console.error('Register error:', error)
      throw error
    }
  }

  return { loginREQ, registerREQ }
}
