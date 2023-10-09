import About from "./componants/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import Contact from "./componants/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./componants/Services";
import Movies from "./componants/Movies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/movies"} element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
