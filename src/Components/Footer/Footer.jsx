import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='footerup'>
                <div className='fcol'>
                    <h3>RumahSoftware</h3>
                    <p>A place where you can order software creation <br />that is very systematic and neat. Assisted by <br />professionals in their field</p>
                </div>
                <div className='fcol'>
                    <h3>Menu</h3>
                    <p>Home</p>
                    <p>Services</p>
                    <p>About</p>
                    <p>Work</p>
                    <p>Testimonial</p>
                </div>
                <div className='fcol'>
                    <h3>Portfolio</h3>
                    <p>Dribble</p>
                    <p>Behnace</p>
                    <p>Uplabs</p>
                    <p>Instagram</p>
                </div>
                <div className='fcol'>
                    <h3>Support</h3>
                    <p>+62 0014 4387 6590</p>
                    <p>support@rumahsoftware.com</p>
                    <p>FAQ</p>
                    <p>Help Centre</p>
                </div>
            </div>
            <div className='footerdown'>
                <p>Copyright RumahSoftware. All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer