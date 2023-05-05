import React from 'react'
import Navbar from '../components/Navbar'
import pizza from '../assets/pizaa.jpg'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
      <Navbar />
      <div className='aboutTop' style={{backgroundImage: `url(${pizza})` }}>

        <div className='aboutBottom'>
          <h1>ABOUT US</h1>
        
          <p>Welcome to our Pizza website! We are passionate about pizza and all things related to this delicious dish. Our mission is to provide pizza lovers with the best possible online experience by offering a wide selection of pizza options, helpful resources, and excellent customer service.

Our team of experts has years of experience in the pizza industry, and we have carefully curated a menu of top-quality pizza options to satisfy all tastes and preferences. From classic margherita to unique gourmet creations, we have something for everyone.






</p>

        </div>
      </div>
    </div>
  )
}

export default About
