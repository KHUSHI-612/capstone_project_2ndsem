import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="links">
            <a href="https://twitter.com" >Twitter</a>
            <a href="https://linkedin.com" >LinkedIn</a>
            <a href="https://github.com" >GitHub</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <p>Help Center</p>
          <p>Community Guidelines</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Qverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
