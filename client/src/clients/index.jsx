import React from "react";
import ManufacturingHeader from "../components/custom/manufacturingHeader";
function Clients() {
  const clientCard = [
    {
      name: "Client1",
      image: "https://www.reconservices.in/uploads/team-member-1.jpg",
    },
    {
      name: "Client2",
      image: "https://www.reconservices.in/uploads/team-member-2.png",
    },
    {
      name: "Client3",
      image: "https://www.reconservices.in/uploads/team-member-3.png",
    },
    {
      name: "Client4",
      image: "https://www.reconservices.in/uploads/team-member-4.jpg",
    },
    {
      name: "Client5",
      image: "https://www.reconservices.in/uploads/team-member-10.png",
    },
    {
      name: "Client6",
      image: "https://www.reconservices.in/uploads/team-member-8.jpg",
    },
    {
      name: "Client7",
      image: "https://www.reconservices.in/uploads/team-member-9.png",
    },
  ];
  const placeholder =
    "https://png.pngtree.com/background/20250201/original/pngtree-dynamic-shadows-of-industrial-workers-standing-together-picture-image_16007245.jpg";
  return (
    <>
      <ManufacturingHeader placeholder={placeholder} />
      <main className="px-4 sm:px-8 lg:px-60 py-12 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 gap-y-10">
          {clientCard.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden p-5 max-w-2xs"
            >
              <div className="h-full w-full overflow-hidden flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-fit"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Clients;
