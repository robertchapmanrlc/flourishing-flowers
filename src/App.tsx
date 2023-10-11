import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/home";
import Cart from "./pages/cart";
import CategoryPage from "./pages/category-page";
import ProductOverview from "./pages/product-overview";
import ScrollToTop from "./components/scroll-to-top";
import { ShopContextProvider } from "./contexts/shop-context";
import { products } from '../products.ts'
import { Toaster } from "react-hot-toast";

const categories = [
  {
    route: "/just-because",
    label: "Just Because",
    cards: [products[0], products[1], products[2], products[3]],
  },
  {
    route: "/birthday",
    label: "Birthday",
    cards: [products[0], products[6], products[7]],
  },
  {
    route: "/anniversary",
    label: "Anniversary",
    cards: [products[0], products[3], products[6], products[7]],
  },
  {
    route: "/wedding",
    label: "Wedding",
    cards: [products[0], products[2], products[4], products[5]],
  },
];

function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <ScrollToTop />
          <Toaster />
          <Navbar categories={categories}/>
          <Routes>
            <Route path="/" element={<Home />} />
            {categories.map((category) => (
              <Route key={category.label} path={category.route} element={<CategoryPage category={category} />} />
            ))}
            <Route path="/product/:id" element={<ProductOverview /> } />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App
