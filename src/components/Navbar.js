import Cart from './Cart/Cart.js';
import { Link } from 'react-router-dom';
import CartPopup from './Cart/CartPopup.js';

const Navbar = (props) => {
  const { cart, addToCart } = props;

  return (
    <div className="container">
      <CartPopup cart={cart} addToCart={addToCart} />
      <nav>
        <Link
          style={{ textDecoration: 'none', color: 'var(--secondary-clr)' }}
          to="/"
        >
          <p className="logo-small">IRON MOTORCYCLES</p>
        </Link>
        <ul className="nav-items">
          <li>
            <Link
              style={{ textDecoration: 'none', color: 'var(--secondary-clr)' }}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none', color: 'var(--secondary-clr)' }}
              to="/bikes"
            >
              BIKES
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none', color: 'var(--secondary-clr)' }}
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Cart cart={cart} addToCart={addToCart} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
