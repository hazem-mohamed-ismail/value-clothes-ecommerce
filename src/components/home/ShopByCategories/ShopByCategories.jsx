import "./ShopByCategories.css";
import categories from "../../../data/categories.json";

export default function ShopByCategories() {
  const renderCategories = categories.map((category) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={category.id}>
        <div className="mx-auto category-item">
          <div className="category-image-wrapper">
            <img
              src={category.image}
              alt={category.alt}
              className="category-image"
            />
          </div>
          <p className="category-title">{category.title}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container shop-by-categories my-2 py-2">
      <h2 className="categories-h text-center mt-5">Shop by Categories</h2>

      <p className="categories-p text-center mt-3">
        Top styles everyone's talking about.
      </p>

      <div className="categories-carousel mt-5">
        <div className="row g-2">{renderCategories}</div>
      </div>
    </div>
  );
}

