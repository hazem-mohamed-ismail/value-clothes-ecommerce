import { useState } from "react";
import MainNavigation from "./MainNavigation";
import TopBar from "./TopBar";
import SideNavBar from "../SideNavBar/SideNavBar";

export default function HeaderContainer() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      <TopBar />
      <MainNavigation onSidebarToggle={handleSidebarToggle} />
      <SideNavBar open={isSideNavOpen} onClose={handleSidebarClose} />
    </>
  );
}
