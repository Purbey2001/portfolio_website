import React from 'react'
import './Resume.css'
import { MdFileDownload } from "react-icons/md";

function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <button style={{padding:'10px 20px',fontSize:'24px'}}><MdFileDownload/>
      Download Resume</button>
      <br />
      <p>View my detailed CV with complete work experience and education</p>
    </div>
  )
}

export default Resume
