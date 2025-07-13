import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function ProtectedRoute ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const { isAuthenticate } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const checkToken = async () => {
      const res = await isAuthenticate()
      setIsLogged(res)

      if (!res) {
        toast.info('the session has expired')
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
