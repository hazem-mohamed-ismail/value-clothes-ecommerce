import { useShoppingCart } from "../../context/CartSystem";
import CheckOutCartItem from "./CheckOutCartItem";
import Products from '../../data/Products';

export default function CheckoutSummary() {
  const { cartItems } = useShoppingCart();
  const filteredCartItems = cartItems.map((cartItem) => {
    const product = Products.find((p) => p.id === cartItem.id);
    return { ...product, quantity: cartItem.quantity };
  });

  const subTotal=filteredCartItems.reduce((total,item)=>{
    return total+(item.price*item.quantity)
  },0)

  return (
    <div
      className="col-lg-5 ps-lg-5 position-sticky"
      style={{ top: "100px" }}
    >
      <h2 className="h4 text-dark fw-normal mb-3">Shopping Cart</h2>

      {filteredCartItems.length === 0 ? (
        <p className="text-muted small mb-4">Your cart is empty</p>
      ) : (
        <div className="d-flex flex-column gap-3 mb-4">
          {filteredCartItems.map((item) => (
            <CheckOutCartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <hr className="text-black-50 my-4" />

      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          className="form-control py-2 text-dark border-light-subtle"
          placeholder="Add voucher discount"
        />
        <button className="btn btn-dark rounded-pill px-4 text-nowrap">
          Apply Code
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center fs-6 text-dark">
          <span>Shipping</span>
          <span className="text-muted small">Free</span>
        </div>
        <div className="d-flex justify-content-between align-items-center fs-6 text-dark">
          <span>Discounts</span>
          <span>$0,00</span>
        </div>

        <hr className="text-black-50 my-2" />

        <div className="d-flex justify-content-between align-items-center text-dark">
          <span className="fs-5">Total</span>
          <span className="fs-3 fw-normal"><span className="text-success">$ </span>{subTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}