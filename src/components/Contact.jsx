import React, { useState } from 'react'
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";


function Contact() {
  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    message:""
  })
  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData( prevFormData => {
      return{
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    });
  }
  return (
    <div className='contact'>
      <h1>Get In Touch</h1>
      <div className='contact-card'>
        <div className='contact-sections'>
          <p style={{fontSize:'x-large',fontWeight:'bold'}}>Let's Connect</p>
          <div className='contact-section'>
              <div>
                <AiOutlineMail style={{fontSize:'1.5em',color:'blue'}}/>
              </div>
              <div>
                <span style={{fontWeight:'bold'}}>Email</span>
                <br />
                <span>purbeyabhishek2001@gmail.com</span>
              </div>
          </div>
          <div className='contact-section'>
            <div>
              <AiOutlinePhone style={{fontSize:'1.5em',transform:'rotate(90deg)',color:'blue'}}/>
            </div>
            <div>
              <span style={{fontWeight:'bold'}}>Phone</span>
              <br />
              <span>+91 9798476051</span>
            </div>
          </div>
          <div className='contact-section'>
              <div>
                <AiOutlineMail style={{fontSize:'1.5em',color:'blue'}}/>
              </div>
              <div>
                <span style={{fontWeight:'bold'}}>LinkedIn</span>
                <br />
                <span>linkedin.com/in/abhishek-kumar3401/</span>
              </div>
          </div>
        </div>

        <div className='contact-form'>
          <p style={{fontSize:'x-large',fontWeight:'bold',textAlign:'center'}}>Send a message</p>
          <form action="">
            <label>Name :
            <br />
            <input type="text" value={formData.fullName} placeholder='fullName' name='fullName'onChange={changeHandler}/> 
            </label>
            <br />
            <label>Email :
            <br />
            <input type="email" value={formData.email} placeholder='email' name='email'onChange={changeHandler}/> 
            </label>
            <br />
            <label>Message :
            <br />
            <textarea value={formData.message} rows="5" cols="30" placeholder="Type something here..." name='message' onChange={changeHandler}/>
            </label>
            <br />
            <button style={{width:'90%',margin:'auto',display:'block'}}>Send message</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
