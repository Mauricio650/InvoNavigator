import './App.css'
import { Toaster } from 'sonner'
import { Login } from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/ProtectedRoute'
import { HomeSummary } from './components/HomeSummary'

function App () {
  return (
    <>
      <Toaster position='top-center' closeButton duration={2000} richColors />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>}>
          <Route index element={<HomeSummary />} />
          <Route path='settings' element={<ProtectedRoute><h1>Page Settings</h1></ProtectedRoute>} />
          <Route path='analytics' element={<ProtectedRoute><h1>Page Analytics</h1></ProtectedRoute>} />
          <Route path='invoices' element={<ProtectedRoute><h1>Page Invoices</h1></ProtectedRoute>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
