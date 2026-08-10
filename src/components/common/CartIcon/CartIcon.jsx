import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/CartSystem";

export default function CartIcon() {
  const { cartItems } = useShoppingCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/shopping-cart" className="text-dark position-relative">
      <i className="bi bi-handbag"></i>
      {totalQuantity > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "18px",
            height: "18px",
            fontSize: "10px",
            padding: 0,
            backgroundColor: "#dc3545",
            color: "#fff",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
