import "./TopTrending.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { useProductContext } from "../../../context/ProductFromApi";

export default function TopTrending() {
  const { productsData = [] } = useProductContext() || {};
  const trendingProducts = productsData.filter(p => [12, 18, 19, 20].includes(p.id));

  const renderProducts = <ProductCard products={trendingProducts} showBadges={false} />;

  return (
    <div className="container top-picks my-1 pb-2 pt-2">
      <h1 className="top-picks-h text-center mt-5">Top Trending</h1>
      <p className="text-center top-picks-p">
        Browse our Top Trending picks loved by all.
      </p>

      <div className="row g-4 justify-content-center mt-4">
        {renderProducts}
      </div>
    </div>
  );
}

