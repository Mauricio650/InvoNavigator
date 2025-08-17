import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

export function useAuth () {
  const { user, updateUser } = useContext(AuthContext)
  const API_URL = import.meta.env.VITE_API_URL

  const isAuthenticate = async () => {
    const raw = window.localStorage.getItem('CurrentUser')
    const currentUser = JSON.parse(raw)

    if (!raw) {
      return false
    }

    const res = await fetch(`${API_URL}/verifyToken`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ token: user.token || currentUser.token })
    })
    const json = await res.json()
    if (json.TokenIsValid) {
      updateUser(currentUser)
      return true
    } else {
      return false
    }
  }
  return { isAuthenticate, user, updateUser }
}
