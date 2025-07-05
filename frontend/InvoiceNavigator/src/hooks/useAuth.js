import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export function useAuth () {
  const { user, updateUser } = useContext(AuthContext)

  const isAuthenticate = async () => {
    const res = await fetch('http://localhost:4000/verifyToken', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ token: user.token })
    })
    const json = await res.json()
    if (json.TokenIsValid) {
      return true
    } else {
      return false
    }
  }

  return { isAuthenticate, user, updateUser }
}
