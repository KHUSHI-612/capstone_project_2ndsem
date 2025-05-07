import React,{useState} from "react";
import './footer.css'


const Footer=()=>{
    return(
    <footer className="footer">
      <div className="footer-sec">
        <h2>🧠 Qverse</h2>
        <h3>A collaborative platform where people ask questions, <br></br>share expert answers, and build<br></br> a growing knowledge community together.</h3>
      </div>
      <div className="footer-sec">
        <h3>Support</h3>
        <p>Contact Us</p>
        <p>email:</p>
        <p>customer helpline no:</p>
      </div>
      
      <div className="footer-sec">
        <h3>Legal</h3>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Qverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
