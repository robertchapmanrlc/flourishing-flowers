import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Birthday from "./pages/birthday";
import Home from "./pages/home";
import JustBecause from "./pages/just-because";
import Anniversary from "./pages/anniversary";
import Wedding from "./pages/wedding";
import Cart from "./pages/cart";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/just-because" element={<JustBecause />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/cart" element={<Cart /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
