import "./DescriptionTabsNav.css";

export default function DescriptionTabsNav({ activeTab, setActiveTab }) {
  return (
    <div className="description-tabs-nav">
      <button
        type="button"
        className={activeTab === "description" ? "tab-button active" : "tab-button"}
        onClick={() => setActiveTab("description")}
      >
        Description
      </button>

      <button
        type="button"
        className={activeTab === "reviews" ? "tab-button active" : "tab-button"}
        onClick={() => setActiveTab("reviews")}
      >
        Customer Reviews
      </button>

      <button
        type="button"
        className={activeTab === "shipping" ? "tab-button active" : "tab-button"}
        onClick={() => setActiveTab("shipping")}
      >
        Shipping & Returns
      </button>

      <button
        type="button"
        className={activeTab === "returns" ? "tab-button active" : "tab-button"}
        onClick={() => setActiveTab("returns")}
      >
        Return Policies
      </button>
    </div>
  );
}