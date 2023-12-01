import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../images/header_logo_1.png";
import '../index.css';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <Link to="/">
                <img src={logo} alt="Logo" className="img-header-logo" />
            </Link>
            <div className="navbar-links">
                <NavLink to="/about" className="active-link" style={{textDecoration: 'none', color:'white'}}>ABOUT</NavLink>
                <NavLink to="/menu" className="active-link" style={{textDecoration: 'none', color:'white'}}>MENU</NavLink>
                <Link to="https://www.yelp.com/biz/di-da-pensacola-4" className="active-link" style={{textDecoration: 'none', color:'white'}}>REVIEWS</Link>
                <NavLink to="/directions" className="active-link" style={{textDecoration: 'none', color:'white'}}>DIRECTIONS</NavLink>
                <NavLink to="/contact" className="active-link" style={{textDecoration: 'none', color:'white'}}>CONTACT US</NavLink>
            </div>
        </div>
    </div>
  )
}
