import cartSrc from '../images/cart-white.png';

const Navbar = () => {
  return (
    <nav>
      <p className="logo-small">IRON MOTORCYCLES</p>
      <ul class="nav-items">
        <li>HOME</li>
        <li>BIKES</li>
        <li>CONTACT</li>
        <li>
          <img className="img-small" src={cartSrc} alt="Shopping Cart" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
