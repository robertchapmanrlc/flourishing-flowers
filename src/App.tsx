import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Birthday from "./pages/birthday";
import Home from "./pages/home";
import JustBecause from "./pages/just-because";
import Anniversary from "./pages/anniversary";
import Wedding from "./pages/wedding";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Just-Because" element={<JustBecause />} />
          <Route path="/Birthday" element={<Birthday />} />
          <Route path="/Anniversary" element={<Anniversary />} />
          <Route path="/Wedding" element={<Wedding />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
