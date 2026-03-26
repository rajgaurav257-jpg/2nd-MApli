import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css';

const Hero = () => {
  return (
    <main className="container hero-wrapper">
      <div className="hero-card">
        <div className="hero-left">
          <h1>Learn French<br />from anywhere<br />in the world</h1>
          
          <p className="hero-subtext">
            Master the language of diplomacy and culture with Maplelingua. 
            Our instructors bring the essence of France to 
            your screen, no matter where you live.
          </p>
          
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-red">Start Now</Link>
            <Link to="/about" className="btn btn-outline">Explore More</Link>
          </div>
        </div>
        
        <div className="hero-right">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80" 
            alt="Collaborative Learning at Maplelingua" 
            className="hero-animation-img"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80' }}
          />
        </div>
      </div>
    </main>
  )
}

export default Hero
