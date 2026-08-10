import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

const menuData = [
  {
    id: "home",
    title: "Home",
    path: "/",
    hasSubmenu: false,
  },
  {
    id: "shop",
    title: "Shop",
    path: "/shop-left-sidebar",
    hasSubmenu: false,
  },
  {
    id: "blog",
    title: "Blog",
    hasSubmenu: true,
    subMenuItems: [
      { label: "All Blogs", path: "/blog" },
      { label: "Blog Details", path: "/blog-single" },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    hasSubmenu: true,
    subMenuItems: [
      { label: "Invoice", path: "/invoice" },
      { label: "My Account", path: "/account" },
      { label: "404", path: "/404" },
    ],
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    hasSubmenu: false,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    hasSubmenu: false,
  },
];

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
            src="src/assets/logo.svg"
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
          {menuData.map((item) => (
            <div key={item.id} className="sidebar-item-row">
              {item.hasSubmenu ? (
                <>
                  <button
                    type="button"
                    className={`sidebar-accordion-summary d-flex align-items-center justify-content-between`}
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={!!expanded[item.id]}
                  >
                    <span className="sidebar-menu-title">{item.title}</span>
                    <span
                      className={`sidebar-toggle-icon ${expanded[item.id] ? "sidebar-toggle-icon--open" : ""}`}
                      aria-hidden="true"
                    >
                      <i
                        className={`fas fa-chevron-${expanded[item.id] ? "up" : "down"}`}
                      ></i>
                    </span>
                  </button>

                  <div
                    className={`sidebar-accordion-details ${expanded[item.id] ? "sidebar-accordion-details--open" : ""}`}
                  >
                    <ul className="list-unstyled m-0 sub-menu-list">
                      {item.subMenuItems.map((subItem, index) => (
                        <li
                          key={`${item.id}-sub-${index}`}
                          className="sub-menu-item py-2"
                        >
                          <Link
                            to={subItem.path}
                            className="text-decoration-none text-muted sub-menu-link"
                            onClick={onClose}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  id={`${item.id}-link`}
                  className="text-decoration-none text-dark sidebar-menu-title"
                  onClick={onClose}
                >
                  <div className="sidebar-direct-link px-3 py-2">
                    {item.title}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
