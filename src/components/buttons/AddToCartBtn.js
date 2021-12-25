const AddToCartBtn = (props) => {
  const { data, addToCart } = props;

  return (
    <div className="add-to-cart-btn" onClick={() => addToCart(data)}>
      <p>Add to cart</p>
    </div>
  );
};

export default AddToCartBtn;
