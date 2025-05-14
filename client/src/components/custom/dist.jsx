import React from "react";

function Distributers() {
  const DistributerImages = [
    {
      name: "Dist-1",
      img: "https://www.reconservices.in/images/Picture1.jpg",
    },
    {
      name: "Dist-2",
      img: "https://www.reconservices.in/images/Picture2.png",
    },
  ];
  return (
    <div className="w-full h-[250px] bg-white flex flex-col gap-10 justify-center items-center">
      <div className="text-4xl font-semibold text-gray-700">
        Authorized Distributors
      </div>
      <div className="flex flex-row gap-10 justify-center items-center">
        {DistributerImages.map((item, index) => (
          <img
            className="max-w-3xs max-h-20"
            key={index}
            src={item.img}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Distributers;
