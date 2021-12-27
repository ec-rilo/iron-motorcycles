import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const AddToCartBtn = (props) => {
  const { addToCart } = useContext(CartContext);
  const { data } = props;

  return (
    <div className="add-to-cart-btn" onClick={() => addToCart(data)}>
      <p>Add to cart</p>
    </div>
  );
};

export default AddToCartBtn;
