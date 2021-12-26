import Navbar from '../components/Navbar';
import { getSubtotal } from '../data/math-logic';
import uniqid from 'uniqid';
import { useMediaQuery } from 'react-responsive';

const YourCart = (props) => {
  const { cart, addToCart, removeFromCart, clearCart } = props;

  const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

  return (
    <div className="your-cart-page">
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <div className="your-cart-content">
        <div className="your-cart-display">
          <p className="title">Your Cart</p>
          {cart.length === 0 ? (
            ''
          ) : (
            <div className="display-description">
              <p>Item Description</p>
              <p>Subtotal</p>
            </div>
          )}
          {cart.length === 0 ? (
            <p className="cart-empty-text">Your cart is empty</p>
          ) : (
            <div className="cart-popup-items-container cart-empty-items-container">
              {cart.map((bike) => {
                return (
                  <div key={uniqid()} className="your-cart-item-container">
                    <div key={uniqid()} className="cart-popup-item">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        className="cart-popup-bike-img"
                      />
                      <div className="cart-popup-item-content">
                        <p className="cart-popup-title">{bike.type}</p>
                        <p className="cart-popup-name">{bike.name}</p>
                        <div className="cart-popup-qty-container">
                          <p
                            onClick={() => removeFromCart(bike)}
                            className="cart-popup-op cart-popup-increment-op"
                          >
                            –
                          </p>
                          <div className="cart-popup-qty">
                            <p>{bike.qty}</p>
                          </div>
                          <p
                            onClick={() => addToCart(bike)}
                            className="cart-popup-op cart-popup-decrement-op"
                          >
                            +
                          </p>
                        </div>
                        {isMobile ? (
                          <p
                            style={{ display: 'block' }}
                            className="cart-popup-price"
                          >{`$${bike.price}.00`}</p>
                        ) : (
                          <p
                            style={{ display: 'none' }}
                            className="cart-popup-price"
                          >{`$${bike.price}.00`}</p>
                        )}
                      </div>
                    </div>
                    <p className="your-cart-subtotal">${bike.price}.00</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="your-cart-order-summary">
          <p className="title">Order Summary</p>
          <div className="costs">
            <p>Subtotal: ${cart.length === 0 ? '0' : getSubtotal(cart)}.00</p>
            <p>Shipping: Free</p>
          </div>
          <div className="separation-line"></div>
          <p className="total">
            <span style={{ fontFamily: 'var(--secondary-fnt)' }}>Total:</span> $
            {cart.length === 0 ? '0' : getSubtotal(cart)}.00
          </p>
          <div className="checkout-btn-container">
            <div
              className="orange-btn"
              onClick={() => {
                clearCart();
                alert(
                  'Thank you for shopping with Iron Motorcycles! Your purchase has been made successfully.'
                );
              }}
            >
              <p>Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
