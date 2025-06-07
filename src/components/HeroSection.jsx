import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Otomasyon Sistemleri',
    desc: 'Endüstriyel tesislerde verimliliği artıran otomasyon çözümleri.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
    title: 'Hammadde Depolama ve Taşıma',
    desc: 'Güvenli ve verimli hammadde yönetimi için yenilikçi sistemler.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    title: 'Yenilikçi Mühendislik',
    desc: 'Proses teknolojilerinde sürdürülebilir ve akıllı çözümler.'
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section-carousel">
      {slides.map((slide, idx) => (
        <div
          className={`hero-slide${idx === current ? ' active' : ''}`}
          key={idx}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>{slide.title}</h2>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection; 