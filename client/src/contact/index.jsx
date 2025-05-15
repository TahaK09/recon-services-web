import React from "react";
import ManufacturingHeader from "../components/custom/manufacturingHeader";
function Contact() {
  const placeholder =
    "https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg";
  return (
    <>
      <ManufacturingHeader placeholder={placeholder} />

      <div className="sm:px-12 md:px-20 py-12 bg-white mx-40">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Address */}
          <div className="text-center rounded-md border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative -top-11 w-20 h-20 rounded-full bg-gray-100 text-gray-700 border-gray-200 border flex items-center justify-center text-2xl">
                <svg
                  width="36px"
                  height="36px"
                  viewBox="-4 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>location</title>{" "}
                    <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      {" "}
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-106.000000, -413.000000)"
                        fill="#000000"
                      >
                        {" "}
                        <path
                          d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                          id="location"
                          sketch:type="MSShapeGroup"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-lg -mt-8">Address</h3>
            <p>
              9, Sarada Pally, PO: Ghola Bazar. <br /> Kolkata – 700111.
            </p>
          </div>

          {/* Phone */}
          <div className="text-center rounded-md border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative -top-11 w-20 h-20 rounded-full bg-gray-100 text-gray-700 border-gray-200 border flex items-center justify-center text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  height="36px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  stroke="#2fa1f9"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.144"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#1C274C"
                    />{" "}
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-lg -mt-8">Phone Number</h3>
            <p>
              Office 1: +91-8961526320 <br /> Office 2: +91-9477629417
            </p>
          </div>

          {/* Email */}
          <div className="text-center rounded-md border p-6 shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="relative -top-11 w-20 h-20 rounded-full bg-gray-100 text-gray-700 border-gray-200 border flex items-center justify-center text-2xl">
                <svg
                  width="36px"
                  height="36px"
                  viewBox="0 -3.5 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  fill="#48a6fe"
                  stroke="#48a6fe"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>mail</title> <desc>Created with Sketch Beta.</desc>{" "}
                    <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      {" "}
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-414.000000, -261.000000)"
                        fill="#000000"
                      >
                        {" "}
                        <path
                          d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                          id="mail"
                          sketch:type="MSShapeGroup"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-lg -mt-8">Email Address</h3>
            <p>
              reconservices9@outlook.com <br /> reconservices2020@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl text-gray-700 font-semibold mb-6">
              Contact Form
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-normal">
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-normal">
                    Email Address (Required)
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-normal">Phone Number</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-normal">
                  Message (Required)
                </label>
                <textarea
                  rows="5"
                  className="w-full border rounded px-3 py-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-2 px-10 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-md">
            <iframe
              title="recon-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.310262772775!2d88.39532061489788!3d22.60390198515978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275566f3ffb8b%3A0x44c2b84123e5f5cf!2sRECON%20SERVICES!5e0!3m2!1sen!2sin!4v1650968817460!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
