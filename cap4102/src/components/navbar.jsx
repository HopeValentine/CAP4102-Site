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
                <NavLink to="/about" activeClassName="active-link" style={{textDecoration: 'none', color:'white'}}>ABOUT</NavLink>
                <NavLink to="/menu" activeClassName="active-link" style={{textDecoration: 'none', color:'white'}}>MENU</NavLink>
                <NavLink to="/reviews" activeClassName="active-link" style={{textDecoration: 'none', color:'white'}}>REVIEWS</NavLink>
                <NavLink to="/directions" activeClassName="active-link" style={{textDecoration: 'none', color:'white'}}>DIRECTIONS</NavLink>
                <NavLink to="/contact" activeClassName="active-link" style={{textDecoration: 'none', color:'white'}}>CONTACT US</NavLink>
            </div>
        </div>
    </div>
  )
}
