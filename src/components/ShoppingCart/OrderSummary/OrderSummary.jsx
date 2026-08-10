import { Link } from "react-router-dom";
import { useState } from "react";
import "./OrderSummary.css";
import { useShoppingCart } from "../../../context/CartSystem";
import Products from "../../../data/products.json";
export default function OrderSummary() {
  const { cartItems } = useShoppingCart();
  const [shippingPrice, setShippingPrice] = useState(0);

  const TotalPrice = cartItems.reduce((total, item) => {
    const Product = Products.find((p) => p.id === item.id);
    return total + (Product ? Product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="card border-0 p-4 rounded-4 order-summary-card">
      <h4 className="fw-semibold mb-4">Order Summary</h4>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-secondary">Subtotal</span>
        <span className="fw-semibold">${TotalPrice-shippingPrice}</span>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-secondary">Discounts</span>
        <span className="fw-semibold">$0,00</span>
      </div>

      <div className="mb-4">
        <div className="text-secondary mb-2">Shipping</div>
        <div className="d-flex flex-column gap-2">
          <label className="d-flex align-items-center justify-content-between cursor-pointer p-1">
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="shipping-option"
                className="form-check-input mt-0"
                onChange={() => setShippingPrice(0)}

                defaultChecked
              />
              <span className="small">Free Shipping</span>
            </div>
            <span className="small fw-semibold">$0,00</span>
          </label>
          <label className="d-flex align-items-center justify-content-between cursor-pointer p-1">
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="shipping-option"
                className="form-check-input mt-0"
                onChange={() => setShippingPrice(35)}
              />
              <span className="small">Local:</span>
            </div>
            <span className="small fw-semibold text-secondary">$35,00</span>
          </label>
          <label className="d-flex align-items-center justify-content-between cursor-pointer p-1">
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="shipping-option"
                className="form-check-input mt-0"
                onChange={() => setShippingPrice(35)}
              
              />
              <span className="small">Flat Rate:</span>
            </div>
            <span className="small fw-semibold text-secondary">$35,00</span>
          </label>
        </div>
      </div>

      <hr className="my-4 text-muted" />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fs-5 fw-semibold">Total</span>
        <span className="fs-4 fw-bold">${TotalPrice - shippingPrice}</span>
      </div>

      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="termsAgree" />
        <label
          className="form-check-label small text-secondary cursor-pointer"
          htmlFor="termsAgree"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-dark text-decoration-underline fw-semibold"
          >
            terms and conditions
          </a>
        </label>
      </div>

      <div className="d-flex flex-column gap-3">
        <Link
          to="/checkout"
          className="btn btn-dark w-100 py-3 rounded-pill fw-semibold shadow-sm checkout-btn text-center"
        >
          Process To Checkout
        </Link>
        <button className="btn btn-link text-dark text-decoration-underline fw-semibold w-100 py-2 border-0 continue-btn">
          Or Continue Shopping
        </button>
      </div>
    </div>
  );
}
