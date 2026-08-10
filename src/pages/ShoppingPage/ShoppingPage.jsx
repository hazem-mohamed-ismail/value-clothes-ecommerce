import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import Filters from "../../components/ShoppingPage/Filters/Filters";
import DrawerFilters from "../../components/ShoppingPage/DrawerFilters/DrawerFilters";
import "./ShoppingPage.css";
import { useState } from "react";
import { useProductContext } from "../../context/ProductFromApi";

export default function ShoppingPage() {
  const [viewMode, setViewMode] = useState("col-lg-4 col-md-6 col-12");
  const productsData = useProductContext();

  const renderProducts = productsData.map((product) => {
    return (
      <div className={viewMode} key={product.id}>
        <ProductCard product={product} />
      </div>
    );
  });

  return (
    <>
      <PageHeader
        title={"Tops & Shirts"}
        description={
          "Step into our Tops & Shirts Collection, where elegance meets confidence in styles that inspire every moment."
        }
      />

      <section className="shopping-page container py-3">
        <div className="row gx-4 gy-4">
          <aside className="col-lg-3 shopping-page-aside">
            <Filters />
          </aside>

          <div className="col-12 mobile-filters-button">
            <DrawerFilters />
          </div>

          <main className="col-lg-9 shopping-page-main">
            <div className="shopping-page-toolbar">
              <div className="toolbar-info">
                <div className="toolbar-layout-picker d-none d-md-flex">
                  <button
                    type="button"
                    aria-label="2 Columns View"
                    className={`layout-picker-btn btn-cols-2 ${viewMode.includes("col-lg-6") ? "active" : ""}`}
                    onClick={() => setViewMode("col-lg-6 col-md-6 col-12")}
                  >
                    <div className="layout-picker-icon">
                      <span></span>
                      <span></span>
                    </div>
                  </button>

                  <button
                    type="button"
                    aria-label="3 Columns View"
                    className={`layout-picker-btn btn-cols-3 ${viewMode.includes("col-lg-4") ? "active" : ""}`}
                    onClick={() => setViewMode("col-lg-4 col-md-6 col-12")}
                  >
                    <div className="layout-picker-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </button>

                  <button
                    type="button"
                    aria-label="4 Columns View"
                    className={`layout-picker-btn btn-cols-4 ${viewMode.includes("col-lg-3") ? "active" : ""}`}
                    onClick={() => setViewMode("col-lg-3 col-md-6 col-12")}
                  >
                    <div className="layout-picker-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </button>
                </div>

                <div className="display-products"></div>
              </div>
            </div>

            <div className="row g-4 shopping-page-products-container">
              {renderProducts}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}