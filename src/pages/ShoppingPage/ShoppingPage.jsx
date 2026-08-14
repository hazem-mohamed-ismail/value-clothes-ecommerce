import PageHeader from "../../components/common/PageHeader/PageHeader";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import Filters from "../../components/ShoppingPage/Filters/Filters";
import DrawerFilters from "../../components/ShoppingPage/DrawerFilters/DrawerFilters";
import "./ShoppingPage.css";
import { useEffect, useMemo, useState } from "react";
import { useProductContext } from "../../context/ProductFromApi";
import Stack from "@mui/material/Stack";
import MuiPagination from "@mui/material/Pagination";
import ProductStatus from "../../components/common/ProductStatus/ProductStatus";

export default function ShoppingPage() {
  const [viewMode, setViewMode] = useState("col-lg-4 col-md-6 col-6");
  const [currentPage, setCurrentPage] = useState(1);
  const { productsData, loading, error } = useProductContext();

  // Scroll to top when currentPage changes
  useEffect(() => {
    document.body.scrollTop = 300;
  }, [currentPage]);

  // States of filters
  const [rating, setRating] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("default");
  const [search, setSearch] = useState("");
  const [productCategory, setProductCategory] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState({
    minPrice: 0,
    maxPrice: 1000,
  });


  // Reset current page to 1 when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [rating, productCategory, filterByPrice, search]);


  const handleResetFilters = () => {
    setRating([]);
    setProductCategory([]);
    setSearch("");
    setSortByPrice("default");
    setFilterByPrice({ minPrice: 0, maxPrice: 1000 });

  };

  // START filters Logic
  const filteredData = useMemo(() => {
    return (
      productsData?.filter((product) => {
        // category
        if (
          !(
            productCategory.length === 0 ||
            productCategory.includes(product.category)
          )
        ) {
          return false;
        }

        // rating
        if (
          rating.length > 0 &&
          (product.rating?.rate ?? 0) < Math.min(...rating)
        ) {
          return false;
        }

        // price
        if (
          !(
            product.price >= filterByPrice.minPrice &&
            product.price <= filterByPrice.maxPrice
          )
        ) {
          return false;
        }

        // search
        if (!product.title?.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }

        return true;
      }) || []
    );
  }, [rating, productCategory, filterByPrice, search, productsData]);
  // END filters Logic

  const sortedProducts = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      switch (sortByPrice) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return (b.rating?.rate || 0) - (a.rating?.rate || 0);
        default:
          return 0;
      }
    });
  }, [sortByPrice, filteredData]);

  const productsPerPage = 14;
  const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(firstProduct, lastProduct);

  // 💡 التعامل مع حالة وجود منتجات أو عدم وجودها (Empty State)
  const renderProducts =
    currentProducts.length > 0 ? (
      currentProducts.map((product) => (
        <div className={viewMode} key={product.id}>
          <ProductCard product={product} />
        </div>
      ))
    ) : (
      <div className="col-12 text-center py-5 my-3 rounded-4 bg-light shadow-sm">
        <div className="mb-3 fs-1">🔍</div>
        <h4 className="fw-bold text-dark">No Products Found</h4>
        <p className="text-muted">
          We couldn't find any products matching your selected criteria.
        </p>
        <button
          type="button"
          className="btn btn-dark mt-2 px-4 py-2 rounded-pill fw-semibold"
          onClick={handleResetFilters}
        >
          Reset All Filters
        </button>
      </div>
    );

  // shows loading cycle
  if (loading) {
    return <ProductStatus loading={loading} />;
  }

  // shows an error when internet connection
  if (error) {
    return <ProductStatus error={error} />;
  }

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
            <Filters
              handleResetFilters={handleResetFilters}
              filterByPrice={filterByPrice}
              productCategory={productCategory}
              sortByPrice={sortByPrice}
              rating={rating}
              search={search}
              setFilterByPrice={setFilterByPrice}
              setProductCategory={setProductCategory}
              setRating={setRating}
              setSortByPrice={setSortByPrice}
              setSearch={setSearch}
            />
          </aside>

          <div className="col-12 mobile-filters-button">
            <DrawerFilters
              handleResetFilters={handleResetFilters}
              filterByPrice={filterByPrice}
              productCategory={productCategory}
              sortByPrice={sortByPrice}
              rating={rating}
              search={search}
              setFilterByPrice={setFilterByPrice}
              setProductCategory={setProductCategory}
              setRating={setRating}
              setSortByPrice={setSortByPrice}
              setSearch={setSearch}
            />
          </div>

          <main className="col-lg-9 shopping-page-main">
            <div className="shopping-page-toolbar">
              <div className="toolbar-info">
                <div className="toolbar-layout-picker d-none d-md-flex">
                  <button
                    type="button"
                    aria-label="2 Columns View"
                    className={`layout-picker-btn btn-cols-2 ${viewMode.includes("col-lg-6") ? "active" : ""}`}
                    onClick={() => setViewMode("col-lg-6 col-md-6 col-6")}
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
                    onClick={() => setViewMode("col-lg-4 col-md-6 col-6")}
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
                    onClick={() => setViewMode("col-lg-3 col-md-6 col-6")}
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

            {pageCount > 1 && (
              <Stack
                spacing={2}
                className="shopping-pagination-wrapper ms-3 mt-4"
              >
                <MuiPagination
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  page={currentPage}
                  onChange={(event, value) => {
                    document.body.scrollTop = 300;
                    setCurrentPage(value);
                  }}
                />
              </Stack>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
