import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='container bg-slate-200'>
      <div className=' flex justify-between main-div'>
        <div className='logo-name'>
          <span className=' font-bold'>AuthApp</span>
        </div>
        <div className='gap-3 flex nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/sign-in'>sign-in</Link>
        </div>
      </div>
    </div>
  )
}

export default Header