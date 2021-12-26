import { useEffect, useState } from 'react';
import { getSubtotal } from '../../data/math-logic';

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
      <div className="orange-btn subtotal-btn">
        <p>Proceed to Checkout</p>
      </div>
    </div>
  );
};

export default CartPopupSubtotalBtn;
