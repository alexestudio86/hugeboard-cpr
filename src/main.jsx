import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginProvider } from './context/LoginProvider.jsx';
import App from './router/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>,
)
