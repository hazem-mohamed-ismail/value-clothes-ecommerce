import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import "./AccountTabs.css";

export default function AccountTabs({ active, setActive }) {
  const navigate = useNavigate();
  return (
    <div className="account-tabs">
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          action
          className={active === "dashboard" ? "active-tab" : ""}
          onClick={() => setActive("dashboard")}
        >
          <i className="bi-house me-2" /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          className={active === "orders" ? "active-tab" : ""}
          onClick={() => setActive("orders")}
        >
          <i className="bi-box-seam me-2" /> Your Orders
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          className={active === "address" ? "active-tab" : ""}
          onClick={() => setActive("address")}
        >
          <i className="bi-tag me-2" /> My Address
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          className={active === "setting" ? "active-tab" : ""}
          onClick={() => setActive("setting")}
        >
          <i className="bi-gear me-2" /> Setting
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          className={active === "logout" ? "active-tab" : ""}
          onClick={() => {
            setActive("logout");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          }}
        >
          <i className="bi-box-arrow-right me-2" /> Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
