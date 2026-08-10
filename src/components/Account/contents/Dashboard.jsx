
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import productImg from "../../../assets/products/product-2.jpg";
import "./Dashboard.css";

function Dashboard() {
  const images = {
    product: productImg,
  };

  const recentOrders = [
    {
      id: "54312453",
      productName: "Faux-leather trousers",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Pending",
    },
    {
      id: "54312452",
      productName: "Contrasting sweatshirt",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Delivery",
    },
    {
      id: "54312452",
      productName: "V-neck knitted top",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Completed",
    },
    {
      id: "54312452",
      productName: "Contrasting sweatshirt",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Pending",
    },
    {
      id: "54312456",
      productName: "Faux-leather trousers",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Delivery",
    },
    {
      id: "54312457",
      productName: "V-neck knitted top",
      productCategory: "Women, Clothing",
      price: "$45.00",
      status: "Canceled",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Delivery":
        return "status-delivery";
      case "Completed":
        return "status-completed";
      case "Canceled":
        return "status-canceled";
      default:
        return "";
    }
  };

  return (
    <div className="container dashboard-wrapper mb-5 w-100">
      <h1 className="dashboard-title mb-4">Dashboard</h1>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="stat-card">
            <div className="stat-content">
              <span className="stat-label">Awaiting Pickup</span>
              <span className="stat-value">4</span>
            </div>
            <div className="stat-icon fa-icon-container">
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className="icon-main fa-lg"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card">
            <div className="stat-content">
              <span className="stat-label">Cancelled Orders</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-icon fa-icon-container cancel-icon-container">
              <i className="fa-solid fa-x fs-4"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card">
            <div className="stat-content">
              <span className="stat-label">Total Number of Orders</span>
              <span className="stat-value">200</span>
            </div>
            <div className="stat-icon fa-icon-container">
              <FontAwesomeIcon icon={faBox} className="icon-main fa-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="orders-section p-4">
        <h2 className="section-title mb-4">Recent Orders</h2>
        <div className="table-responsive">
          <table className="orders-table">
            <thead>
              <tr>
                <th className="order-col">Order</th>
                <th className="products-col">Products</th>
                <th className="pricing-col">Pricing</th>
                <th className="status-col">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="order-id">{order.id}</td>
                  <td className="products-cell">
                    <div className="product-info-wrapper">
                      <div className="product-thumbnail">
                        <img src={images.product} alt={order.productName} />
                      </div>
                      <div className="product-details">
                        <span className="product-name">
                          {order.productName}
                        </span>
                        <span className="product-category">
                          {order.productCategory}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="pricing-value">{order.price}</td>
                  <td className="status-cell">
                    <span
                      className={`status-badge ${getStatusClass(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
