import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
function Navbar({ size }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link>Signup</Link>
        <Link>Signin</Link>
      </div>

      <div className="navbar-cart" onClick={()=>navigate("/Cart")}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>{size}</span>
      </div>
    </div>
  )
}

export default Navbar
