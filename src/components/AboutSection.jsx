import React from 'react';
import './AboutSection.css';

const cards = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    text: 'YÜZLERCE TESİSTE ÇALIŞAN',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    text: 'BİNLERCE EKİPMAN',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    text: 'GÜVENİLİR SİSTEMLER',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    text: 'SORUNSUZ PROJELER',
  },
  {
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
    text: 'UZMAN MÜHENDİSLİK',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=600&q=80',
    text: 'YENİLİKÇİ ÇÖZÜMLER',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    text: 'ENDÜSTRİYEL TECRÜBE',
  },
  {
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
    text: 'KALİTELİ EKİPMAN',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    text: 'MÜŞTERİ MEMNUNİYETİ',
  },
];

const AboutSection = () => (
  <section className="about-section-grid">
    <div className="about-grid">
      {cards.map((card, i) => (
        <div className="about-card" key={i} style={{ backgroundImage: `url(${card.img})` }}>
          <div className="about-card-overlay"></div>
          <div className="about-card-text">{card.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection; 