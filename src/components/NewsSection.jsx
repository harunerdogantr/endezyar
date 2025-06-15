import React from 'react';
import './NewsSection.css';

const news = [
  { title: 'Endezyar POWTECH 2024 Fuarı', desc: 'Toz, granül ve dökme hammaddelerin üretim ve işleme süreçlerinin lider fuarında yer aldık.', date: 'Mart 2024' },
  { title: '2. Proses Emniyeti Sempozyumu', desc: 'Proses emniyeti sempozyumunda standımıza yoğun ilgi gösterildi.', date: 'Nisan 2024' },
  { title: 'Yeni Üretim Tesisimiz Açıldı', desc: 'Kapasite artırımı için yeni üretim tesisimiz hizmete girdi.', date: 'Mayıs 2024' },
  { title: 'Uluslararası İş Birliği', desc: 'Avrupa\'nın önde gelen endüstriyel ekipman üreticileri ile iş birliği anlaşması imzaladık.', date: 'Haziran 2024' },
  { title: 'Ar-Ge Merkezimiz Genişliyor', desc: 'Yenilikçi çözümler için Ar-Ge merkezimizi genişletiyoruz.', date: 'Temmuz 2024' },
  { title: 'Yeni Ürün Lansmanı', desc: 'Endüstriyel prosesler için geliştirdiğimiz yeni ürünlerimizi tanıttık.', date: 'Ağustos 2024' }
];

const NewsSection = () => (
  <section className="news-section">
    <h2>HABERLER</h2>
    <div className="news-list">
      {news.map((n, i) => (
        <div className="news-card" key={i}>
          <h3>{n.title}</h3>
          <span className="news-date">{n.date}</span>
          <p>{n.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NewsSection; 