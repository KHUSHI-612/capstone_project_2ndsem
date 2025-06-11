import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" onClick={handleLinkClick}>Qverse</Link>
      </div>
      <div className={`hamburger${menuOpen ? ' active' : ''}`} onClick={handleHamburgerClick} aria-label="Toggle menu" tabIndex={0}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-links${menuOpen ? ' active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/questions" onClick={handleLinkClick}>Questions</Link>
        <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        <div className="nav-auth mobile-auth">
          {isLoggedIn ? (
            <button onClick={() => { onLogoutClick(); handleLinkClick(); }} className="logout-btn">Logout</button>
          ) : (
            <button onClick={() => { onLoginClick(); handleLinkClick(); }} className="login-btn">Login</button>
          )}
        </div>
      </div>
      <div className="nav-auth desktop-auth">
        {isLoggedIn ? (
          <button onClick={onLogoutClick} className="logout-btn">Logout</button>
        ) : (
          <button onClick={onLoginClick} className="login-btn">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;












