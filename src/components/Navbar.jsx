import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  return (
    <nav className="nav">
      <div className="logo">Qverse</div>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/questions">Questions</Link></li>
        <li><Link to="/answer">Answer</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      
        {isLoggedIn ? (
          <button className="logout-btn" onClick={onLogoutClick}>Logout</button>
        ) : (
          <button className="login-btn" onClick={onLoginClick}>Login</button>
        )}
     
    </nav>
  );
};

export default Navbar;












