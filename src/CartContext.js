import { createContext, useState } from 'react';

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const CartContext = createContext();

const CartProvider = (props) => {
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

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
