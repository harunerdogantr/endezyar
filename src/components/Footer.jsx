import React from 'react';
import './Footer.css';

const menu = [
  'ANASAYFA',
  'KURUMSAL',
  'ÜRÜNLER',
  'BLOG',
  'İLETİŞİM',
];

const Footer = () => (
  <footer className="footer-red">
    <div className="footer-menu-box">
      <ul className="footer-menu footer-menu-small">
        {menu.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
            {i !== menu.length - 1 && <span className="footer-divider">|</span>}
          </li>
        ))}
      </ul>
    </div>
    <hr className="footer-line" />
    <div className="footer-copyright">
      © 2025 Endezyar Grup Endüstriyel Üretim San. A.Ş. -
    </div>
  </footer>
);

export default Footer; 