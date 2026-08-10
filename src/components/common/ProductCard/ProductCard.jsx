import "./ProductCard.css";
import { useShowSideNavCart } from "../../../context/SideNavCart";
import { useShoppingCart } from "../../../context/CartSystem";
import { useWishlist } from "../../../context/WishlistSystem";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, className = "" }) {
  const navigate = useNavigate();
  const { setShow } = useShowSideNavCart();
  const { increaseCartQuantity } = useShoppingCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  if (!product) return null;

  const Stars = [...Array(product.rating)].map((_, index) => (
    <span key={index} className="star">
      <i className="fa-solid fa-star"></i>
    </span>
  ));

  return (
    <div className={` product-card ${className}`}>
      <div className="image-container">
        <div className="badges">
          {product.discount && (
            <span className="badge badge-discount">-{product.discount}%</span>
          )}
          {product.trend && <span className="badge badge-trend">TREND</span>}
        </div>

        <div className="action-buttons">
          <button
            className="action-btn"
            aria-label="Toggle wishlist"
            onClick={() => toggleWishlist(product.id)}
          >
            <i
              className={
                isInWishlist(product.id)
                  ? "fas fa-heart"
                  : "far fa-heart"
              }
            ></i>
          </button>
          
          {/* <button className="action-btn" aria-label="Quick view">
            <i className="fa-regular fa-eye"></i>
          </button> */}

        </div>

        <img
          src={product.image}
          alt={product.name}
          className="product-image cursor-pointer"
          onClick={() => {
            navigate("/product");
          }}
        />

        <button
          className="quick-add-btn mb-1"
          onClick={() => {
            setShow(true);
            increaseCartQuantity(product.id);
          }}
        >
          Quick Add
        </button>
      </div>

      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>

        <div className="rating">{Stars}</div>

        <div className="price-container">
          <span className="current-price">${product.price}</span>
          <span className="original-price">${product.originalPrice}</span>
        </div>

        {/* Color choices are disabled until product variants are connected
        <div className="color-options">
          <button
            className="color-dot color-olive"
            aria-label="Olive Green"
          ></button>
          <button
            className="color-dot color-navy"
            aria-label="Navy Blue"
          ></button>
          <button
            className="color-dot color-beige active"
            aria-label="Beige"
          ></button>
        </div> */}
      </div>
    </div>
  );
}
