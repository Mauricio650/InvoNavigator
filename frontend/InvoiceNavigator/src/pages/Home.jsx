import { useAuth } from '../hooks/useAuth'

export function Home () {
  const { user } = useAuth()
  const { fullName } = user.user

  const raw = window.localStorage.getItem('CurrentUser')
  const currentUser = JSON.parse(raw)

  return (
    <h1>Welcome {fullName || currentUser.token}</h1>

  )
}
