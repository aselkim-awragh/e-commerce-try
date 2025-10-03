import CartItem from "./CartItem";
function CartList({ cart }) {
  return (
    <div className="cart-list">
      {cart &&
        cart.items.map((item, index) => <CartItem itme={item} key={index} />)}
    </div>
  );
}
export default CartList;
