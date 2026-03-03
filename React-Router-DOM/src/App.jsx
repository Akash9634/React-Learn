import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
    </div>
  )
}

export default App