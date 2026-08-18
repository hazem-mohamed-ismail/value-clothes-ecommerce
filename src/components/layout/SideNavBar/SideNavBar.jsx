import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

export default function SideNavBar({ open, onClose }) {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={`side-navbar ${open ? "side-navbar--active" : ""}`}>
      <div className="side-navbar__backdrop" onClick={onClose} />
      <aside className="side-navbar__drawer sidebar-menu-wrapper bg-white py-4 px-3">
        <div className="sidebar-brand px-3 mb-4 d-flex align-items-center justify-content-between">
          <img
            src="/assets/logo.svg"
            alt="Amerce Logo"
            className="sidebar-logo"
          />
          <button
            type="button"
            className="btn-close"
            aria-label="Close side menu"
            onClick={onClose}
          />
        </div>

        <div className="sidebar-links-container">
          {/* Home */}
          <div className="sidebar-item-row">
            <Link
              to="/"
              id="home-link"
              className="text-decoration-none text-dark sidebar-menu-title"
              onClick={onClose}
            >
              <div className="sidebar-direct-link px-3 py-2">Home</div>
            </Link>
          </div>

          {/* Shop */}
          <div className="sidebar-item-row">
            <Link
              to="/shop-left-sidebar"
              id="shop-link"
              className="text-decoration-none text-dark sidebar-menu-title"
              onClick={onClose}
            >
              <div className="sidebar-direct-link px-3 py-2">Shop</div>
            </Link>
          </div>

          {/* Blog Submenu */}
          <div className="sidebar-item-row">
            <button
              type="button"
              className="sidebar-accordion-summary d-flex align-items-center justify-content-between"
              onClick={() => handleToggle("blog")}
              aria-expanded={!!expanded["blog"]}
            >
              <span className="sidebar-menu-title">Blog</span>
              <span
                className={`sidebar-toggle-icon ${expanded["blog"] ? "sidebar-toggle-icon--open" : ""}`}
                aria-hidden="true"
              >
                <i
                  className={`fas fa-chevron-${expanded["blog"] ? "up" : "down"}`}
                ></i>
              </span>
            </button>

            <div
              className={`sidebar-accordion-details ${expanded["blog"] ? "sidebar-accordion-details--open" : ""}`}
            >
              <ul className="list-unstyled m-0 sub-menu-list">
                <li className="sub-menu-item py-2">
                  <Link
                    to="/blog"
                    className="text-decoration-none text-muted sub-menu-link"
                    onClick={onClose}
                  >
                    All Blogs
                  </Link>
                </li>
                <li className="sub-menu-item py-2">
                  <Link
                    to="/blog-single/1"

                    className="text-decoration-none text-muted sub-menu-link"
                    onClick={onClose}
                  >
                    Blog Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Pages Submenu */}
          <div className="sidebar-item-row">
            <button
              type="button"
              className="sidebar-accordion-summary d-flex align-items-center justify-content-between"
              onClick={() => handleToggle("pages")}
              aria-expanded={!!expanded["pages"]}
            >
              <span className="sidebar-menu-title">Pages</span>
              <span
                className={`sidebar-toggle-icon ${expanded["pages"] ? "sidebar-toggle-icon--open" : ""}`}
                aria-hidden="true"
              >
                <i
                  className={`fas fa-chevron-${expanded["pages"] ? "up" : "down"}`}
                ></i>
              </span>
            </button>

            <div
              className={`sidebar-accordion-details ${expanded["pages"] ? "sidebar-accordion-details--open" : ""}`}
            >
              <ul className="list-unstyled m-0 sub-menu-list">
                <li className="sub-menu-item py-2">
                  <Link
                    to="/invoice"
                    className="text-decoration-none text-muted sub-menu-link"
                    onClick={onClose}
                  >
                    Invoice
                  </Link>
                </li>
                <li className="sub-menu-item py-2">
                  <Link
                    to="/account"
                    className="text-decoration-none text-muted sub-menu-link"
                    onClick={onClose}
                  >
                    My Account
                  </Link>
                </li>
                <li className="sub-menu-item py-2">
                  <Link
                    to="/404"
                    className="text-decoration-none text-muted sub-menu-link"
                    onClick={onClose}
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* About */}
          <div className="sidebar-item-row">
            <Link
              to="/about"
              id="about-link"
              className="text-decoration-none text-dark sidebar-menu-title"
              onClick={onClose}
            >
              <div className="sidebar-direct-link px-3 py-2">About</div>
            </Link>
          </div>

          {/* Contact */}
          <div className="sidebar-item-row">
            <Link
              to="/contact"
              id="contact-link"
              className="text-decoration-none text-dark sidebar-menu-title"
              onClick={onClose}
            >
              <div className="sidebar-direct-link px-3 py-2">Contact</div>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}