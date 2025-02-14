import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Information from './Information.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Information />
  </StrictMode>,
)
