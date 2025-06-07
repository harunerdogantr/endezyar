import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import GlobalSystemsSection from './components/GlobalSystemsSection.jsx';
import NewsSection from './components/NewsSection.jsx';
import ProductsInfoSection from './components/ProductsInfoSection.jsx';
import KurumsalPage from './components/KurumsalPage.jsx';
import Footer from './components/Footer.jsx';
import FloatingContactButton from './components/FloatingContactButton.jsx';
import './App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GlobalSystemsSection />
      <NewsSection />
      <ProductsInfoSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurumsal" element={<KurumsalPage />} />
        {/* Diğer sayfalar için de route eklenebilir */}
      </Routes>
      <Footer />
      <FloatingContactButton />
    </Router>
  );
}

export default App;
