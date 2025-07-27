import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about2.css';

const About2 = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Qverse</h1>
        <p className="subtitle">Building a community of knowledge seekers and sharers</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To empower curiosity and knowledge sharing by connecting people with questions to those with answers, in a fun and modern community.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon" >🤝</span>
              <h3>Community</h3>
              <p>We believe in the power of people helping people. Our platform is built for collaboration and support.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🔍</span>
              <h3>Curiosity</h3>
              <p>We encourage asking questions and exploring new ideas. Curiosity drives learning and growth.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎉</span>
              <h3>Fun</h3>
              <p>Learning should be enjoyable! We strive to make Q&A engaging and rewarding for everyone.</p>
            </div>
          </div>
        </section>

        <section className="join-section">
          <h2>Join Our Community</h2>
          <p>
            Ready to start asking and answering? Join us and be part of a vibrant, supportive, and fun Q&A community!
          </p>
          <button className="join-button" onClick={() => navigate('/questions')}>Get Started</button>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What is this platform about?</h3>
              <p>It's a modern Q&A community where you can ask questions, share answers, and connect with curious minds from around the world.</p>
            </div>
            <div className="faq-item">
              <h3>How do I ask a question?</h3>
              <p>Simply sign up or log in, then click the "Start Asking" button on the home page or questions page to post your question.</p>
            </div>
            <div className="faq-item">
              <h3>Is it free to use?</h3>
              <p>Yes! Our platform is completely free for everyone to ask, answer, and explore knowledge.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About2; 