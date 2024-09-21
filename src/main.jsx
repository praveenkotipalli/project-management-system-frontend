import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import SplineRocket from './custom/SplineRocket.jsx/index.js'
// import SplineRocket from "./custom/SplineRocket.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <SplineRocket/> */}
    </BrowserRouter>
  </StrictMode>,
)
