import React from "react";
import { Link } from "react-router-dom";
import ManufacturingHeader from "../components/custom/manufacturingHeader";

function Manufacturing() {
  const ManufacturingCard = [
    {
      name: "Hook",
      image:
        "https://www.reconservices.in/uploads/project-featured-photo-1.jpg",
      url: "hook",
    },
    {
      name: "Fin (Model of a critical component)",
      image:
        "https://www.reconservices.in/uploads/project-featured-photo-3.jpg",
      url: "fin",
    },
    {
      name: "Finished FIN for Defence Application",
      image:
        "https://www.reconservices.in/uploads/project-featured-photo-3.jpg",
      url: "finished-fin",
    },
    {
      name: "Customised Soft Jaw",
      image:
        "https://www.reconservices.in/uploads/project-featured-photo-8.jpg",
      url: "soft-jaw",
    },
    {
      name: "Aluminum Machining for Defense Application",
      image: "",
      url: "aluminum-machining",
    },
    {
      name: "M100x6 Special Die",
      image: "",
      url: "m100x6-special-die",
    },
    {
      name: "Finished FIN for Defence Application",
      image: "",
      url: "finished-fin",
    },
    {
      name: "Finished FIN for Defence Application",
      image: "",
      url: "finished-fin",
    },
  ];

  const placeholder =
    "https://t3.ftcdn.net/jpg/02/80/16/80/360_F_280168017_SHmXpl5zVho9hLpDQiukmFkNPwUOpmR7.jpg";

  return (
    <>
      <ManufacturingHeader placeholder={placeholder} />
      <main className="px-4 sm:px-8 lg:px-60 py-12 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ManufacturingCard.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={item.image || placeholder}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-[140px]">
                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                  {item.name}
                </h2>
                <Link
                  to={`/manufacturing/${item.url}`}
                  className="mt-auto text-center bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full transition duration-200"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Manufacturing;
