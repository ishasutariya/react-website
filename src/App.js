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
import Expresshome from './components/ExpressDelivery/Expresshome';
import Personalizedhome from './components/Personalized-Jewellery/Personalizedhome';
import Newarrivalshome from './components/NewArrivals/Newarrivalshome';
import Informationhome from './components/Information/Informationhome'
import Necklacehome from './components/Shoppage/Necklace/Necklacehome';
import Earringshome from './components/Shoppage/Earrings/Earringshome';
import Braceletshome from './components/Shoppage/Bracelets/Braceletshome';
import Ringshome from './components/Shoppage/Rings/Ringshome';
import Ankletshome from './components/Shoppage/Anklets/Ankletshome';
import Belthhome from './components/Shoppage/Belt Buckles/Belthome';
import Brooches from './components/Shoppage/Brooches/Brooches';
import Cartilage from './components/Shoppage/Cartilage/Cartilage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar/>
        <Slideicon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shophome />} />
          <Route path="/necklaces" element={<Necklacehome />} />
          <Route path="/earrings" element={<Earringshome/>} />
          <Route path="/bracelets" element={<Braceletshome/>} />
          <Route path="/rings" element={<Ringshome/>} />
          <Route path="/anklets" element={<Ankletshome/>} />
          <Route path='/BeltBuckles'  element={<Belthhome/>}/>
          <Route path='/Brooches'  element={<Brooches/>} />
          <Route path='/Cartilage' element={<Cartilage/>}  />
 
          <Route path="/collections" element={<Collections/>} />
          <Route path="/expresshome" element={<Expresshome/>} />
          <Route path="/Personalizedhome" element={<Personalizedhome/>} />
          <Route path="/Newarrivals" element={<Newarrivalshome/>} />
          <Route path="/Informationhome" element={<Informationhome/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
