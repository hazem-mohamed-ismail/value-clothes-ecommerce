import "./ReviewCard.css";
import reviews from "../../../data/testimonials.json";

const renderReviews = reviews.map((review) => {
  return (
    <div className="col-lg-6 col-md-12" key={review.id}>
      <div className="review-card h-100">
        <div className="row g-4 align-items-center">
          <div className="col-sm-6">
            <div className="img-review h-100">
              <img
                src={review.userImage}
                className="img-fluid h-100"
                alt={review.name}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <div className="stars mb-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="review-name d-flex flex-wrap align-items-center gap-2 mb-2">
                  <h3>{review.name}</h3>
                  {review.verified && (
                    <div className="verify d-flex align-items-center text-success">
                      <i className="fa-solid fa-circle-check me-1"></i>
                      <span>Verified Buyer</span>
                    </div>
                  )}
                </div>

                <p className="review-text">"{review.reviewText}"</p>
              </div>

              <div>
                <hr className="my-3 text-muted" />

                <div className="review-product-card">
                  <img
                    className="review-product-image"
                    src={review.product.image}
                    alt={review.product.name}
                  />
                  <div className="review-product-info">
                    <h4>{review.product.name}</h4>
                    <span className="review-product-price">
                      {review.product.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default function ReviewCard() {
  return (
    <section className="review-section mb-3 mt-5">
      <div className="container">
        <div className="review-title mb-1 text-center">
          <h1>Customer Say!</h1>
          <p>
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <div className="row g-5">{renderReviews}</div>
      </div>
    </section>
  );
}

