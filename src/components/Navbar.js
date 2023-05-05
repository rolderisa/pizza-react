import React,{useState} from 'react'
import Logo from '../assets/pizza.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [openLinks, setOpenLinks]=useState(false);
  const toogleNavbar = ()=>{
setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>

      <div className='leftSide' id={openLinks ? "open" : "closed" }>
        <img src={Logo} alt='well' />
        <div className='hiddenLinks'>
          <Link to="/" >Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>  

      <div className='rightSide'>
        <Link to="/" >Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toogleNavbar}>
          <i class="fa-solid fa-bars fa-beat-fade fa-lg"></i>
        </button>
      </div>

    </div>
  )
}

export default Navbar
