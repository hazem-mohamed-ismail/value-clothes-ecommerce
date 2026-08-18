import { useShoppingCart } from "../../context/CartSystem";
import "./CheckOutCartItem.css";

export default function CheckOutCartItem({ item }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = item.quantity || 1;
  const totalPrice = (item.price || 0) * quantity;

  return (
    <div className="checkout-cart-item">
      <div className="cart-item-image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="cart-item-image"
        />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>

        <p className="cart-item-color">
          Color: <span className="color-value">{item.color}</span>
        </p>
    
        <div className="cart-item-quantity-pill">
          <button
            className="quantity-btn"
            aria-label="Decrease quantity"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            &#8722;
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-btn"
            aria-label="Increase quantity"
            onClick={() => increaseCartQuantity(item.id)}
          >
            &#43;
          </button>
        </div>

        <button
          className="cart-item-remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>

      <div className="cart-item-price">${totalPrice.toFixed(2)}</div>
    </div>
  );
}