import React from 'react'
import './Testimonial.css'
import small from '../Assets/small.png'
import web from '../Assets/web.png'
import comma from '../Assets/comma.png'
import arrows from '../Assets/arrows.png'

const Testimonial = () => {
  return (
    <div className='testmain'>
        <h1 id='testh'>Testimonials from our service users </h1>
        <div className='testrow'>
            <div className='testleft'>
                <img src={small} alt="" id='small' />
                <img src={web} alt="" id='web'/>
            </div>
            <div className='testright'>
                <img src={comma} alt="" />
                <p>“This is the second time I've ordered a system build here, and the <br /> results have always been great. I would not doubt to recommend <br />this to my friends. This is so amazing!”</p>
                <h4>Mark Andre Batista</h4>
                <h5>CEO Smackup.org</h5>
                <img src={arrows} alt="" id='arrows' />
            </div>
        </div>
    </div>
  )
}

export default Testimonial