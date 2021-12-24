import cartSrc from '../../images/cart-white.png';

const Cart = () => {
  const toggleCartPopup = () => {
    const fadedBg = document.querySelector('.faded-bg');
    fadedBg.classList.toggle('faded-bg-active');
    const cartPopup = document.querySelector('.cart-popup-container');
    cartPopup.classList.toggle('cart-popup-active');
  };

  return (
    <div className="nav-cart-container" onClick={() => toggleCartPopup()}>
      <div className="cart-bubble">
        <p>15</p>
      </div>
      <img className="img-small" src={cartSrc} alt="Shopping Cart" />
    </div>
  );
};

export default Cart;
