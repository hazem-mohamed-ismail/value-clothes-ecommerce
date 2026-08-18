import "./CategoryGrid.css";

export default function CategoryGrid() {
  return (
    <div className="category-section my-5 container">
      <div className="container-fluid px-0">
        <div className="row g-3 g-md-4 mx-0">
          <div className="col-12 col-md-6 px-0 px-md-2">
            <div className="category-banner large-banner h-100 mx-2 mx-md-0">
              <img
                src="/assets/products/cls-6.jpg"
                alt="Shop Women"
                className="category-img img-fluid "
              />
              <div className="category-overlay">
                <span  className="category-link">
                  Shop Women
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 px-0 px-md-2">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="category-banner small-banner mx-2 mx-md-0">
                <img
                  src="/assets/products/cls-7.jpg"
                  alt="Shop Men"
                  className="category-img img-fluid"
                />
                <div className="category-overlay">
                  <span className="category-link">
                    Shop Men
                  </span>
                </div>
              </div>

              <div className="category-banner small-banner mx-2 mx-md-0">
                <img
                  src="/assets/products/cls-8.jpg"
                  alt="Shop Essentials"
                  className="category-img img-fluid"
                />
                <div className="category-overlay">
                  <span  className="category-link">
                    Shop Essentials
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
