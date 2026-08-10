import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flag-icons/css/flag-icons.min.css";
import { ShoppingCartProvider } from "./context/CartSystem";
import { SideNavCartProvider } from "./context/SideNavCart";
import { WishlistProvider } from "./context/WishlistSystem";


// https://api.escuelajs.co/api/v1/products


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <SideNavCartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </SideNavCartProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </StrictMode>,
);
