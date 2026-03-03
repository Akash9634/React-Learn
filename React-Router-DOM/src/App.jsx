import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
const App = () => {
  return (
    <div className='h-screen bg-black'>
      <Nav />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/:courseId' element={<CourseDetail/>}></Route>
      </Routes>

      <Footer></Footer> 
    </div>
  )
}

export default App