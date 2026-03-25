import React from 'react'
import imgTips from '../assets/get tip.png'

const Newsletter = () => {
  return (
    <section className="promo-section newsletter-promo">
      <div className="container">
        <div className="promo-content">
          <h2 className="promo-title">Get tips delivered weekly</h2>
          <p className="promo-subtitle">Subscribe for lessons, grammar tricks, and cultural insights.</p>
          <div className="newsletter-inline-form">
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button className="btn btn-red">Subscribe</button>
          </div>
          <p className="newsletter-footer-text">We respect your inbox. Unsubscribe anytime with one click.</p>
        </div>
        <div className="promo-image-large">
          <img src={imgTips} alt="Weekly French tips" />
        </div>
      </div>
    </section>
  )
}

export default Newsletter
