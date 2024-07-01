import React from 'react'
import './About.css'
import img from '../Assets/img.png'

const About = () => {
    return (
        <div>
            <img src={img} alt="" id='img' />
            <div className='aboutmain'>
                <div className='numbers'>
                    <h3>RumahSoftware</h3>
                    <h3>100+ Total Projects</h3>
                    <h3>250+ Clients</h3>
                    <h3>15 Years of Experience</h3>
                </div>
                <div className='alphabets'>
                    <p id='ap1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco  <br />laboris nisi ut aliquip ex ea </p>
                    <p id='ap1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, </p>
                </div>
            </div>
        </div>
    )
}

export default About