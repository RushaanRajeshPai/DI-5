import React from 'react'
import './Work.css'
import replace from '../Assets/replace.png'
import rep from '../Assets/rep.png'

const Work = () => {
  return (
    <div className='workmain'>
      <h1 id='wh1'>Work that we can be proud of</h1>
      <div className='wrow'>
        <div className='wleft'>
          <img src={replace} alt="" />
          <h3 id='wh3'>Meeting Platform Landing Page</h3>
          <p>Landing page for users to meet online, equipped with the best <br /> features in it</p>
        </div>
        <div className='wleft'>
          <img src={rep} alt="" />
          <h3 id='wh3'>Restaurant Booking Mobile App</h3>
          <p>A restaurant ordering application that makes it easy for you to <br />order the restaurant you are going to visit</p>
        </div>
      </div>
      <button id='viewbtn'>View All Work</button>
    </div>
  )
}

export default Work