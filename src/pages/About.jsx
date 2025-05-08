import React from 'react';
import './about2.css'


const About = () => {
  return (
    <div className="about">
      <div className="hero">
        <h1>About Qverse</h1>
       
       
      </div>
      
      <div className="content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>At Qverse, we're building a community where knowledge flows freely. Our platform connects curious minds with experts, making learning accessible to everyone.</p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="grid">
            <div className="card">
              <h3>Community First</h3>
              <p>We believe in the power of community-driven knowledge sharing.</p>
            </div>
            <div className="card">
              <h3>Quality Content</h3>
              <p>We maintain high standards for the content shared on our platform.</p>
            </div>
            <div className="card">
              <h3>Inclusive Learning</h3>
              <p>We make knowledge accessible to everyone, everywhere.</p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <p>We're a diverse team of passionate individuals working together to create the best knowledge-sharing platform.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
