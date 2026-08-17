import "./MainNavigation.css";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/CartSystem";
import { useWishlist } from "../../../context/WishlistSystem";
import logo from "../../../assets/logo.svg";

export default function MainNav({ onSidebarToggle }) {
  const { cartItems } = useShoppingCart();
  const { wishlistItems } = useWishlist();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  return (
    <nav className=" bg-lig navbar navbar-expand-lg bg-white  py-3 main-navigation">
      <div className="container-fluid d-flex align-items-center position-relative">
        <div className="d-flex align-items-center flex-grow-1">
          <button
            className="navbar-toggler border-0 shadow-none me-2"
            type="button"
            onClick={onSidebarToggle}
            aria-label="Toggle side navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item position-relative main-navigation__dropdown-item">
                <Link className="nav-link" to="/shop-left-sidebar">
                  Shop
                </Link>
              </li>

              <li className="nav-item nav-link cursor-pointer position-relative main-navigation__dropdown-item">
                Blog <i className="fas fa-chevron-down"></i>
                <div className="main-navigation__dropdown-menu">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/blog" className="dropdown-item">
                        All Blogs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/blog-single/1">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item nav-link cursor-pointer position-relative main-navigation__dropdown-item">
                Pages <i className="fas fa-chevron-down"></i>
                <div className="main-navigation__dropdown-menu">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <Link to="/invoice" className="dropdown-item">
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/account">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/checkout">
                        Check Out
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/shopping-cart">
                        Shopping Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/404">
                        404
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          className="navbar-brand position-absolute top-50 start-50 translate-middle"
          to="/"
        >
          <img
            src={logo}
            alt="Amerce Logo"
            style={{ height: "24px" }}
          />
        </Link>

        <div className="d-flex align-items-center gap-3 justify-content-end flex-grow-1">
          <Link to="/account" className="text-dark">
            <i className="bi bi-person"></i>
          </Link>
          <Link to="/wishlist" className="text-dark position-relative">
            <i className="bi bi-heart"></i>
            {wishlistCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  padding: 0,
                  backgroundColor: "#dc3545",
                  color: "#fff",
                }}
              >
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/shopping-cart" className="text-dark position-relative">
            <i className="bi bi-handbag"></i>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "18px",
                height: "18px",
                fontSize: "10px",
                padding: 0,
                backgroundColor: "#dc3545",
                color: "#fff",
              }}
            >
              {totalQuantity > 0 ? totalQuantity : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
