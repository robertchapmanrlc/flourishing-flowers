import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Home from "./pages/home";
import Cart from "./pages/cart";
import CategoryPage from "./pages/category-page";
import ProductOverview from "./pages/product-overview";
import ScrollToTop from "./components/scroll-to-top";

const products = [
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 1,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 2,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 3,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 4,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 5,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 6,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 7,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 8,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 9,
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
    product_id: 10,
  },
];

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
    </>
  );
}

export default App
