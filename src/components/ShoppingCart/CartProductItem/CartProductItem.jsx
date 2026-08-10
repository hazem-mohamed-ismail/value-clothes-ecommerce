import { useShoppingCart } from "../../../context/CartSystem";
import "./CartProductItem.css";

export default function CartProductItem({ product }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className="row py-3 py-md-4 align-items-center cart-product-item ">
      <div className="col-12 col-md-6 d-flex align-items-center gap-3 pb-3 pb-md-0 border-bottom-sm">
        <div className="product-img-wrapper bg-light rounded  flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-100 h-100 object-fit-cover rounded"
          />
        </div>
        <div>
          <h6 className="mb-1 fw-semibold text-dark">{product.name}</h6>
          {/* <div className="small text-secondary mb-1">
            Color: <span className="text-dark">{product.color}</span>
          </div> */}
          <button
            className="btn btn-link p-0 text-danger text-decoration-underline small border-0 fw-semibold"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="row align-items-center flex-column flex-md-row">
          <div className="col-12 col-md-4 d-flex justify-content-between justify-content-md-center align-items-center py-3 py-md-0 border-bottom-sm">
            <span className="d-md-none fw-semibold text-dark">Price</span>
            <span className="text-danger fw-semibold">
              {"$" + product.price}
            </span>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-between justify-content-md-center align-items-center py-3 py-md-0 border-bottom-sm">
            <span className="d-md-none fw-semibold text-dark">Quantity</span>
            <div className="quantity-selector d-flex align-items-center border rounded-pill px-2 py-1 shadow-sm">
              <button
                className="btn btn-link text-secondary p-0 border-0 text-decoration-none fs-5 px-2"
                onClick={() => decreaseCartQuantity(product.id)}
              >
                -
              </button>
              <input
                type="text"
                value={product.quantity}
                className="quantity-input"
                readOnly
              />
              <button
                className="btn btn-link text-secondary p-0 border-0 text-decoration-none fs-5 px-2"
                onClick={() => increaseCartQuantity(product.id)}
              >
                +
              </button>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-between justify-content-md-end align-items-center py-3 py-md-0 border-bottom-sm-last">
            <span className="d-md-none fw-semibold text-danger">
              {"$" + product.price * product.quantity}
            </span>
            <span className="d-none d-md-inline text-danger fw-semibold">
              {"$" + product.price * product.quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
