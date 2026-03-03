import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <div>
      
    <div className='flex gap-2 justify-between p-1 bg-amber-200 items-center'>  
        <h2 className=''>Akash</h2>
        <div className='flex gap-8'>
           <Link to='/'>Home</Link>
        <Link to='/about'>AboutUs</Link>
        <Link to='/courses'>Courses</Link>
        </div>
       
    </div>
    </div>
  )
}

export default Nav