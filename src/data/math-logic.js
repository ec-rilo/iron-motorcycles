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

function getSubtotal(cart) {
  let subTotal = 0.0;

  cart.forEach((bike) => {
    let price = bike.price;
    price = price.replace(',', '');
    price = roundTo(price, 2);
    price = parseFloat(price);
    price = price * bike.qty;

    subTotal += price;
    subTotal = numberWithCommas(subTotal);
  });

  return subTotal;
}

export { getSubtotal, numberWithCommas, roundTo };
