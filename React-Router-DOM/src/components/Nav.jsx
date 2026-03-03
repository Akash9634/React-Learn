import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-2 justify-end p-1 bg-amber-200'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>AboutUs</Link>
    </div>
  )
}

export default Nav