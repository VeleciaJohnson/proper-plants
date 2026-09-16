export default function CartItem({ cartItem, onUpdateQuantity }) {
  function decreaseQuantity() {
    onUpdateQuantity(cartItem.id, -1);
  }

  function increaseQuantity() {
    onUpdateQuantity(cartItem.id, 1);
  }

  return (
    <article className="cart-item">
      <div className="cart-item-image" aria-hidden="true">
        {cartItem.image}
      </div>

      <div className="cart-item-details">
        <h3>{cartItem.name}</h3>

        <div className="quantity-controls">
          <button
            type="button"
            aria-label={`Decrease ${cartItem.name} quantity`}
            onClick={decreaseQuantity}
          >
            −
          </button>

          <span aria-label={`${cartItem.quantity} ${cartItem.name}`}>
            {cartItem.quantity}
          </span>

          <button
            type="button"
            aria-label={`Increase ${cartItem.name} quantity`}
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}