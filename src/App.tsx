import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Home from "./pages/home";
import Cart from "./pages/cart";
import CategoryPage from "./pages/category-page";

const products = [
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
  },
  {
    image_url: "src/assets/products/red-rose-bouquet.webp",
    name: "Rose Bouquet",
    category: "Bouquet",
    price: "5",
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
        <Navbar categories={categories}/>
        <Routes>
          <Route path="/" element={<Home />} />
          {categories.map((category) => (
            <Route key={category.label} path={category.route} element={<CategoryPage category={category} />} /> 
          ))}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
