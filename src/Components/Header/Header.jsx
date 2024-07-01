import React from 'react'
import './Header.css'
import logo from '../Assets/logo.png'

const Header = () => {
  return (
    <div className='headermain'>
        <div id='logo'><img src={logo} alt="" /></div>
        <div className='headertags'>
            <p id='home'>Home</p>
            <p id='services'>Services</p>
            <p id='about'>About</p>
            <p id='work'>Work</p>
            <p id='testimonial'>Testimonial</p>
        </div>
        <button id='contactbtn'>Contact Us</button>
    </div>
  )
}

export default Header