import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('TR');
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
        setIsTopBarVisible(false);
      } else {
        setIsScrolled(false);
        setIsTopBarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`top-bar ${!isTopBarVisible ? 'hidden' : ''}`}>
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="mailto:bilgi@endezyar.com" className="top-bar-email">
              bilgi@endezyar.com
            </a>
          </div>
          <div className="top-bar-right">
            <div className="search-box">
              <input type="text" placeholder="Arama..." />
              <button>🔍</button>
            </div>
            <div className="language-selector">
              <button 
                className={activeLang === 'EN' ? 'active' : ''} 
                onClick={() => setActiveLang('EN')}
              >
                EN
              </button>
              <button 
                className={activeLang === 'DE' ? 'active' : ''} 
                onClick={() => setActiveLang('DE')}
              >
                DE
              </button>
              <button 
                className={activeLang === 'TR' ? 'active' : ''} 
                onClick={() => setActiveLang('TR')}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-text">ENDEZYAR</span>
          </div>
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="menu-item">ANASAYFA</Link></li>
            <li><Link to="/kurumsal" className="menu-item">KURUMSAL</Link></li>
            <li><Link to="/urunler" className="menu-item">ÜRÜNLER</Link></li>
            <li><Link to="/blog" className="menu-item">BLOG</Link></li>
            <li><Link to="/iletisim" className="menu-item">İLETİŞİM</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 