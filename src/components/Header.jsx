import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-bar">
      <div className="header-left">
        <span>bilgi@endezyar.com</span>
      </div>
      <div className="header-center">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Arama" className="search-input" />
        <button className="search-btn">🔍</button>
        <button className="lang-btn">EN</button>
        <button className="lang-btn">DE</button>
        <button className="lang-btn">TR</button>
      </div>
    </div>
  );
};

export default Header; 