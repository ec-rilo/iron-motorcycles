import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSubtotal } from '../../data/math-logic';
import { toggleCartPopup } from '../Cart/cartToggles';

const CartPopupSubtotalBtn = (props) => {
  const { cart } = props;

  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const subTotal = getSubtotal(cart);

    setTotal(subTotal);
  }, [cart]);

  return (
    <div className="cart-popup-subtotal">
      <p className="subtotal-price">
        <span className="subtotal-title">Subtotal:</span>{' '}
        {`$${total.toString()}.00`}
      </p>
      <Link
        to="/yourcart"
        className="orange-btn subtotal-btn"
        onClick={() => toggleCartPopup()}
        style={{ textDecoration: 'none' }}
      >
        <p>Proceed to Checkout</p>
      </Link>
    </div>
  );
};

export default CartPopupSubtotalBtn;
