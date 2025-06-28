import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function ProtectedRoute ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const { isAuthenticate } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const checkToken = async () => {
      const res = await isAuthenticate()
      setIsLogged(res)

      if (!res) {
        navigate('/')
      }
    }

    checkToken()
  }, [])

  if (!isLogged) {
    return <h1>Loading....</h1>
  }
  return (
    children
  )
}
