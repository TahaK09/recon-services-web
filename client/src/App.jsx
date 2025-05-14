import { useState } from "react";
import Header from "./components/custom/header";
import Overview from "./components/custom/overview";
import TestimonialsSection from "./components/custom/testimonial";
import Footer from "./components/custom/footer";
import CTA from "./components/custom/CallToAction";
import Distributers from "./components/custom/dist";
import Manufacturing from "./components/custom/manufacturing-section";
import Features from "./components/custom/features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col px-28 border-b border-gray-200">
        <Overview />
        <Features />
        <Manufacturing />
        <TestimonialsSection />
        <Distributers />
      </div>

      <Footer />
    </>
  );
}

export default App;
