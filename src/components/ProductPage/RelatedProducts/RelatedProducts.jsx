import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import ProductCard from "../../common/ProductCard/ProductCard";
import { useProductContext } from "../../../context/ProductFromApi";
import "./RelatedProducts.css";

export default function RelatedProducts() {
  const [active, setActive] = useState("related");
  const { productsData } = useProductContext();

  const relatedProductsData = productsData.filter(p => [10, 11, 12, 13].includes(p.id));
  const recentlyViewedData = productsData.filter(p => [14, 15, 16, 17].includes(p.id));

  const displayProducts = active === "related" ? relatedProductsData : recentlyViewedData;

  return (
    <div className="container related-products my-5 py-5">
      <Nav className="related-products-tabs justify-content-center mb-5 border-bottom">
        <Nav.Link
          className={active === "related" ? "active-tab" : ""}
          onClick={() => setActive("related")}
        >
          Related Products
        </Nav.Link>
        <Nav.Link
          className={active === "viewed" ? "active-tab" : ""}
          onClick={() => setActive("viewed")}
        >
          Recently Viewed
        </Nav.Link>
      </Nav>

      <div className="row g-1 justify-content-center">
        {displayProducts.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
