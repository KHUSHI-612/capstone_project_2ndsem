import React from 'react';
import './home.css';
import PopTopics from '../components/topics.jsx';
import PopularQ from '../components/Popularq.jsx';
import { Link } from 'react-router-dom';



import  Footer from '../components/Footer.jsx'



const Home = () => {


return(
    <div>
    
  
      <div className="home-hero">
    
        <div className="home-content">
          
        

          <h1>Ask. Answer. Learn.</h1>
          <p>From everyday doubts to expert insights—discover, contribute, and thrive together</p>
          <button className="start-button">Get Started</button>
        </div>
      </div>
      <PopTopics />
      <PopularQ/>

      <div className="community-section">
  <h2>Our Growing Community</h2>
  <div className="community-grid">
    <div className="stats-card" data-aos="fade-up">
      <div className="circle blue">1</div>
      <p>Questions</p>
      <h3>150,000+</h3>
    </div>
    <div className="stats-card" data-aos="fade-up" data-aos-delay="100">
      <div className="circle pink">2</div>
      <p>Answers</p>
      <h3>520,000+</h3>
    </div>
    <div className="stats-card" data-aos="fade-up" data-aos-delay="200">
      <div className="circle green">3</div>
      <p>Users</p>
      <h3>75,000+</h3>
    </div>
    <div className="stats-card" data-aos="fade-up" data-aos-delay="300">
      <div className="circle orange">4</div>
      <p>Daily Visitors</p>
      <h3>25,000+</h3>
    </div>
  </div>
</div>


<div className="about-link">
  <Link to="/about">
    <p>Know more about us <span className="arrow">→</span></p>
  </Link>
</div>

<Footer/>
    </div>




  );

};


export default Home;




