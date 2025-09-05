import { useState } from 'react'
import { validatePartialUser } from '../../schemas/user'
import { ErrorToast } from '../../toasts/error'
import { SuccessToast } from '../../toasts/success'

export function useChangePassword () {
  const [showPassword, setShowPassword] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const result = validatePartialUser({ password: formData.passwordNEW })
    if (!result.success) {
      const errors = { error: true }
      result.error.issues.forEach(e => {
        errors.path = e.path.toLocaleString()
        errors.message = e.message
        return errors
      })
      return ErrorToast({ path: errors.path, description: errors.message })
    }

    try {
      const res = await fetch(`${API_URL}/changePassword`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      const response = await res.json()
      if (response.error) return ErrorToast({ path: 'Password', description: response.error })
      if (response.successfully) return SuccessToast({ title: 'Password', description: 'The password was updated' })
    } catch (e) {
      ErrorToast({ path: 'Unknown', description: 'wait a minute and try again' })
    }
  }

  return { setShowPassword, showPassword, handleSubmit }
}
