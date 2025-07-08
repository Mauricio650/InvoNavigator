import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext.jsx'
import { InvoiceProvider } from './context/invoicesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <InvoiceProvider>
      <AuthProvider>
        <main>
          <App />
        </main>
      </AuthProvider>
    </InvoiceProvider>
  </BrowserRouter>
)
