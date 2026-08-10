import "./DescriptionTabsNav.css";

const tabs = [
  { id: "description", label: "Description" },
  { id: "reviews", label: "Customer Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
  { id: "returns", label: "Return Policies" },
];

export default function DescriptionTabsNav({ activeTab, setActiveTab }) {
  return (
    <div className="description-tabs-nav">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={activeTab === tab.id ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
