import React from 'react';
import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';
import HeroImage from "../components/assets/gourmet.jpg"

const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            {/* <div className="section-right">
                
            </div> */}
            <div className="image-box">
                    <img src="https://www.jigsawplanet.com/Jjwu2502/aesthetic-food?rc=face" alt="Serving delicious dish" />
                </div>
        </div>
    </div>
  )
}

export default HeroSection
