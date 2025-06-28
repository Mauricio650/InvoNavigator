import { useAuth } from '../hooks/useAuth'

export function Home () {
  const { user } = useAuth()
  const { username } = user.user
  return (
    <h1>WELCOME {username}</h1>
  )
}
