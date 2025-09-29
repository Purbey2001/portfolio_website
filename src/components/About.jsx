import React from 'react'
import './About.css'
import pic from "../assets/pic.jpg";

function About() {
  return (
    <div className='about'>
      <h1 style={{marginBottom:'0px'}}>About Me</h1>
      <p>Get to know more about my journey and passion for technology</p>
      <div className='about-section'>
        <p>I am a passionate software developer with a strong foundation in programming languages like C++ and modern web technologies including React.js. With expertise in database management systems and a proven track record in competitive programming, I enjoy solving complex problems and building innovative solutions. My goal is to contribute to meaningful projects that make a positive impact while continuously learning and growing in the field of technology.</p>
        <div>
          {/* <div className='img-bg-abt'></div> */}
          <img src={pic} alt="" className='about-img'/>
        </div>
        
      </div>
    </div>
  )
}

export default About
