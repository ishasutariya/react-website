import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Shophome from './components/Shoppage/Shophome';
import Header from './components/Home/Heder';
import Navbar from './components/Home/Navbar';
import Slideicon from './components/Home/Slideicon'
import Footer from './components/Home/Footer';
import Collections from './components/Collectionspage/Collections';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Slideicon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shophome />} />
          <Route path="/collections" element={<Collections/>} />
          <Route path="/personalize" element={<div>Personalize Page</div>} />
          <Route path="/new-arrivals" element={<div>New Arrivals Page</div>} />
          <Route path="/information" element={<div>Information Page</div>} />

          <Route path="/necklaces" element={<div>Necklaces Page</div>} />
          <Route path="/earrings" element={<div>Earrings Page</div>} />
          <Route path="/rings" element={<div>Rings Page</div>} />
          <Route path="/bracelets" element={<div>Bracelets Page</div>} />
          <Route path="/anklets" element={<div>Anklets Page</div>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
