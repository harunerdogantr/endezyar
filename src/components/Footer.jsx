import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="Endezyar Logo" />
          </div>
          <p>Endüstriyel tesisler için ekipman ve sistem üretimi yapan, mühendislik desteği veren 40 yıllık tecrübeli firma.</p>
          <div className="footer-social">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section footer-center">
          <h3>HIZLI ERİŞİM</h3>
          <ul className="footer-links">
            <li><Link to="/">ANASAYFA</Link></li>
            <li><Link to="/kurumsal">KURUMSAL</Link></li>
            <li><Link to="/urunler">ÜRÜNLER</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/iletisim">İLETİŞİM</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact-section">
          <h3>İLETİŞİM</h3>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> Organize Sanayi Bölgesi, 34555 İstanbul</li>
            <li><i className="fas fa-phone"></i> +90 (212) 123 45 67</li>
            <li><i className="fas fa-envelope"></i> bilgi@endezyar.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Endezyar Grup Endüstriyel Üretim San. A.Ş. Tüm hakları saklıdır.</p>
          <div className="footer-bottom-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 