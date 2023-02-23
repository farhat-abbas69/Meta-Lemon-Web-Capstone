import React from 'react';
import "./styles/Navbar.css";
import Logo from "../components/assets/logo.jpg"
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</NavLink>
        </div>
        <nav className="navigation">
          <ul>
            <li><NavLink to="/" className="active-links">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="/reservations" className="active-links">Reservations</NavLink></li>
            <li><NavLink to="#">Order Online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar