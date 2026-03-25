import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Part: Stay in touch */}
        <div className="footer-top">
          <div className="stay-in-touch">
            <h3>Stay in touch</h3>
            <p>Get updates on new courses and language tips</p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input type="email" placeholder="Your email" />
              <button className="btn btn-subscribe">Subscribe</button>
            </div>
            <p className="privacy-notice">By subscribing you agree to our Privacy Policy</p>
          </div>
        </div>

        {/* Middle Part: Links */}
        <div className="footer-middle">
          <div className="footer-brand">
            <span className="logo-center" style={{fontSize: '2.5rem'}}>Logo</span>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#partners">Partners</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help center</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#status">Status page</a></li>
                <li><a href="#contact-us">Contact us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#youtube">YouTube</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy policy</a></li>
                <li><a href="#terms">Terms of service</a></li>
                <li><a href="#cookies">Cookie settings</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#conduct">Code of conduct</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Part: Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2025 Global French Academy</p>
            <div className="bottom-links">
              <a href="#privacy">Privacy policy</a>
              <a href="#terms">Terms of service</a>
              <a href="#cookies">Cookie settings</a>
            </div>
          </div>
          <div className="footer-social-icons">
            <a href="#fb"><i className="soc-icon">f</i></a>
            <a href="#ig"><i className="soc-icon">ig</i></a>
            <a href="#tw"><i className="soc-icon">x</i></a>
            <a href="#li"><i className="soc-icon">in</i></a>
            <a href="#yt"><i className="soc-icon">yt</i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
