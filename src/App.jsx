import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './pages/Home';
import About from './pages/About2';
import Questions from './pages/Questions';
import Answers from './pages/Answers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthClick = () => setShowAuth(true);
  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLoginClick={handleAuthClick}
        onLogoutClick={handleLogoutClick}
      />

      {showAuth && (
        <Auth
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowAuth(false);
          }}
          onCancel={() => setShowAuth(false)}
        />
      )}

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLoginClick={handleAuthClick} />} />
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


