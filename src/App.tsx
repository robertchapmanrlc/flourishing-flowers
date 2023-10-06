import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Birthday from "./pages/birthday";
import Home from "./pages/home";
import JustBecause from "./pages/just-because";
import Anniversary from "./pages/anniversary";
import Wedding from "./pages/wedding";
import Cart from "./pages/cart";

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

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/just-because"
            element={<JustBecause cards={products} />}
          />
          <Route path="/birthday" element={<Birthday cards={products} />} />
          <Route
            path="/anniversary"
            element={<Anniversary cards={products} />}
          />
          <Route path="/wedding" element={<Wedding cards={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
