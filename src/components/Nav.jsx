import React from 'react'
import './Nav.css'
import bandname_img from '../assets/bandname_img.png'

const Nav = () => {
  return (
    <nav>
      <img className="nav-logo" src={bandname_img} alt="" />
    </nav>
  )
}

export default Nav
