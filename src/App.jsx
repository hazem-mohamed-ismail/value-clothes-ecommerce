import HeaderContainer from "./components/layout/Header/HeaderContainer";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import CheckOut from "./pages/CheckOut/CheckOut";
import ShoppingPage from "./pages/ShoppingPage/ShoppingPage";
import BlogSingle from "./pages/BlogSingle/BlogSingle";
import Invoice from "./pages/Invoice/Invoice";
import About from "./pages/About/About";
import BlogPage from "./pages/Blog/BlogPage";
import PageAccount from "./pages/PageAccount/PageAccount";
import ProductPage from "./pages/ProductPage/ProductPage";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import Wishlist from "./pages/Wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import ShoppingCartDrawer from "./components/common/ShoppingCartDrawer/ShoppingCartDrawer";

function App() {
  return (
    <>
      <HeaderContainer />
      <ShoppingCartDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/shop-left-sidebar" element={<ShoppingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-single/:id" element={<BlogSingle />} />
        <Route path="/account" element={<PageAccount />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;