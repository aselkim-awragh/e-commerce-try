function CartItem({ item }) {
  const handleRemove = () => {};
  return (
    <div className="cart-item">
      <img src={item.image} alt="" className="cart-item-image" />
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">{item.price}</span>
      <span className="cart-item-quantity">{item.quantity}</span>
      <input
        className="remove-btn"
        type="button"
        value="X"
        onClick={handleRemove}
      />
    </div>
  );
}

export default CartItem;
