import React from "react";

function Overview() {
  return (
    <div className="w-full lg:h-[60vh] flex justify-center items-center gap-20 mt-20">
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <div className="font-semibold text-2xl text-gray-500">Overview</div>
        <div className="font-semibold text-5xl text-gray-700">
          About Re-con Services
        </div>
        <div className="font-normal text-xl text-gray-600 flex flex-col gap-2 mt-5">
          <p>
            Welcome to Re-con Services, Kolkata's premier destination for
            cutting-edge solutions in mechanical component manufacturing and
            cutting tools. Established in 2018, we have swiftly risen to become
            a leader in our field, driven by a commitment to excellence and
            innovation.
          </p>
          <p>
            Our expertise spans a wide range of services including the design
            and manufacturing of press tools, jigs, fixtures, and special
            machines. We specialize in the development of precise mechanical
            drawings and the production of vital components such as gears,
            pinions, shafts, and rollers for steel plants, mining machineries,
            and railways.
          </p>
          Our comprehensive offerings also include the distribution of
          high-quality cutting tools for CNC machines and gear cutting tools as
          well. We also provide a wide range of solid carbide tooling options.
          We also offer a specialized range of 3D printing and scanning
          technology tailored for several applications. Whether you're refining
          prototypes or optimizing production, our equipment delivers precision
          and efficiency.
        </div>
      </div>
      <div className="h-full w-[40%]">
        <img
          className="w-full h-full rounded-2xl"
          src="https://www.reconservices.in/uploads/special_video_bg.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Overview;
