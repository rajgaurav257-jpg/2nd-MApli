import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content">
        <div className="nav-left">
          <a href="#about">About us</a>
          <a href="#blog">Blog</a>
          <a href="#courses">
            Courses 
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '4px'}}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div className="logo-center">Logo</div>
        
        <div className="nav-right">
          <button className="btn btn-red">Enroll</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
