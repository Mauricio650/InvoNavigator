import { useAuth } from '../hooks/useAuth'

export function Home () {
  const { user } = useAuth()
  const { fullName } = user.user
  return (
    <h1>@MUI == SE UTILIZARA LA TABLA Y LA DATE PICKER, SOLO DE CALENDARIO, PARA EL FUTURO Y LA DE CHARTS,LA CHARTS TAMBIEN SE SUSARA MAS ADELANTE EN ANALITYS MAS COMPLEJAS ---WELCOME {fullName}</h1>

  )
}
