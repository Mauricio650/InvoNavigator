import { Login } from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { HomeSummary } from './components/home/HomeSummary'
import { TableInvoices } from './pages/TableInvoices'
import { PruebaPage } from './pages/pruebas'
import { ProtectedRouteAdmin } from './components/auth/AdminRoute'
import { Analytics } from './pages/Analytics'
import { Settings } from './pages/Settings.jsx'
import { ChangePassword } from './components/settings/ChangePassword.jsx'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/pruebapage' element={<PruebaPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
        <Route index element={<HomeSummary />} />

        <Route path='settings' element={<ProtectedRoute><Settings /></ProtectedRoute>}>
          <Route path='changePassword' element={<ChangePassword />} />
        </Route>

        <Route path='analytics' element={<ProtectedRouteAdmin><Analytics /></ProtectedRouteAdmin>} />
        <Route path='invoices' element={<ProtectedRoute><TableInvoices /></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}
