import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BikeDetail from './components/BikeDetail';
import Collection from './components/Collection';
import Bikes from './Pages/Bikes';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (bike) => {
    const item = {
      type: bike.type,
      name: bike.name,
      price: bike.price,
      image: bike.image,
    };

    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route
          path="/contact"
          element={<Contact cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/bikes"
          element={<Bikes cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/bikes/:collection"
          element={<Collection cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/bikes/:collection/:bike_detail"
          element={<BikeDetail cart={cart} addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
