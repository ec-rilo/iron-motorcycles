import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BikeDetail from './components/BikeDetail';
import Collection from './components/Collection';
import Bikes from './Pages/Bikes';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const RouteSwitch = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const addToCart = (bike) => {
    const newCart = [...cart];

    const item = {
      type: bike.type,
      name: bike.name,
      price: bike.price,
      image: bike.image,
      qty: 1,
    };

    let isNew = true;

    newCart.forEach((currBike) => {
      if (currBike.type === bike.type && currBike.name === bike.name) {
        currBike.qty += 1;
        isNew = false;
      }
    });

    if (isNew) {
      newCart.push(item);
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (bike) => {
    const newCart = [...cart];

    newCart.forEach((currBike, index) => {
      if (currBike.type === bike.type && currBike.name === bike.name) {
        currBike.qty -= 1;
        if (currBike.qty === 0) {
          newCart.splice(index, 1);
        }
      }
    });

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/bikes"
          element={
            <Bikes
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/bikes/:collection"
          element={
            <Collection
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/bikes/:collection/:bike_detail"
          element={
            <BikeDetail
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
