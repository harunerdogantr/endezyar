import React from 'react';
import './ProductCards.css';

const products = [
  { title: 'Ürün 1', img: '/product1.jpg', desc: 'Ürün 1 açıklaması.' },
  { title: 'Ürün 2', img: '/product2.jpg', desc: 'Ürün 2 açıklaması.' },
  { title: 'Ürün 3', img: '/product3.jpg', desc: 'Ürün 3 açıklaması.' },
];

const ProductCards = () => {
  return (
    <div className="product-cards">
      {products.map((product, idx) => (
        <div className="product-card" key={idx}>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards; 