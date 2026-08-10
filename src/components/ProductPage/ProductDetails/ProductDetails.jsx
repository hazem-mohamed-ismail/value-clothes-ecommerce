import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

import visaIcon from "../../../assets/footer/payments/visa.svg";
import masterCardIcon from "../../../assets/footer/payments/master-card.svg";
import paypalIcon from "../../../assets/footer/payments/paypal.svg";
import discoverIcon from "../../../assets/footer/payments/discover.svg";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="product-details-container p-2 text-start my-4" dir="ltr">
      <span className="text-muted small d-block mb-1 text-uppercase tracking-wide">
        Clothing
      </span>
      <h1 className="fw-bold h2 text-dark mb-2">Linen Slim-Fit Shirt</h1>

      <div className="d-flex align-items-center flex-wrap gap-2 mb-3 small text-muted">
        <span className="text-warning fs-6">★★★★★</span>
        <span className="border-end pe-2">(134 reviews)</span>
        <span className="text-danger fw-medium border-end pe-2">
          ⚡ 18 sold in last 32 hours
        </span>
        <span>
          SKU: <span className="text-dark">53453412</span>
        </span>
      </div>

      <div className="d-flex align-items-center gap-3 mb-3">
        <span className="fs-3 fw-bold text-dark">$45.99</span>
        <span className="text-muted text-decoration-line-through fs-5">
          $79.99
        </span>
        <span className="badge bg-danger rounded-pill px-2 py-1 small">
          -43%
        </span>
      </div>

      <button type="button" className="btn btn-outline-danger rounded-pill mb-3">
        <i className="far fa-heart me-2"></i>
        Add to Wishlist
      </button>

      <p className="text-muted small lh-base mb-3">
        The garments labelled as Committed are products that have been produced
        using sustainable fibres or processes, reducing their environmental
        impact.
      </p>

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

      {/* <div className="mb-4">
        <label className="fw-semibold text-dark d-block mb-2">
          Colors: <span className="text-muted fw-normal">Black</span>
        </label>
        <div className="d-flex gap-2">
          <button className="btn color-variant-btn p-0">
            <img src={color1} alt="Green" className="img-fluid" />
          </button>
          <button className="btn color-variant-btn p-0">
            <img src={color2} alt="Grey" className="img-fluid " />
          </button>
          <button className="btn color-variant-btn p-0 active">
            <img src={color3} alt="Black" className="img-fluid " />
          </button>
        </div>
      </div> */}

      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="fw-semibold text-dark">
            Size: <span className="text-muted fw-normal">L</span>
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
          <button className="btn size-selection-btn btn-outline-secondary text-dark">
            S
          </button>
          <button className="btn size-selection-btn btn-outline-secondary text-dark">
            M
          </button>
          <button className="btn size-selection-btn bg-dark text-white fw-bold">
            L
          </button>
          <button className="btn size-selection-btn btn-outline-secondary text-dark">
            XL
          </button>
          <button className="btn size-selection-btn btn-outline-secondary text-dark">
            XXL
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="fw-semibold text-dark d-block mb-2">Quantity:</label>
        <div className="row g-2 align-items-center">
          <div className="col-4 col-sm-3">
            <div className="quantity-selector d-flex justify-content-between align-items-center border rounded px-2 py-2">
              <button className="btn btn-link text-decoration-none text-dark p-0 fw-bold">
                —
              </button>
              <span className="fw-semibold text-dark">1</span>
              <button className="btn btn-link text-decoration-none text-dark p-0 fw-bold">
                +
              </button>
            </div>
          </div>
          <div className="col-8 col-sm-9">
            <button className="btn btn-dark w-100 rounded-pill py-2 fw-semibold tracking-wide">
              Add To Cart - $45.99
            </button>
          </div>
        </div>
        <button className="btn btn-buy-now w-100 rounded-pill py-3 fw-semibold mt-2 text-white" onClick={()=>{
          navigate('/checkout')
        }}>
          Buy It Now
        </button>
      </div>

      <div className="d-flex flex-wrap gap-4 text-muted small border-bottom pb-3 mb-3">
        <span className="action-link">⇄ Compare</span>
        <span className="action-link">? Ask A Question</span>
        <span
          className="action-link"
          data-bs-toggle="modal"
          data-bs-target="#sizeChartModal"
        >
          Size Guide
        </span>
        <span className="action-link">🔗 Share</span>
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
          <span className="payment-icon-wrapper ">
            <img src={visaIcon} alt="VISA" className="payment-icon" />
          </span>
          <span className="payment-icon-wrapper ">
            <img
              src={masterCardIcon}
              alt="MasterCard"
              className="payment-icon"
            />
          </span>
          <span className="payment-icon-wrapper ">
            <img src={paypalIcon} alt="PayPal" className="payment-icon" />
          </span>
          <span className="payment-icon-wrapper ">
            <img src={discoverIcon} alt="Discover" className="payment-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
