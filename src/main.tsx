// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.tsx'
import Home from './component/home.tsx'
import About from './component/about.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  </Routes>
  </BrowserRouter>
)
