import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function ProtectedRouteAdmin ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const { isAuthenticate, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const checkToken = async () => {
      const res = await isAuthenticate()
      setIsLogged(res)
      if (!res) {
        toast.info('the session has expired')
        navigate('/')
      } else if (user.user.role !== 'admin') {
        toast.info('You do not have permissions for this route')
        navigate('/home')
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
