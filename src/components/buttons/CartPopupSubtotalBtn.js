import { useEffect, useState } from 'react';

const CartPopupSubtotalBtn = (props) => {
  const { cart } = props;

  const [total, setTotal] = useState(0.0);

  /* 'n' is the number you wanted rounded
   * 'digits' is the number of digits you want rounded to
   */
  const roundTo = (n, digits) => {
    var negative = false;
    if (digits === undefined) {
      digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.round(n) / multiplicator).toFixed(digits);
    if (negative) {
      n = (n * -1).toFixed(digits);
    }
    return n;
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  useEffect(() => {
    let newTotal = 0.0;

    cart.forEach((bike) => {
      let price = bike.price;
      price = price.replace(',', '');
      price = roundTo(price, 2);
      price = parseFloat(price);
      price = price * bike.qty;

      newTotal += price;
    });

    newTotal = numberWithCommas(newTotal);

    setTotal(newTotal);
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
