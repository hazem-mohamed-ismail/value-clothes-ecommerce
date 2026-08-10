import "./OrdersList.css";
import { useState } from "react";

function OrdersList() {
  const tabs = ["All Order", "Pending", "Delivery", "Completed", "Canceled"];
  const [activeTab, setActiveTab] = useState("All Order");

  const ordersData = [
    {
      orderNumber: "S184989823",
      status: "Delivery",
      id: 1,
      name: "Contrasting sheepskin sweatshirt",
      variant: "XL/Blue",
      price: 30,
      quantity: 5,
      image: "/src/assets/products/product-2.jpg",
    },
    {
      orderNumber: "S184989823",
      status: "Delivery",
      id: 2,
      name: "Classic denim jacket",
      variant: "M/Black",
      price: 20,
      quantity: 3,
      image: "/src/assets/products/product-3.jpg",
    },
    {
      orderNumber: "S184989823",
      status: "Pending",
      id: 3,
      name: "Contrasting sheepskin sweatshirt",
      variant: "XL/Blue",
      price: 35,
      quantity: 12,
      image: "/src/assets/products/product-2.jpg",
    },
    {
      orderNumber: "S184989823",
      status: "Completed",
      id: 4,
      name: "Contrasting sheepskin sweatshirt",
      variant: "XL/Blue",
      price: 40,
      quantity: 8,
      image: "/src/assets/products/product-3.jpg",
    },
    {
      orderNumber: "S184989823",
      status: "Canceled",
      id: 5,
      name: "Contrasting sheepskin sweatshirt",
      variant: "XL/Blue",
      price: 25,
      quantity: 6,
      image: "/src/assets/products/product-3.jpg",
    },
  ];

  const renderedTabs = tabs.map((tab) => (
    <button
      key={tab}
      className={`tab-btn ${activeTab === tab ? "active" : ""}`}
      type="button"
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ));

  const filteredOrders =
    activeTab === "All Order"
      ? ordersData
      : ordersData.filter((order) => order.status === activeTab);

  const renderedOrders = filteredOrders.map((order) => (
    <div className="order-card-box mb-4" key={order.id}>
      <div className="order-card-header d-flex justify-content-between align-items-center p-3 px-4">
        <div className="order-num-text">
          Order Number: <span>{order.orderNumber}</span>
        </div>
        <div className="order-status-wrapper d-flex align-items-center">
          <span className="status-label me-2">Order Status:</span>
          <span className={`status-pill pill-${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </div>
      </div>

      <div className="order-card-body p-4">
        <div className="product-item-row d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="product-img-box me-3">
              <img src={order.image} alt={order.name} />
            </div>
            <div className="product-info-texts">
              <h4 className="prod-name-title mb-1">{order.name}</h4>
              <p className="prod-variant-subtitle mb-0">{order.variant}</p>
            </div>
          </div>
          <div className="product-pricing-qty text-end">
            {order.quantity} × ${order.price}.00
          </div>
        </div>
      </div>

      <div className="order-card-footer p-3 px-4 d-flex gap-3">
        <button className="btn-custom btn-dark-custom" type="button">
          Order Details
        </button>
        <button className="btn-custom btn-outline-custom" type="button">
          Cancel Order
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container orders-container mb-5 w-100">
      <h1 className="orders-main-title mb-4">Your Orders</h1>
      <div className="tabs-nav d-flex flex-wrap mb-4  w-100">{renderedTabs}</div>
      <div className="orders-list-wrapper w-100">{renderedOrders}</div>
    </div>
  );
}

export default OrdersList;
