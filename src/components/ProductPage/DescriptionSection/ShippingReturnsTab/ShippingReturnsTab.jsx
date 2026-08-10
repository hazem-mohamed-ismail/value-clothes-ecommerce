import "./ShippingReturnsTab.css";

export default function ShippingReturnsTab() {
  return (
    <div className="description-panel shipping-returns-panel">
      <div className="section-block">
        <h3>Shipping</h3>
        <p>
          Delivery duties are included in the item price for most EU countries and the
          USA. Orders are shipped from the nearest fulfillment center to reduce transit time.
        </p>
        <ul>
          <li>Express delivery: 5–7 business days</li>
          <li>Standard delivery: 10–14 business days</li>
          <li>Free shipping on orders over $75</li>
        </ul>
      </div>

      <div className="section-block">
        <h3>Returns</h3>
        <p>
          We offer hassle-free returns within 30 days of delivery. Returned items must be
          unworn and in original packaging.
        </p>
      </div>
    </div>
  );
}
