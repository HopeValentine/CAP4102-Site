import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='nav'>navbar
        <div>
            <Link to="/">Home </Link>
            <Link to="/menu">Menu</Link>
        </div>
    </div>
  )
}
