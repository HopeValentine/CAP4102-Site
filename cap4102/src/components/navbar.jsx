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
                <NavLink to="/about" activeClassName="active-link">ABOUT</NavLink>
                <NavLink to="/menu" activeClassName="active-link">MENU</NavLink>
                <NavLink to="/reviews" activeClassName="active-link">REVIEWS</NavLink>
                <NavLink to="/directions" activeClassName="active-link">DIRECTIONS</NavLink>
                <NavLink to="/contact" activeClassName="active-link">CONTACT US</NavLink>
            </div>
        </div>
    </div>
  )
}
