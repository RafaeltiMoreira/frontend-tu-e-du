import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </ParallaxProvider>
  </React.StrictMode>,
)
