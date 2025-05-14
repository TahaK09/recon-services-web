import { useState } from "react";
import Header from "./components/custom/header";
import Overview from "./components/custom/overview";
import TestimonialsSection from "./components/custom/testimonial";
import Footer from "./components/custom/footer";
import CTA from "./components/custom/CallToAction";
import Distributers from "./components/custom/dist";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-10">
        <Overview />
        <TestimonialsSection />
        <Distributers />
      </div>
      <Footer />
    </>
  );
}

export default App;
