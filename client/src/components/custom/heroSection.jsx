import { useState } from "react";
import Illustration from "../../assets/illustration-3.jpg";
import ImageSlider from "../../components/custom/imageGallery";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = (page) => {
    navigate(`/${page}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 md:mt-14 pb-10 min-h-screen">
        <div className="max-md:mt-7">
          <h1 className="text-4xl md:text-[74px] text-gray-700 max-w-[45vw]">
            Kolkata's premier destination for cutting-edge solutions in{" "}
            <span className="underline font-bold">
              mechanical component manufacturing and cutting tools.
            </span>
          </h1>

          <div className="flex items-center mt-10">
            <button
              onClick={() => handleContactClick("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-md font-semibold px-6 py-2.5 rounded-md transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleContactClick("about")}
              className="flex text-md items-center gap-1.5 px-6 py-2.5 text-gray-700 underline"
            >
              Know more about us
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section with Illustration or Image (optional) */}
        <div className="mb-10 md:mb-0">
          <ImageSlider />
        </div>
      </main>
    </>
  );
};

export default Hero;
