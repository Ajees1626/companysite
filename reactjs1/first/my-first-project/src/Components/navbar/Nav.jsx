import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Chennai Drop Taxi" className="footer-logo" />

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </div>

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
        <Link to="/details" onClick={() => setMenuOpen(false)}><li>Details</li></Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}><li>About</li></Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default nav;
