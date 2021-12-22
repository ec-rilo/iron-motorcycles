import cartSrc from '../images/cart-white.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <p className="logo-small">IRON MOTORCYCLES</p>
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
            <img className="img-small" src={cartSrc} alt="Shopping Cart" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
