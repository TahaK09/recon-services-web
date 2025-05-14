import React from "react";

function Features() {
  const featureList = [
    {
      text: "In house manufacturing of components with the latest technology",
      image: "https://www.reconservices.in/uploads/why-choose-1.png",
    },
    {
      text: "Stringent quality checks before supply of consignment.",
      image: "https://www.reconservices.in/uploads/why-choose-2.png",
    },
    {
      text: "Designing of Critical Components-Jigs-Fixtures-Gauges etc.",
      image: "https://www.reconservices.in/uploads/why-choose-3.png",
    },
    {
      text: "Young and Bright professionals in team to nurture new ideas.",
      image: "https://www.reconservices.in/uploads/why-choose-4.png",
    },
  ];

  return (
    <div className="w-full py-10 flex flex-col gap-10">
      <div className="text-4xl text-gray-600 font-medium text-center">
        Our Strength
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {featureList.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-5 max-w-80 hover:bg-gray-100 p-5 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.text}
              className="h-28 object-contain"
            />
            <p className="text-lg font-semibold text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
