import React from 'react'
import Navbar from '../components/Navbar'
import piza from '../assets/piza.png'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <Navbar />
      <div className='leftSide' style={{backgroundImage: `url(${piza})` }}>

      </div>
      <div className='rightSide'>
        <h1>Contact US</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name ...' type='text'/>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter your Email ...' type='email'/>

          <label htmlFor='message'>Message</label>
         
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>

        </form>

      </div>
    </div>
  )
}

export default Contact;




