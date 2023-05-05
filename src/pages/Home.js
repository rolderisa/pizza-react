import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BannerImage from '../assets/we.jpg'
import './Home.css'

function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})` }}>
      <Navbar />
      <div className='headerContainer'>
        <h1>Irisa 's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu" >
          <button>ORDER NOW</button>
        </Link>

      </div>
    </div>
  )
}

export default Home
