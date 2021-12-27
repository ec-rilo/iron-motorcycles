import cartSrc from '../../images/cart-white.png';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const toggleCartPopup = () => {
    const fadedBg = document.querySelector('.faded-bg');
    fadedBg.classList.toggle('faded-bg-active');
    const cartPopup = document.querySelector('.cart-popup-container');
    cartPopup.classList.toggle('cart-popup-active');
  };

  return (
    <div className="nav-cart-container" onClick={() => toggleCartPopup()}>
      <div
        style={cart.length === 0 ? { display: 'none' } : { display: 'flex' }}
        className="cart-bubble"
      >
        <p>{cart.length}</p>
      </div>
      <img className="img-small" src={cartSrc} alt="Shopping Cart" />
    </div>
  );
};

export default Cart;
