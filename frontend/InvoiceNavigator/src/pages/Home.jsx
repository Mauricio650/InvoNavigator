import { useAuth } from '../hooks/useAuth'

export function Home () {
  const { user } = useAuth()
  const { fullName } = user.user
  return (
    <h1>WELCOME {fullName}</h1>
  )
}
