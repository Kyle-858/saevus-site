import React from 'react'
import './Nav.css'
import bandname_img from '../assets/bandname_img.png'

const Nav = () => {
  return (
    <nav>
        <div className="nav-links">
            <div className="nav-left">
                <div className="nav-link">Home</div>
                <div className="nav-link">Band</div>
                <div className="nav-link">Tour</div>
                <div className="nav-link">News</div>
            </div>
            <img className="nav-logo" src={bandname_img} alt="" />
            <div className="nav-right">
                <div className="nav-link">Music</div>
                <div className="nav-link">Media</div>
                <div className="nav-link">Shop</div>
                <div className="nav-link">Foundation</div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
