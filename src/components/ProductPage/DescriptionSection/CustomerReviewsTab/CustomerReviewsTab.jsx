import "./CustomerReviewsTab.css";

export default function CustomerReviewsTab() {
  return (
    <div className="description-panel customer-reviews-panel">
      <div className="review-summary">
        <strong>4.8</strong>
        <span>/ 5</span>
        <p>Based on 1,968 customer ratings</p>
      </div>

      <div className="review-breakdown">
        <div className="review-row">
          <span>5 stars</span>
          <div className="review-bar five-star" />
          <span>60%</span>
        </div>
        <div className="review-row">
          <span>4 stars</span>
          <div className="review-bar four-star" />
          <span>20%</span>
        </div>
        <div className="review-row">
          <span>3 stars</span>
          <div className="review-bar three-star" />
          <span>10%</span>
        </div>
        <div className="review-row">
          <span>2 stars</span>
          <div className="review-bar two-star" />
          <span>7%</span>
        </div>
        <div className="review-row">
          <span>1 star</span>
          <div className="review-bar one-star" />
          <span>3%</span>
        </div>
      </div>
    </div>
  );
}
