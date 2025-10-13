import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize AOS when the app starts
document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      delay: '0'
    });
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
