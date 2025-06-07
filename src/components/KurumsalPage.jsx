import React from 'react';
import './KurumsalPage.css';

const items = [
  {
    img: "https://www.polimak.com/wp-content/uploads/2020/09/polimak-fabrika.jpg",
    title: "Hakkımızda",
    desc: "Endezyar 40 yıllık tecrübesi ile endüstriyel tesisler için ekipman ve sistem üretimi yapmakta ve mühendislik desteği vermektedir. Üretim tesislerinde toz ve tanecikli yapıdaki dökme hammaddelerin üretim hattına girişinden bitmiş ürün çıkışına kadar; hammadde taşıma, yükleme, boşaltma, tartım, dozajlama, depolama, toz toplama ve filtreleme ile ilgili ekipmanların üretimi ve anahtar teslim sistem kurulumu üzerine uzmanlaşmıştır. Gıda, çimento, demir çelik, enerji, tarım, kimya ve plastik sektörleri başlıca hizmet verdiğimiz alanlardır."
  },
  {
    img: "https://www.polimak.com/wp-content/uploads/2020/09/polimak-uretim-tesisi.jpg",
    title: "Doğru Çözümler",
    desc: "Arge yetenekleri ve uygulamaya özel tasarım yapma kabiliyetleri Endezyar'ın güçlü olduğu yanlardır. Mühendislik ekibimiz, farklı ihtiyaçlar için en uygun sistem ve ekipmanları tasarlamaktadır. Firmanın esnek organizasyon yapısı, tek bir ekipmandan anahtar teslim sistemlere kadar ürün geliştirme ve üretme imkanı sağlamaktadır."
  },
  {
    img: "https://www.polimak.com/wp-content/uploads/2020/09/polimak-kalite-yonetimi.jpg",
    title: "Kalite Yönetimi",
    desc: "Başarılı bir kalite yönetimi için iletişim, birlikte çalışma, doğru planlama ve hassas üretim süreçlerinin bir arada uygulanması gerekmektedir. Sahip olduğumuz ISO 9001:2015 kalite yönetim sistemi ve diğer destekleyici faaliyetler, konsept tasarımdan anahtar teslim sistem kurulumuna kadar bütün alanlarda üst düzey kaliteye erişmemizi sağlamaktadır."
  }
];

const KurumsalPage = () => (
  <div className="kurumsal-container">
    <div className="kurumsal-title">KURUMSAL</div>
    {items.map((item, i) => (
      <div className="kurumsal-row" key={i}>
        <div className="kurumsal-img-col">
          <img src={item.img} alt={item.title} className="kurumsal-img" />
        </div>
        <div className="kurumsal-content-col">
          <div className="kurumsal-item-title">{item.title}</div>
          <div className="kurumsal-item-desc">{item.desc}</div>
        </div>
      </div>
    ))}
  </div>
);

export default KurumsalPage; 