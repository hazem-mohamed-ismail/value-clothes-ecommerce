# E-commerce Project Architecture Report

## 1. Project Overview
This project is a React + Vite front-end storefront built as a portfolio-ready e-commerce UI. The current state focuses on polished UI, route-based page navigation, reusable components, responsive layout, and a partially integrated shopping-cart experience.

## 2. Tech Stack
- React 19
- Vite 8
- React Router DOM 7
- Bootstrap 5 + React Bootstrap
- Material UI
- Font Awesome, Bootstrap Icons, Flag Icons
- Swiper, React Image Gallery, React Image Magnify
- ESLint + Vite build tooling

## 3. Application Structure
### Entry Points
- src/main.jsx: wraps the app with BrowserRouter, ShoppingCartProvider, SideNavCartProvider, and StrictMode.
- src/App.jsx: defines the main route tree and layout shell.

### Global Providers
- src/context/CartSystem.jsx: shopping cart state and actions.
- src/context/SideNavCart.jsx: drawer visibility state.

## 4. Routing Map
- / -> Home
- /contact -> Contact
- /invoice -> Invoice
- /shop-left-sidebar -> ShoppingPage
- /about -> About
- /blog -> BlogPage
- /blog-single/:id -> BlogSingle
- /account -> PageAccount
- /checkout -> CheckOut
- /shopping-cart -> ShoppingCartPage
- /product -> ProductPage
- /login -> LogIn
- /wishlist -> Wishlist
- /* -> NotFound

## 5. Main Pages
### Home
Located at src/pages/Home/Home.jsx. Composes the landing page and includes:
- SubscriptionModal
- CarouselHome
- ShopByCategories
- TopPicks
- CategoryGrid
- TopTrending
- Banners
- ReviewCard
- ServiceHighlights

### Shopping Page
Located at src/pages/ShoppingPage/ShoppingPage.jsx. Displays product cards and filters.

### Product Detail Page
Located at src/pages/ProductPage/ProductPage.jsx. Contains gallery, product details, tabs, related products, and size guide.

### Shopping Cart Page
Located at src/pages/ShoppingCartPage/ShoppingCartPage.jsx. Hosts cart list and summary.

### Checkout Page
Located at src/pages/CheckOut/CheckOut.jsx. UI for shipping and payment flow.

### Account Page
Located at src/pages/PageAccount/PageAccount.jsx. Includes tabbed account sections.

### Blog Pages
- src/pages/Blog/BlogPage.jsx
- src/pages/BlogSingle/BlogSingle.jsx

### Authentication / Utility Pages
- src/pages/LogIn/LogIn.jsx
- src/pages/Wishlist/Wishlist.jsx
- src/pages/Invoice/Invoice.jsx
- src/pages/NotFound/NotFound.jsx
- src/pages/Contact/Contact.jsx
- src/pages/About/About.jsx

## 6. Core Components by Area
### Layout
- src/components/layout/Header/HeaderContainer.jsx
- src/components/layout/Header/MainNavigation.jsx
- src/components/layout/Header/TopBar.jsx
- src/components/layout/SideNavBar/SideNavBar.jsx
- src/components/layout/Footer/Footer.jsx
- src/components/common/PageHeader/PageHeader.jsx

### Home
- src/components/home/CarouselHome/CarouselHome.jsx
- src/components/home/ShopByCategories/ShopByCategories.jsx
- src/components/home/TopPicks/TopPicks.jsx
- src/components/home/CategoryGrid/CategoryGrid.jsx
- src/components/home/TopTrending/TopTrending.jsx
- src/components/home/Banners/Banners.jsx
- src/components/home/ReviewCard/ReviewCard.jsx
- src/components/home/ServiceHighlights/ServiceHighlights.jsx
- src/components/home/SubscriptionModal/SubscriptionModal.jsx

### Product Experience
- src/components/common/ProductCard/ProductCard.jsx
- src/components/ProductPage/Gallery/Gallery.jsx
- src/components/ProductPage/ProductDetails/ProductDetails.jsx
- src/components/ProductPage/DescriptionSection/DescriptionSection.jsx
- src/components/ProductPage/RelatedProducts/RelatedProducts.jsx
- src/components/ProductPage/SizeGuide/SizeGuide.jsx
- src/components/ProductPage/SizeGuide/ModalSizeGuide.jsx

### Cart & Checkout
- src/components/ShoppingCart/ProductList/ProductList.jsx
- src/components/ShoppingCart/CartProductItem/CartProductItem.jsx
- src/components/ShoppingCart/OrderSummary/OrderSummary.jsx
- src/components/common/ShoppingCartDrawer/ShoppingCartDrawer.jsx
- src/components/common/ShoppingCartDrawer/ShoppingCartDrawerItem.jsx
- src/components/CheckOut/CheckoutForm.jsx
- src/components/CheckOut/CheckoutSummary.jsx
- src/components/CheckOut/CheckOutCartItem.jsx

### Account
- src/components/Account/AccountTabs/AccountTabs.jsx
- src/components/Account/contents/Dashboard.jsx
- src/components/Account/contents/OrdersList.jsx
- src/components/Account/contents/MyAddressContent.jsx
- src/components/Account/contents/SettingContent.jsx

### Blog
- src/components/BlogPage/BlogCard/BlogCard.jsx
- src/components/BlogPage/BlogGrid/BlogGrid.jsx
- src/components/BlogPage/Sidebar/Sidebar.jsx
- src/components/BlogSingle/BlogHeader/BlogHeader.jsx
- src/components/BlogSingle/BlogContent/BlogContent.jsx
- src/components/BlogSingle/BlogComments/BlogComments.jsx
- src/components/BlogSingle/RelatedPosts/RelatedPosts.jsx

### About & Contact
- src/components/About/MeetOurTeam/MeetOurTeam.jsx
- src/components/About/WhyChooseUs/WhyChooseUs.jsx
- src/components/common/MessageForm/MessageForm.jsx

## 7. Data Sources
The current UI relies heavily on local static data:
- src/data/products.json
- src/data/categories.json
- src/data/banners.json
- src/data/blogPosts.json
- src/data/carouselSlides.json
- src/data/services.json
- src/data/team.json
- src/data/testimonials.json
- src/data/accordions.json

## 8. Current State Assessment
### Strengths
- Strong visual polish and page coverage
- Well-separated component structure
- Good routing and layout organization
- Reusable UI patterns across pages
- Context-based cart foundation exists

### Gaps / Next Improvements
- Shopping cart is still partially mocked and not fully connected to the provider
- Product detail routing is still basic and does not use dynamic product IDs
- Filters currently render UI but do not fully affect product results
- Authentication and checkout remain UI-only

## 9. Recommended Next Steps
1. Connect cart UI to the ShoppingCartProvider end-to-end.
2. Move product detail pages to dynamic routes like /product/:id.
3. Wire filters to product data state.
4. Add real form handling and validation.
5. Introduce tests for core logic and reusable components.
