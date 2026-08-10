import { useState, useEffect } from "react";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import AccountTabs from "../../components/Account/AccountTabs/AccountTabs";
import Dashboard from "../../components/Account/contents/Dashboard";
import OrdersList from "../../components/Account/contents/OrdersList";
import MyAddressContent from "../../components/Account/contents/MyAddressContent";
import SettingContent from "../../components/Account/contents/SettingContent";
import "./PageAccount.css";

function LogoutMessage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div>Logging out{dots}</div>;
}

export default function PageAccount() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="container">
      <PageHeader
        title={"My Account"}
        description={
          "Manage your profile, track orders, and easily update your personal details anytime, all in one convenient place."
        }
      />

      <div className="account-page-layout d">
        <div className="account-sidebar mb-5">
          <AccountTabs active={active} setActive={setActive} />
        </div>

        <div className="account-content w-100 pb-3">
          {active === "dashboard" && <Dashboard />}
          {active === "orders" && <OrdersList />}
          {active === "address" && <MyAddressContent />}
          {active === "setting" && <SettingContent />}
          {active === "logout" && <LogoutMessage />}
        </div>
      </div>
    </div>
  );
}
