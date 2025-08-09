import { Outlet } from 'react-router-dom'
import { Menu } from '../components/settings/Menu'

export function Settings () {
  return (
    <>
      <Menu />
      <Outlet />

    </>
  )
}
