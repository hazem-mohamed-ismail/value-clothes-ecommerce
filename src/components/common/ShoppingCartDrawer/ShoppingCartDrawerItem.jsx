import { useShoppingCart } from "../../../context/CartSystem";

export default function ShoppingCartDrawerItem({ item }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className="cart-items-list">
      <div
        key={item.id}
        className="cart-item d-flex align-items-center py-3 border-bottom position-relative"
      >
        <img
          src={item.image}
          alt={item.name}
          className="item-img rounded-3 me-3"
        />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <h6 className="mb-1 text-truncate" style={{ maxWidth: "140px" }}>
              {item.name}
            </h6>
            <button
              className="btn p-0 text-danger remove-btn text-decoration-underline border-0"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Remove
            </button>
          </div>
          <p className="text-muted small mb-2">
            Color: <span className="text-dark">{item.color}</span>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="quantity-control d-flex align-items-center border rounded-pill px-2">
              <button
                className="btn btn-sm p-0 border-0"
                onClick={() => {
                  decreaseCartQuantity(item.id);
                }}
              >
                &minus;
              </button>
              <span className="px-2 small fw-bold">{item.quantity}</span>
              <button
                className="btn btn-sm p-0 border-0"
                onClick={() => {
                  increaseCartQuantity(item.id);
                }}
              >
                &#43;
              </button>
            </div>
            <span className="fw-bold fs-6">
              {item.quantity} x ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
