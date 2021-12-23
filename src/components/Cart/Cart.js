import cartSrc from '../../images/cart-white.png';

const Cart = () => {
  return (
    <div className="nav-cart-container">
      <div className="cart-bubble">
        <p>15</p>
      </div>
      <img className="img-small" src={cartSrc} alt="Shopping Cart" />
    </div>
  );
};

export default Cart;
