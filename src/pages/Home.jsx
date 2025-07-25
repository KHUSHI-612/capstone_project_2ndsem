import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import Footer from '../components/Footer';

const Home = ({ isLoggedIn, onLoginClick }) => {
  const navigate = useNavigate();

  const handleStartAsking = () => {
    if (isLoggedIn) {
      navigate('/questions');
    } else {
      onLoginClick();
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
          <h1>Welcome to <span className="q-pop">Q</span>verse </h1>
            <p>Ask questions, share knowledge, and learn together </p>
            <button onClick={handleStartAsking} className="cta-button">
              Start Asking
            </button>
          </div>
          <div className="hero-image">
            <img src="/hero_image.png" alt="Hero" />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Ask Questions</h3>
          <p>Get answers from our community of experts</p>
        </div>
        <div className="feature-card">
          <h3>Share Knowledge</h3>
          <p>Help others by answering their questions</p>
        </div>
        <div className="feature-card">
          <h3>Learn & Grow</h3>
          <p>Expand your knowledge through discussions</p>
        </div>
      </div>

      <div className="trending">
        <h2>Trending Topics</h2>
        <div className="topic-grid">
          <div className="topic-card">
            <div className="card-inner">
              <div className="card-front">Technology</div>
              <div className="card-back">
                <img src="/tech.jpg" alt="Technology" />
              </div>
            </div>
          </div>
          <div className="topic-card">
            <div className="card-inner">
              <div className="card-front">Science</div>
              <div className="card-back">
                <img src="/science.jpg" alt="Science" />
              </div>
            </div>
          </div>
          <div className="topic-card">
            <div className="card-inner">
              <div className="card-front">Programming</div>
              <div className="card-back">
                <img src="/coding.jpg" alt="Programming" />
              </div>
            </div>
          </div>
          <div className="topic-card">
            <div className="card-inner">
              <div className="card-front">Design</div>
              <div className="card-back">
                <img src="/design.jpg" alt="Design" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Home;




