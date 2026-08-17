import "./DescriptionTab.css";

export default function DescriptionTab({ product }) {
  return (
    <div className="description-panel">
      <p>{product?.description || "No description available for this product."}</p>
      <p>
        This item belongs to the <strong>{product?.category || "product"}</strong> category and is
        currently rated <strong>{product?.rating?.rate || 0}</strong> / 5 by customers.
      </p>
      <ul>
        <li>Category: {product?.category || "Uncategorized"}</li>
        <li>Price: ${Number(product?.price || 0).toFixed(2)}</li>
        <li>Rating: {product?.rating?.rate || 0} out of 5</li>
      </ul>
    </div>
  );
}
