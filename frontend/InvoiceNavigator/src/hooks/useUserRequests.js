import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import Swal from 'sweetalert2'

export function useUserRequest () {
  const navigate = useNavigate()
  const { updateUser } = useAuth()

  const loginREQ = async ({ formData }) => {
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
        if (json.message) {
          Swal.fire({
            title: 'Error!',
            text: `[${json.path}] : ${json.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: json.error,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
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
        if (json.message) {
          Swal.fire({
            title: 'Error!',
            text: `[${json.path}] : ${json.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: json.error,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
        throw new Error(`HTTP error! ${response.status}: ${json?.message || json.error}`)
      }

      if (json.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Welcome ' + json.UserCreated,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate('/login')
      }
    } catch (error) {
      console.error('Register error:', error)
      throw error
    }
  }

  return { loginREQ, registerREQ }
}
