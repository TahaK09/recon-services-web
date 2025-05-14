import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const Footer = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Our Manufacturing", link: "/our-manufacturing" },
    { name: "Clients", link: "/clients" },
    { name: "Quality Policy", link: "/quality-policy" },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-white text-gray-800">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-9" src={Logo} alt="logo" />
          <p className="mt-6 text-md">
            Welcome to Re-con Services, Kolkata's premier destination for
            cutting-edge solutions in mechanical component manufacturing and
            cutting tools. Established in 2018, we have swiftly risen to become
            a leader in our field, driven by a commitment to excellence and
            innovation.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Pages</h2>
            <ul className="text-md space-y-2">
              {Links.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-md space-y-2">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © Re-con Services. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
