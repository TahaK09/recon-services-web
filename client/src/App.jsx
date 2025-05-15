import { Routes, Route } from "react-router-dom";
import Home from "./home/index";
import Header from "./components/custom/header";
import Footer from "./components/custom/footer";
import About from "./about/index";
import Clients from "./clients/index";
import Manufacturing from "./manufacturing/index";
import Contact from "./contact/index";

function App() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col border-b border-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/our-manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
