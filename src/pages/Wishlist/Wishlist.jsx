import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistSystem";
import { useProductContext } from "../../context/ProductFromApi";
import ProductStatus from "../../components/common/ProductStatus/ProductStatus";
import "./Wishlist.css";

function Wishlist() {
  const { wishlistItems } = useWishlist();
  const { productsData = [], loading, error } = useProductContext() || {};

  if (loading) {
    return (
      <ProductStatus loading={loading} />
    );
  }

  if (error) {
    return <ProductStatus error={error} />;
  }

  const wishlistProducts = productsData.filter((product) =>
    wishlistItems.includes(product.id),
  );

  if (wishlistProducts.length === 0) {
    return (
      <div>
        <PageHeader
          title="Your Wishlist"
          description="Manage your favorite items"
        />

        <div className="wishlist-empty py-5">
          <h2>Your wishlist is empty</h2>
          <p>You haven't added any products to your wishlist yet.</p>
          <Link to="/shop-left-sidebar">
            <button className="wishlist-button">Return to Shop</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Your Wishlist"
        description="Manage your favorite items"
      />
      <div className="container">
        <div className="row g-4 ">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
