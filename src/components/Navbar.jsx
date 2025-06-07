import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.jpg" alt="Endezyar Logo" />
        <span className="logo-text">ENDEZYAR</span>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">ANASAYFA</Link></li>
        <li><Link to="/kurumsal">KURUMSAL</Link></li>
        <li><Link to="/urunler">ÜRÜNLER</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/iletisim">İLETİŞİM</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 