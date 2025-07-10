import { Login } from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/ProtectedRoute'
import { HomeSummary } from './components/HomeSummary'
import { TableInvoices } from './pages/TableInvoices'

export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
        <Route index element={<HomeSummary />} />
        <Route path='settings' element={<ProtectedRoute><h1>Page Settings</h1></ProtectedRoute>} />
        <Route path='analytics' element={<ProtectedRoute><h1>OJO COLOCAR PORTECTED ROUTED A ESTA RUTA</h1></ProtectedRoute>} />
        {/* PROTECTED ROUTE A LA DE ADMIN, PLEASEEEEEE */}
        <Route path='invoices' element={<ProtectedRoute><TableInvoices /></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}
