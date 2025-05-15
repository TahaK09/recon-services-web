import React from "react";
import { motion } from "framer-motion";

function Features() {
  const featureList = [
    {
      text: "In-house manufacturing of components with the latest technology",
      image: "https://www.reconservices.in/uploads/why-choose-1.png",
    },
    {
      text: "Stringent quality checks before supply of consignment",
      image: "https://www.reconservices.in/uploads/why-choose-2.png",
    },
    {
      text: "Designing of Critical Components - Jigs, Fixtures & Gauges",
      image: "https://www.reconservices.in/uploads/why-choose-3.png",
    },
    {
      text: "Young and Bright professionals to nurture new ideas",
      image: "https://www.reconservices.in/uploads/why-choose-4.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          <span className="bg-clip-text text-gray-700">Why Choose Us</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
          Explore the core strengths that power our innovation and precision.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
        {featureList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-6 w-full sm:w-[260px] flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.text}
              className="h-20 w-20 object-contain mb-4"
            />
            <p className="text-base font-medium text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
