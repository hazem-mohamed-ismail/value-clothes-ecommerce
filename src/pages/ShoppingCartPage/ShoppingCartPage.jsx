import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProductList from "../../components/ShoppingCart/ProductList/ProductList";
import OrderSummary from "../../components/ShoppingCart/OrderSummary/OrderSummary";
import "./ShoppingCartPage.css";
import { useShoppingCart } from "../../context/CartSystem";
import { useProductContext } from "../../context/ProductFromApi";
import ProductStatus from "../../components/common/ProductStatus/ProductStatus";

export default function ShoppingCartPage() {
  const { cartItems } = useShoppingCart();
  const { loading, error } = useProductContext() || {};

  if (loading) {
    return (
      <ProductStatus loading={loading} />
    );
  }

  if (error) {
    return <ProductStatus error={error} />;
  }

  return (
    <div className="shopping-cart-page">
      <PageHeader
        title="Shopping Cart"
        description="Review your selected items, update quantities, and get ready for a smooth and easy checkout experience."
      />

      <div className="container">
        <div className="alert border-0 text-center py-3 mb-5 expiry-banner">
          <span className="me-2">🔥</span>
          Your cart will expire in{" "}
          <strong className="text-danger">Time's up!</strong> minutes! Please
          checkout now before your items sell out!
        </div>

        <div className="row g-5">
          <div className={`${cartItems.length > 0 ? "col-lg-8" : "col-lg-12"}`}>
            <ProductList />
          </div>


          {cartItems.length > 0 && (
            <div className="col-lg-4">
              <OrderSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
