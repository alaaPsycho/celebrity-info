import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Aos  from 'aos'
import 'aos/dist/aos.css'

import './NavBar.css'
function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='nav-container'>

          <div className='links'>
            <NavLink className='link' to='/'>home</NavLink>

          </div>
          <div className='links'>
            <NavLink  className='link' to='/about'>about</NavLink>

          </div>
          <div className='logo' data-aos='flip-down'>
          <NavLink  to={''}><img src='https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png'/></NavLink>
        </div>

          <div className='links'>
            <NavLink  className='link' to='/services'>services</NavLink>

          </div>
          <div className='links'>
            <NavLink  className='link' to='/faq'>faQ</NavLink>

          </div>
      </div>
    </div>
  )
}

export default NavBar