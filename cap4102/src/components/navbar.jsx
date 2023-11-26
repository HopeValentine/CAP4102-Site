import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/header_logo_1.png";
import '../index.css';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-container">
            <img src={logo} className="img-header-logo"></img>
            <div className="navbar-links">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/menu">MENU</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/directions">DIRECTIONS</Link>
                <Link to="/contact">CONTACT US</Link>
            </div>
        </div>
    </div>
  )
}
