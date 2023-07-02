import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBarBoostrap.css"
import CartWidget from '../CartWidget/CartWidget'
import logo from "../img/luxclothinglogo.png"
const NavBarBoostrap = () => {
  
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark barrita">
    <a className="navbar-brand logo" href="/" >Lux Clothing</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
         <Link to="/" className='home nav-link'>Home</Link> <span className="sr-only">(current)</span>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/category/men's clothing" className="dropdown-item">Men´s Clothing</Link>
            <div className="dropdown-divider"></div>
            <Link to="/category/women's clothing" className="dropdown-item">Women`s Clothing</Link>
            <div className="dropdown-divider"></div>
            <Link to="/category/electronics" className="dropdown-item">Electronics</Link>
            <div className="dropdown-divider"></div>
            <Link to="/category/jewelery" className="dropdown-item">Jewerly</Link>
          </div>
        </li>  
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
       
        <CartWidget/> 
      </ul>
      <form className="form-inline my-2 my-lg-0">     
        <div className="btn btn-outline-success my-2 my-sm-0 submitbtn" type="submit"><img src={logo} alt="luxlogo" /></div>
      </form>
    </div>
  </nav></div>
  )
}

export default NavBarBoostrap