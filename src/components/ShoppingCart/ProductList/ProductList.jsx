import "./ProductList.css";
import CartProductItem from "../CartProductItem/CartProductItem";
import Products from "../../../data/products.json";
import { useShoppingCart } from "../../../context/CartSystem";

export default function ProductList() {
  const { cartItems } = useShoppingCart();

  const filteredCartItems = cartItems.map((cartItem) => {
    const product = Products.find((p) => p.id === cartItem.id);
    return {...product, quantity: cartItem.quantity}
  });

  const renderItems = filteredCartItems.map((product) => (
    <CartProductItem key={product.id} product={product} />
  ));

  return (
    <div className="product-list-container p-3 p-md-4">
      <div className="row text-secondary mb-4 pb-3 pt-2 border-bottom fw-semibold d-none d-md-flex">
        <div className="col-md-6">Products</div>
        <div className="col-md-2 text-center">Price</div>
        <div className="col-md-2 text-center">Quantity</div>
        <div className="col-md-2 text-end">Total Price</div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-secondary">Your cart is empty.</h4>
        </div>
      ) : (
        renderItems
      )}
    </div>
  );
}
