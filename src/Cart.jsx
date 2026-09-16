import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart({ cart, onUpdateQuantity }) {
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">Your order</p>
          <h2>Shopping Cart</h2>
        </div>

        <span className="cart-count">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span aria-hidden="true">🛒</span>
          <p>Your cart is empty.</p>
          <small>Add a plant to get started.</small>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}