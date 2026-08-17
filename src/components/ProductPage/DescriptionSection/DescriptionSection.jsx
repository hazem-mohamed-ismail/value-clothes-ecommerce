import { useState } from "react";
import "./DescriptionSection.css";
import DescriptionTabsNav from "./DescriptionTabsNav/DescriptionTabsNav";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import CustomerReviewsTab from "./CustomerReviewsTab/CustomerReviewsTab";
import ShippingReturnsTab from "./ShippingReturnsTab/ShippingReturnsTab";
import ReturnPoliciesTab from "./ReturnPoliciesTab/ReturnPoliciesTab";

export default function DescriptionSection({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="product-description-section">
      <h2 className="description-section-title">Description</h2>
      <DescriptionTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="description-tabs-content">
        {activeTab === "description" && (
          <div className="description-tab-panel">
            <DescriptionTab product={product} />
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="description-tab-panel">
            <CustomerReviewsTab />
          </div>
        )}
        {activeTab === "shipping" && (
          <div className="description-tab-panel">
            <ShippingReturnsTab />
          </div>
        )}
        {activeTab === "returns" && (
          <div className="description-tab-panel">
            <ReturnPoliciesTab />
          </div>
        )}
      </div>
    </section>
  );
}
