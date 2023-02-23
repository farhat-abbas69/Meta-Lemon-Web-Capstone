import React from 'react'
import "./styles/Navigation.css"
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
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
  )
}

export default Navigation