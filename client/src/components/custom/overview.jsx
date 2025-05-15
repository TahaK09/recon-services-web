import React from "react";
import Illustration from "../../assets/illustration-2.jpg";

function Overview() {
  return (
    Illustration && (
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center px-6 py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('${Illustration}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="flex flex-col gap-6 text-white lg:w-1/2">
            <h3 className="text-2xl font-semibold text-indigo-400">Overview</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              About Re-con Services
            </h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-4">
              <p>
                Welcome to Re-con Services, Kolkata's premier destination for
                cutting-edge solutions in mechanical component manufacturing and
                cutting tools. Established in 2018, we have swiftly risen to
                become a leader in our field, driven by a commitment to
                excellence and innovation.
              </p>
              <p>
                Our expertise spans a wide range of services including the
                design and manufacturing of press tools, jigs, fixtures, and
                special machines. We specialize in the development of precise
                mechanical drawings and the production of vital components such
                as gears, pinions, shafts, and rollers for steel plants, mining
                machinery, and railways.
              </p>
              <p>
                Our offerings include high-quality cutting tools for CNC
                machines, gear cutting tools, solid carbide tooling, and 3D
                printing/scanning technology for precise prototyping and
                production optimization.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[40%]">
            <img
              src="https://www.reconservices.in/uploads/special_video_bg.jpg"
              alt="Re-con Overview"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    )
  );
}

export default Overview;
