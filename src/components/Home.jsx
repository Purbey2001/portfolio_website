import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import pic from "../assets/pic.jpg";
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

function Home() {
  return (
    <div className='home'>
      <div className='desc'>
        <h1>Abhishek Kumar</h1>
        <p>
          Aspiring MERN Stack Developer
        </p>
        <div style={{display:'flex',columnGap:'16px'}}>
          <button>View Projects</button>
          <button> <MdFileDownload/> Download Resume</button>
        </div>
        <div className='profileUrl'>
          <a href='https://www.linkedin.com/in/abhishek-kumar-2a360523a/'><FaLinkedin style={{color:"blue"}}/></a>
          <a href='https://github.com/Purbey2001'><FaSquareGithub style={{color:'black'}}/></a>
          <a href='https://leetcode.com/u/Purbey_2001/'><SiLeetcode style={{color:'orange'}}/></a>
          <a href='https://www.codechef.com/users/purbey2001'><SiCodechef style={{color:'black'}}/></a>
        </div>
      </div>
      <div className='imagr'>
        {/* <div className='img-bg'></div> */}
        <img src={pic} alt="" className='home-img'/>
      </div>
    </div>
  )
}

export default Home
