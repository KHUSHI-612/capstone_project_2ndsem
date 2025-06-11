import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './pages/Home';
import About from './pages/About2';
import Questions from './pages/Questions';
import Answers from './pages/Answers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />

      {showLogin && (
        <Login
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
          onCancel={() => setShowLogin(false)}
        />
      )}

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers/:id" element={<Answers />} />
    
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;


