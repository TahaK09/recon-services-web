import React from "react";
import Drill from "../../assets/drill-tool.png";
import DrillingJig from "../../assets/drilling-jag.png";
import NickleCoating from "../../assets/nickel-coating.png";
// import { useAppContext } from "../context/AppContext";

function Manufacturing() {
  const categories = [
    {
      text: "Drilling Tools",
      path: "tools",
      image: Drill,
      bgColor: "#FEF6DA",
    },
    {
      text: "Drilling Jig",
      path: "drilling-jig",
      image: DrillingJig,
      bgColor: "#FEE0E0",
    },
    {
      text: "Nickle Powder Surface Coating",
      path: "nickle-powder-surface-coating",
      image: NickleCoating,
      bgColor: "#F0F5DE",
    },
    {
      text: "Instant Food",
      path: "Instant",
      image: DrillingJig,
      bgColor: "#E1F5EC",
    },
    {
      text: "Dairy Products",
      path: "Dairy",
      image: Drill,
      bgColor: "#FEE6CD",
    },
    {
      text: "Bakery & Breads",
      path: "Bakery",
      image: NickleCoating,
      bgColor: "#E0F6FE",
    },
    {
      text: "Grains & Cereals",
      path: "Grains",
      image: Drill,
      bgColor: "#F1E3F9",
    },
    {
      text: "Dairy Products",
      path: "Dairy",
      image: Drill,
      bgColor: "#FEE6CD",
    },
  ];
  //   const { navigate } = useAppContext();
  return (
    <>
      <div className="mt-16 mx-40">
        <p className="text-2xl md:text-3xl font-medium text-gray-700">
          Our Manufacturing
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: item.bgColor }}
              //   onClick={() => {
              //     navigate(`/products/${item.path.toLowerCase()}`);
              //     scrollTo(0, 0); //To Scroll the webpage to top
              //   }}
            >
              <img
                src={item.image}
                alt={item.text}
                className="group-hover:scale-108 transition max-w-28"
              />
              <p className="text-md text-center font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Manufacturing;
