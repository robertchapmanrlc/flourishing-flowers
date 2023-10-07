import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Home from "./pages/home";
import Cart from "./pages/cart";
import CategoryPage from "./pages/category-page";
import ProductOverview from "./pages/product-overview";
import ScrollToTop from "./components/scroll-to-top";
import { ShopContextProvider } from "./contexts/shop-context";
import { products } from '../products.ts'

const categories = [
  {
    route: "/just-because",
    label: "Just Because",
    cards: products,
  },
  {
    route: "/birthday",
    label: "Birthday",
    cards: products,
  },
  {
    route: "/anniversary",
    label: "Anniversary",
    cards: products,
  },
  {
    route: "/wedding",
    label: "Wedding",
    cards: products,
  },
];

function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <ScrollToTop />
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
