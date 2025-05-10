import React from "react";
import "./Footer.css";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src="images/logo.png"
          alt="Chennai Drop Taxi"
          className="footer-logo"
        />
        <div className="footer-socials">
          {/* <FaArrowLeft className="footer-arrow" /> */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ color: '#27346a', margin: '0 10px' }} />
            Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
             <FaInstagram style={{ color: '#27346a', margin: '0 10px' }} />
            Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ color: '#27346a', margin: '0 10px' }} />
            Twitter</a>    
          {/* <FaArrowRight className="footer-arrow" /> */}
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Services</p>
          <p>Pricing</p>
          <p>Destinations</p>
          <p>Contact</p>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>Download</p>
          <p>Booking</p>
          <p>Call us</p>
          <p>whatsapp</p>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <p>Term & Condition</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-column">
          <h3>Address</h3>
          <p>
            PL/No: 3B, Vasantha Avenue<br />
            Puthur, Extention, Mappedu,<br />
            Tiruvanchery, Chennai, Tamil Nadu 600126<br />
            Phone: 8939700050<br />
            Email: chennaidroptaxiservice@gmail.com
          </p>
        </div>
      </div>

      <p className="footer-copy">
        © Chennai Drop Taxi 2022 by Chennai Drop Taxi
      </p>
    </footer>
  );
};

export default Footer;
