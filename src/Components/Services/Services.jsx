import React from 'react'
import './Services.css'
import curve from '../Assets/curve.png'

const Services = () => {
    return (
        <div className='servemain'>
            <div className='servl'>
                <h1 id='sh1'>What can we do for you?</h1>
                <p id='sp1'>We have some of the best services for you, services carried <br />out by professionals in their fields</p>
                <p id='sp2'>4 Best services provided for you</p>
                <img src={curve} alt="" />
            </div>
            <div className='servr'>
                <div className='servrdown'>
                    <div className='web'>
                        <h2><span>01</span> Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut </p>
                    </div>
                    <div className='web'>
                        <h2><span>02</span> Mobile Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut </p>
                    </div>
                    <div className='web'>
                        <h2><span>03</span> UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut </p>
                    </div>
                    <div className='web'>
                        <h2><span>04</span> Software Quality Assurance</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services