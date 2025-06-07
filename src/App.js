import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCards from './components/ProductCards';
import FloatingContactButton from './components/FloatingContactButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <ProductCards />
      <FloatingContactButton />
    </div>
  );
}

export default App; 