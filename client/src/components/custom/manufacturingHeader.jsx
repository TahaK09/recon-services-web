import React from "react";
import { Link } from "react-router-dom";

function ManufacturingHeader({ placeholder }) {
  return (
    <div
      className="relative h-60 w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${placeholder}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Our Manufacturing
        </h1>
        <p className="mt-3 text-md sm:text-lg text-gray-300">
          <Link to="/" className="hover:underline text-white">
            Home
          </Link>{" "}
          / Our Manufacturing
        </p>
      </div>
    </div>
  );
}

export default ManufacturingHeader;
