import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();

  const handleContactClick = (page) => {
    navigate(`/${page}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="z-1000 fixed top-0 left-0 right-0 ">
        <nav className=" flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
          <a href="#">
            <img className="h-9" src={Logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/our-manufacturing"}>Our Manufacturing</Link>
            <Link to={"/our-distribution"}>Our Distribution</Link>
            <Link to={"/client"}>Clients</Link>
            <button
              onClick={() => handleContactClick("contact")}
              className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="sm:hidden"
          >
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="1.5" rx=".75" fill="#426287" />
              <rect
                x="8"
                y="6"
                width="13"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
              <rect
                x="6"
                y="13"
                width="15"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
          >
            <Link to={"/"} className="block">
              Home
            </Link>
            <Link to={"/about"} className="block">
              About
            </Link>
            <Link to={"/contact"} className="block">
              Contact
            </Link>
            <Link
              to={"/login"}
              className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
            >
              Login
            </Link>
          </div>
        </nav>
        {/* Announcement Bar */}
        <div
          className={`w-full py-2.5 font-normal text-md text-white flex flex-row items-center px-7 bg-blue-600 justify-between ${
            hidden ? "hidden" : ""
          }`}
        >
          <div className="flex-1 text-center">
            <p>
              Talk to our customer support for detailed info{" "}
              <a
                href="#"
                className="cursor-pointer hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ +919477629417
              </a>
            </p>
          </div>

          <button type="button" onClick={() => setHidden(true)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="12.532"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-45.74 0 12.532)"
                fill="#fff"
              />
              <rect
                x="12.533"
                y="13.915"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-135.74 12.533 13.915)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
