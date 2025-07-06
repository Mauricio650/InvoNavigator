import './App.css'
import { Toaster } from 'sonner'
import { Login } from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/ProtectedRoute'

function App () {
  return (
    <>
      <Toaster position='top-center' closeButton duration={2000} />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
