import cartSrc from '../images/cart-white.png';

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <p className="logo-small">IRON MOTORCYCLES</p>
        <ul className="nav-items">
          <li>HOME</li>
          <li>BIKES</li>
          <li>CONTACT</li>
          <li>
            <img className="img-small" src={cartSrc} alt="Shopping Cart" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
