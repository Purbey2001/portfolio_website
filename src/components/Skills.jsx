import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills'>
      <h1 style={{marginBottom:'0px'}}>Skills & Technologies</h1>
      <p>Here are the technologies and tools I work with to bring ideas to life</p>
      <div className='skill-card'>
        <div className='skill-section'>
          <p><span>Languages : </span> C++, JavaScript, Java</p>
        </div>
        <div className='skill-section'>
          <p><span>Front-end : </span> ReactJs, Redux Toolkit, HTML, CSS,Bootstrap, Tailwind CSS</p>
        </div>
        <div className="skill-section">
          <p><span>Database : </span>PostgreSql, MongoDb, MySql</p>
        </div>
        <div className='skill-section'>
          <p><span>Back-end :</span> NodeJs(basic),ExpressJs(basic) , MongoDb(basic)</p>
        </div>
        <div className='skill-section'>
          <p><span>Tools & Version Control :</span> Git, GitHub, VS Code</p>
        </div>
        <div className="skill-section">
          <p><span>Core CS Concepts: : </span>DSA, DBMS, OOPs</p>
        </div>
        <div className="skill-section">
          <p><span>Soft-Skills : </span>Requirement Gathering, Team Collaboration, Problem-Solving</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
