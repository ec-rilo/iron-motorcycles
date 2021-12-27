import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BikeDetail from './components/BikeDetail';
import Collection from './components/Collection';
import Bikes from './Pages/Bikes';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import YourCart from './Pages/YourCart';
import { CartProvider } from './CartContext';

const RouteSwitch = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:collection" element={<Collection />} />
          <Route
            path="/bikes/:collection/:bike_detail"
            element={<BikeDetail />}
          />
          <Route path="/yourcart" element={<YourCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default RouteSwitch;
