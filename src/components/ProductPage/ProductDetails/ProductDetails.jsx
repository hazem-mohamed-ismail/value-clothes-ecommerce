import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

import visaIcon from "../../../assets/footer/payments/visa.svg";
import masterCardIcon from "../../../assets/footer/payments/master-card.svg";
import paypalIcon from "../../../assets/footer/payments/paypal.svg";
import discoverIcon from "../../../assets/footer/payments/discover.svg";
import { useShoppingCart } from "../../../context/CartSystem";
import { useWishlist } from "../../../context/WishlistSystem";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("black");

  if (!product) return null;

  const quantity = getItemsQuantity(product.id);
  const rating = Number(product.rating?.rate || 0);
  const reviewCount = product.rating?.count || 0;
  const price = Number(product.price || 0);
  const displayPrice = `$${price.toFixed(2)}`;
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleBuyNow = () => {
    if (quantity === 0) {
      increaseCartQuantity(product.id);
    }
    navigate("/checkout");
  };

  return (
    <div className="product-details-container p-2 text-start my-4" dir="ltr">
      <span className="text-muted small d-block mb-1 text-uppercase tracking-wide">
        {product.category}
      </span>
      <h1 className="fw-bold h2 text-dark mb-2">{product.title}</h1>

      <div className="d-flex align-items-center flex-wrap gap-2 mb-3 small text-muted">
        <span className="text-warning fs-6">
          {"★".repeat(Math.round(rating))}
        </span>
        <span className="border-end pe-2">({reviewCount} reviews)</span>
        <span className="text-danger fw-medium border-end pe-2 my-auto">
          ⚡ 24 sold in last 32 hours
        </span>
        <span>
          SKU: <span className="text-dark">{product.id}</span>
        </span>
      </div>

      <div className="d-flex align-items-center gap-3 mb-3">
        <span className="fs-3 fw-bold text-dark">{displayPrice}</span>
      </div>

      <button
        type="button"
        className={`btn ${
          isInWishlist(product.id) ? "btn-danger" : "btn-outline-danger"
        } rounded-pill mb-3 transition-all`}
        onClick={() => toggleWishlist(product.id)}
      >
        <i className={`${isInWishlist(product.id) ? "fas" : "far"} fa-heart me-2`}></i>
        {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
      </button>

      <p className="text-muted small lh-base mb-3">{product.description}</p>

      <div className="d-flex align-items-center gap-2 mb-4 small text-muted">
        <span className="fs-6">
          <i className="fa-solid fa-eye"></i>
        </span>
        <span>
          <strong className="text-dark">28</strong> people are viewing this
          right now
        </span>
      </div>

      <hr className="text-muted opacity-25 my-3" />

      <div className="mb-4">
        <label className="fw-semibold text-dark d-block mb-2">
          Colors: <span className="text-muted fw-normal text-capitalize">{selectedColor}</span>
        </label>
        <div className="d-flex gap-3">
          <button
            className={`btn color-variant-btn color-red p-0 ${
              selectedColor === "red" ? "active" : ""
            }`}
            onClick={() => setSelectedColor("red")}
            title="Red"
          ></button>
          <button
            className={`btn color-variant-btn color-blue p-0 ${
              selectedColor === "blue" ? "active" : ""
            }`}
            onClick={() => setSelectedColor("blue")}
            title="Blue"
          ></button>
          <button
            className={`btn color-variant-btn color-black p-0 ${
              selectedColor === "black" ? "active" : ""
            }`}
            onClick={() => setSelectedColor("black")}
            title="Black"
          ></button>
        </div>
      </div>

      {/* Dynamic Size Selection */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="fw-semibold text-dark">
            Size: <span className="text-muted fw-normal">{selectedSize}</span>
          </label>
          <a
            href="#size-guide"
            className="size-btn text-dark text-decoration-underline small fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#sizeChartModal"
          >
            Size Guide
          </a>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              className={`btn size-selection-btn ${
                selectedSize === size
                  ? "bg-dark text-white fw-bold"
                  : "btn-outline-secondary text-dark"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Cart & Purchase Section */}
      <div className="mb-4">
        <label className="fw-semibold text-dark d-block mb-2">Quantity:</label>
        <div className="row g-2 align-items-center mb-2">
          <div className="col-12 col-sm-4">
            <div className="quantity-selector d-flex justify-content-between align-items-center border rounded px-3 py-2">
              <button
                className="btn btn-link text-decoration-none text-dark p-0 handle-quantity"
                onClick={() => decreaseCartQuantity(product.id)}
                disabled={quantity === 0}
              >
                —
              </button>
              <span className="fw-semibold text-dark fs-6">{quantity}</span>
              <button
                className="btn btn-link text-decoration-none text-dark p-0 handle-quantity"
                onClick={() => increaseCartQuantity(product.id)}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <button
              className="btn btn-dark w-100 rounded-pill py-2 fw-semibold tracking-wide "
              onClick={() => increaseCartQuantity(product.id)}
            >
              {quantity === 0
                ? "Add to Cart"
                : `Add More $${(price * (quantity )).toFixed(2)}`}
            </button>
          </div>
        </div>
        <button
          className="btn btn-buy-now w-100 rounded-pill py-3 fw-semibold text-white"
          onClick={handleBuyNow}
        >
          Buy It Now
        </button>
      </div>

      <div className="d-flex flex-wrap gap-4 text-muted small border-bottom pb-3 mb-3">
        <span className="action-link role-button" style={{ cursor: "pointer" }}>
          ⇄ Compare
        </span>
        <span className="action-link role-button" style={{ cursor: "pointer" }}>
          ? Ask A Question
        </span>
        <span
          className="action-link role-button"
          style={{ cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target="#sizeChartModal"
        >
          Size Guide
        </span>
        <span className="action-link role-button" style={{ cursor: "pointer" }}>
          🔗 Share
        </span>
      </div>

      <div className="small text-muted mb-4 lh-base">
        <div className="mb-2">
          <i className="fa-solid fa-clock me-2"></i>Estimated Delivery:{" "}
          <strong className="text-dark">12-26 Days</strong> (International),{" "}
          <strong className="text-dark">3-6 Days</strong> (United States)
        </div>
        <div>
          <i className="fa-solid fa-rotate-left me-2"></i>Return within{" "}
          <strong className="text-dark">45 Days</strong> of purchase. Duties &
          taxes are non-refundable.
        </div>
      </div>

      <div className="secure-checkout-card text-center p-3 rounded">
        <span className="d-block text-muted small fw-semibold mb-3">
          Guaranteed Safe Checkout:
        </span>
        <div className="d-flex justify-content-center flex-wrap gap-2">
          <span className="payment-icon-wrapper">
            <img src={visaIcon} alt="VISA" className="payment-icon" />
          </span>
          <span className="payment-icon-wrapper">
            <img src={masterCardIcon} alt="MasterCard" className="payment-icon" />
          </span>
          <span className="payment-icon-wrapper">
            <img src={paypalIcon} alt="PayPal" className="payment-icon" />
          </span>
          <span className="payment-icon-wrapper">
            <img src={discoverIcon} alt="Discover" className="payment-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;