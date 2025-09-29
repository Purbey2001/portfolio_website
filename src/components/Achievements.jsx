import React from 'react'
import './Achievements.css'
import { FaRegStar } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Achievements() {
  return (
    <div className='achievements'>
      <h1 style={{marginBottom:'0px'}}>Achievements</h1>
      <p>Milestones and accomplishments in my programming journey</p>
      <div className='achievement'>
        <div className='achievement-section'>
          <div>
            <FaRegStar />
          </div>
          <div className='achievement-card'>
            <p style={{marginBottom:'4px',marginTop:'4px'}}>Solved 500+ LeetCode Problems</p>
            <span>Highest Rating 1566</span>
          </div>
        </div>
        <div className='achievement-section'>
          <div>
            <BsFillTrophyFill />
          </div>
          <div className='achievement-card'>
            <p style={{marginBottom:'4px',marginTop:'4px'}}>3★ CodeChef</p>
            <span>Highest Rating 1699</span>
          </div>
        </div>
        <div className='achievement-section'>
          <div>
            <AiOutlineGlobal />
          </div>
          <div className='achievement-card'>
            <p style={{marginBottom:'4px',marginTop:'4px'}}>Global Rank 197
</p>
            <span>CodeChef Starters 141</span>
          </div>
        </div>
        <div className='achievement-section'>
          <div>
            <FaGithub />
          </div>
          <div className='achievement-card'>
            <p style={{marginBottom:'4px',marginTop:'4px'}}>Open Source Contributor
</p>
            <span>Multiple GitHub repositories</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
