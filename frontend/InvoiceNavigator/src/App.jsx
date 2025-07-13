import './App.css'
import { Toaster } from 'sonner'
import { TaskProvider } from './context/taskManager/tasksContext'
import { InvoiceProvider } from './context/invoicesContext'
import { AppRoutes } from './AppRoutes'

function App () {
  return (
    <InvoiceProvider>
      <TaskProvider>
        <Toaster position='top-center' closeButton duration={2000} richColors />
        <AppRoutes />
      </TaskProvider>
    </InvoiceProvider>
  )
}

export default App
