// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Home from './component/home.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />
  // </StrictMode>
  <Home />
)
