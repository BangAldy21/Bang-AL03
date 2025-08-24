import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
// You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader/>
    <div className = "container mx-auto px-6">
      <Navbar />
      <App />
      <Footer/>
    </div>
  </StrictMode>,
)
