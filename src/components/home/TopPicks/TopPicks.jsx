import "./TopPicks.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import ProductStatus from "../../common/ProductStatus/ProductStatus";
import { useProductContext } from "../../../context/ProductFromApi";

export default function TopPicks() {
  const { productsData , loading, error } = useProductContext() || {};
  const topPicksProducts = productsData.filter((product) => {
    return [12, 18, 19, 20].includes(product.id);
  });

  const renderProducts = topPicksProducts.map((product) => (
    <div className="col-lg-3 col-md-6" key={product.id}>
      <ProductCard product={product} />
    </div>
  ));

  return (
    <div className="container top-picks my-1 pb-2 pt-2">
      <h1 className="top-picks-h text-center mt-5">Top Picks for You</h1>
      <p className="text-center top-picks-p">
        Fresh styles just in! Elevate your look.
      </p>

      <div className="row g-4 justify-content-center mt-4">
        {loading ? (
          <ProductStatus loading={loading} />
        ) : error ? (
          <ProductStatus error={error} />
        ) : (
          renderProducts
        )}
      </div>
    </div>
  );
}
