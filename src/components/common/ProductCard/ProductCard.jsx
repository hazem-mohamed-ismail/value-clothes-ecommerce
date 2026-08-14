import "./ProductCard.css";
import { useShowSideNavCart } from "../../../context/SideNavCart";
import { useShoppingCart } from "../../../context/CartSystem";
import { useWishlist } from "../../../context/WishlistSystem";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, className = "" }) {
  const navigate = useNavigate();
  const { setShow } = useShowSideNavCart();
  const { increaseCartQuantity, getItemsQuantity } = useShoppingCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const ratingCount = Math.round(product.rating?.rate || 0);
  const Stars = [...Array(ratingCount)].map((_, index) => (
    <span key={index} className="star">
      <i className="fa-solid fa-star"></i>
    </span>
  ));

  return (
    <div className={`product-card ${className}`}>
      <div className="image-container">
        {/* Badges */}
        <div className="badges">
          {product.category && (
            <span className="badge badge-trend">{product.category}</span>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="action-buttons">
          <button
            className="action-btn"
            aria-label="Toggle wishlist"
            onClick={() => toggleWishlist(product.id)}
          >
            <i
              className={
                isInWishlist(product.id)
                  ? "fas fa-heart text-red-500"
                  : "far fa-heart"
              }
            ></i>
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image product-image-primary cursor-pointer"
          onClick={() => {
            navigate(`/product`);
          }}
        />

        {/* Quick Add Button */}
        <button
          className="quick-add-btn mb-1"
          onClick={() => {
            setShow(true);
            if (getItemsQuantity(product.id) === 0) {
              increaseCartQuantity(product.id);
            }
          }}
        >
          {getItemsQuantity(product.id) > 0 ? "Update Cart" : "Quick Add"}
        </button>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>

        <div className="rating">{Stars}</div>

        <div className="price-container">
          <span className="current-price">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
