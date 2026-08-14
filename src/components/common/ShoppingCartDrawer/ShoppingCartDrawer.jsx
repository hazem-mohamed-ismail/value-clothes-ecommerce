import { Offcanvas } from "react-bootstrap";
import "./ShoppingCartDrawer.css";
import { Link } from "react-router-dom";
import { useShowSideNavCart } from "../../../context/SideNavCart";
import { useProductContext } from "../../../context/ProductFromApi";
import { useShoppingCart } from "../../../context/CartSystem";
import ShoppingCartDrawerItem from "./ShoppingCartDrawerItem";

const ShoppingCartDrawer = () => {
  const { show, setShow } = useShowSideNavCart();
  const { cartItems } = useShoppingCart();
  const { productsData = [] } = useProductContext() || {};

  const filteredCartItems = cartItems.map((cartItem) => {
    const product = productsData.find((p) => p.id === cartItem.id);
    return { ...product, quantity: cartItem.quantity };
  });

  const subTotal = filteredCartItems.reduce((total, item) => {
    return total + (item.price || 0) * item.quantity;
  }, 0);

  const renderItems = filteredCartItems.map((item) => (
    <ShoppingCartDrawerItem key={item.id} item={item} />
  ));

  return (
    <Offcanvas
      show={show}
      onHide={() => setShow(false)}
      placement="end"
      className="shopping-cart-drawer"
    >
      <Offcanvas.Header closeButton className="border-0 pb-0 px-4 pt-4">
        <Offcanvas.Title className="fw-bold fs-4">
          Shopping Cart
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column justify-content-between p-0">
        <div className="flex-grow-1 overflow-y-auto px-4 py-3">
          {renderItems.length > 0 ? (
            renderItems
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center flex-column empty-cart-drawer">
              <div className="empty-cart-icon-circle d-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-handbag"></i>
              </div>
              <p className="text-center fs-4 text-muted mb-0">
                Your cart is empty.
              </p>
            </div>
          )}
        </div>

        <div className="cart-footer border-top bg-white p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5 fw-bold">Subtotal</span>
            <span className="fs-5 fw-bold">${subTotal.toFixed(2)}</span>
          </div>

          <div className="d-flex gap-2">
            <Link
              to="/shopping-cart"
              className="btn btn-outline-dark w-50 rounded-pill py-2 fw-semibold text-center text-decoration-none"
              onClick={() => setShow(false)}
            >
              View cart
            </Link>
            <Link
              to="/checkout"
              className="btn btn-dark w-50 rounded-pill py-2 fw-semibold text-center text-decoration-none"
              onClick={() => setShow(false)}
            >
              Check Out
            </Link>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCartDrawer;
