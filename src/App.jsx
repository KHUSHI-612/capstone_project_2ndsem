import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './pages/Home';



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
        <Route path="/" element={<Home />} />
    
  </Routes>
    </div>
  );
}

export default App;


