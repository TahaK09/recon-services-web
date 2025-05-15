import React, { useState } from "react";

function About() {
  return (
    <>
      <main className="mx-auto px-4 sm:px-8 lg:px-12 pb-12">
        <section className="mt-8 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
          <div className="text-center md:text-center max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-semibold">
              Welcome to Re-con Services — Pioneering Innovation in Mechanical
              Component Manufacturing & Cutting Tool Solutions.
            </h1>
            <div className="mx-auto divide-x divide-gray-300 max-w-6xl grid grid-cols-4 my-10">
              {/* Achievements & Awards */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#a)" stroke="#2F77FF">
                      <path
                        d="M34.062 9.049c0 2.407-.781 4.716-2.173 6.418-1.097 1.343-2.503 2.222-4.014 2.533l-19.767-.005c-1.5-.316-2.898-1.192-3.99-2.528-1.39-1.702-2.172-4.01-2.172-6.418v-3.85c0-.473.312-.89.766-1.026a53.57 53.57 0 0 1 30.584 0c.455.135.766.553.766 1.027zM17.99 26.287v7.785m-6.18-.001h12.362"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.056 16.96c.155 4.914 4.031 9.307 8.948 9.307 5.003 0 8.772-4.315 8.944-9.316q.05-1.41.05-2.853c0-3.896-.26-7.864-.685-11.384-2.672-.597-5.42-.785-8.309-.785s-5.692.165-8.309.785c-.448 3.505-.685 7.488-.685 11.384q0 1.446.046 2.862Z"
                        fill="#D7E0FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h36v36H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-semibold text-2xl">500+</p>
                </div>
                <p className="text-sm">
                  In house manufacturing of components with the latest
                  technology
                </p>
              </div>

              {/* Happy Clients */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#2F77FF"
                    height="37px"
                    width="37px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1
                    c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256
                    S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315
                    c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047
                    C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256
                    c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687
                    c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064
                    C482.762,174.736,478.245,172.445,474.045,173.813z"
                        fill="#D7E0FF"
                      />

                      <path
                        d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161
                    c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344
                    s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75
                    c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663
                    c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411
                    c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314
                    c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037
                    s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728
                    c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978
                    S509.502,87.794,504.969,83.262z"
                        fill="#2F77FF"
                      />
                    </g>
                  </svg>

                  <p className="font-semibold text-2xl">100%</p>
                </div>
                <p className="text-sm">
                  Stringent quality checks before supply of consignment.
                </p>
              </div>

              {/* Happy Clients */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 35.018c9.123 0 16.518-7.396 16.518-16.518S27.623 1.982 18.5 1.982 1.982 9.377 1.982 18.5c0 9.122 7.395 16.518 16.518 16.518"
                      fill="#D7E0FF"
                      stroke="#2F77FF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.114 21.041c1.27 4.574 6.353 7.37 10.927 6.099 2.796-1.017 5.083-3.304 5.845-6.099"
                      stroke="#2F77FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.766 13.48v1.85m13.468-1.85v1.85"
                      stroke="#2F77FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-semibold text-2xl">100%</p>
                </div>
                <p className="text-sm">
                  Designing of Critical Components-Jigs-Fixtures-Gauges etc.
                </p>
              </div>

              {/* Happy Clients */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <svg
                    fill="#6d28d9"
                    height="37px"
                    width="37px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512.00 512.00"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M87.847,280.104c0,27.829,10.137,56.011,27.811,77.321c18.586,22.409,42.849,34.751,68.318,34.751 c25.466,0,49.699-12.335,68.237-34.732c17.616-21.284,27.719-49.455,27.719-77.291v-0.143c0-4.418-3.582-8-8-8s-8,3.582-8,8v0.143 c0,24.174-8.764,48.626-24.045,67.089c-15.442,18.658-35.299,28.934-55.911,28.934c-20.623,0-40.512-10.287-56.003-28.965 c-15.333-18.487-24.126-42.947-24.126-67.107v-9.595c0-19.791,13.293-46.696,18.333-56.187c32.113-3.683,63.08-2.321,92.099,4.084 c0.581,0.128,1.161,0.189,1.732,0.189c3.671,0,6.98-2.544,7.804-6.277c0.952-4.314-1.773-8.584-6.088-9.536 c-31.833-7.026-65.791-8.346-100.941-3.936c-2.628,0.125-5.14,1.536-6.553,3.983c-0.512,0.886-7.474,13.042-13.5,28.589 c-2.735-14.816-5.242-31.478-5.242-42.78c0-27.988,17.719-40.516,35.28-40.516c0.58,0,1.144-0.065,1.688-0.182 c0.551,0.118,1.113,0.183,1.677,0.183c1.686,0,3.387-0.531,4.833-1.63c17.543-13.325,40.98-11.589,63.694-7.728 c4.356,0.741,8.488-2.19,9.228-6.546c0.741-4.356-2.19-8.487-6.546-9.228c-24.198-4.113-51.751-6.161-73.856,9.167 c-0.237-0.021-0.475-0.036-0.718-0.036c-15.185,0-28.667,6.068-37.963,17.086c-8.587,10.178-13.317,24.181-13.317,39.43 c0,24.975,10.624,71.13,12.354,78.481V280.104z" />{" "}
                        <path d="M321.753,409.886c-0.172-0.048-0.346-0.09-0.521-0.127l-47.597-9.956l-12.583-19.081c-0.089-0.135-0.182-0.267-0.279-0.396 c-2.288-3.051-5.771-5.063-9.557-5.523c-3.782-0.458-7.649,0.662-10.601,3.077c-0.051,0.042-0.103,0.085-0.153,0.129 l-56.594,48.716l-56.593-48.716c-0.051-0.043-0.102-0.086-0.153-0.129c-2.952-2.415-6.814-3.537-10.601-3.077 c-3.786,0.46-7.269,2.473-9.557,5.523c-0.097,0.129-0.19,0.261-0.279,0.396l-12.583,19.081l-47.597,9.956 c-0.175,0.037-0.349,0.079-0.521,0.127c-13.84,3.877-25.614,12.458-34.051,24.815C4.238,445.974,0,459.582,0,473.019v15.041 c0,13.195,11.75,23.931,26.193,23.931h139.46c0.01,0,0.02,0.001,0.03,0.001c0.011,0,0.022-0.001,0.033-0.001h36.303 c0.011,0,0.022,0.001,0.033,0.001c0.01,0,0.02-0.001,0.03-0.001h139.461c14.443,0,26.193-10.735,26.193-23.931v-15.041 c0-13.437-4.238-27.045-11.934-38.317C347.367,422.345,335.593,413.764,321.753,409.886z M249.11,391.677l9.931,15.06 l-39.749,54.654l-23.671-23.67L249.11,391.677z M178.621,480.056h10.496l3.187,15.935h-16.87L178.621,480.056z M191.869,459.673 c0,2.634-1.605,4.382-2.667,4.382h-10.667c-1.062,0-2.667-1.748-2.667-4.382v-3.079l8-8l8,8V459.673z M118.628,391.677 l53.488,46.043l-23.67,23.67l-39.749-54.654L118.628,391.677z M16,488.06v-15.041c0-18.872,11.696-41.252,34.055-47.656 l45.486-9.514l45.472,62.524c1.376,1.893,3.511,3.087,5.844,3.271c0.209,0.017,0.418,0.024,0.626,0.024 c2.113,0,4.15-0.837,5.656-2.343l9.328-9.329c0.423,0.782,0.888,1.531,1.4,2.242l-4.75,23.752H26.193 C20.668,495.99,16,492.358,16,488.06z M351.738,488.06c0,4.299-4.668,7.931-10.193,7.931H208.62l-4.75-23.752 c0.512-0.71,0.977-1.46,1.4-2.242l9.329,9.329c1.506,1.506,3.543,2.343,5.656,2.343c0.208,0,0.417-0.008,0.626-0.024 c2.333-0.183,4.468-1.378,5.844-3.271l45.472-62.524l45.486,9.514c22.358,6.404,34.055,28.784,34.055,47.656V488.06z" />{" "}
                        <path d="M368,0.009c-79.402,0-144,64.598-144,144s64.598,144,144,144s144-64.598,144-144S447.402,0.009,368,0.009z M368,272.009 c-70.58,0-128-57.421-128-128s57.42-128,128-128s128,57.421,128,128S438.58,272.009,368,272.009z" />{" "}
                        <path d="M455.96,79.218c-0.011-0.114-0.033-0.225-0.049-0.337c-0.021-0.146-0.038-0.292-0.067-0.437 c-0.026-0.132-0.062-0.26-0.095-0.389c-0.031-0.124-0.058-0.248-0.095-0.37c-0.039-0.127-0.087-0.25-0.131-0.375 c-0.043-0.121-0.083-0.244-0.133-0.363c-0.049-0.118-0.106-0.23-0.16-0.345c-0.057-0.122-0.111-0.245-0.175-0.364 c-0.06-0.112-0.128-0.218-0.193-0.327c-0.069-0.115-0.134-0.231-0.209-0.343c-0.082-0.122-0.173-0.237-0.261-0.355 c-0.069-0.091-0.132-0.185-0.205-0.274c-0.335-0.408-0.709-0.783-1.118-1.118c-0.089-0.073-0.183-0.136-0.274-0.205 c-0.117-0.088-0.233-0.179-0.355-0.261c-0.112-0.075-0.228-0.14-0.342-0.208c-0.109-0.065-0.216-0.134-0.328-0.194 c-0.119-0.063-0.242-0.118-0.363-0.175c-0.115-0.054-0.228-0.112-0.346-0.161c-0.12-0.049-0.242-0.089-0.363-0.133 c-0.125-0.045-0.248-0.093-0.375-0.131c-0.122-0.037-0.247-0.064-0.371-0.095c-0.129-0.032-0.257-0.069-0.389-0.095 c-0.144-0.029-0.29-0.046-0.435-0.066c-0.113-0.016-0.224-0.038-0.338-0.049c-0.264-0.026-0.528-0.04-0.793-0.04H400 c-4.418,0-8,3.582-8,8s3.582,8,8,8h28.687L368,148.695l-18.343-18.344c-3.124-3.124-8.189-3.124-11.313,0l-64,64 c-3.125,3.125-3.125,8.19,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L344,147.322l18.343,18.344 c1.172,1.171,2.616,1.903,4.129,2.196c0.504,0.098,1.016,0.146,1.528,0.146s1.024-0.049,1.528-0.146 c1.513-0.293,2.957-1.025,4.129-2.196c0.001-0.001,0.002-0.002,0.002-0.003L440,99.322v28.687c0,4.418,3.582,8,8,8s8-3.582,8-8 V80.011C456,79.747,455.986,79.482,455.96,79.218z" />{" "}
                      </g>
                    </g>
                  </svg>

                  <p className="font-semibold text-2xl">100%</p>
                </div>
                <p className="text-sm">
                  Young and Bright professionals in team to nurture new ideas.
                </p>
              </div>
            </div>
            <div className="w-xl h-0.25 bg-gray-200 mt-40 mb-16 mx-auto"></div>
            <div className="w-full flex flex-row justify-center items-start max-h-fit gap-10">
              <div className="w-[60%] flex flex-col gap-5 justify-start items-start">
                <div className="text-start text-2xl font-semibold text-gray-900">
                  What is Re-con Services and what makes it a leader in
                  mechanical component manufacturing?
                </div>
                <div className="text-lg flex flex-col gap-1 text-gray-700 justify-start items-start">
                  <p className="text-start">
                    Founded in 2018 and based in Kolkata, Re-con Services has
                    rapidly emerged as a premier provider of cutting-edge
                    solutions in mechanical component manufacturing and
                    precision cutting tools.
                  </p>
                  <p className="text-start">
                    Our rise as an industry leader is rooted in a strong
                    commitment to innovation, quality, and customer
                    satisfaction.
                  </p>
                  <p className="text-start">
                    With a focus on delivering excellence, we serve diverse
                    sectors such as steel plants, mining machinery, and
                    railways, manufacturing essential components like gears,
                    pinions, shafts, and rollers that power heavy-duty
                    industrial operations.
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-full h-full "
                  src="https://www.reconservices.in/uploads/special_video_bg.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-xl h-0.25 bg-gray-200 my-16  mx-auto"></div>
            <div className="w-full flex flex-row-reverse justify-center items-start max-h-fit gap-10">
              <div className="w-[60%] flex flex-col gap-5 justify-start items-start">
                <div className="text-start text-2xl font-semibold text-gray-900">
                  What specialized services and products does Re-con Services
                  offer?
                </div>
                <div className="text-lg flex flex-col gap-1 text-gray-700 justify-start items-start">
                  <p className="text-start">
                    Re-con Services offers an expansive range of mechanical
                    engineering and manufacturing solutions. Our expertise
                    includes the design and production of press tools, jigs,
                    fixtures, and special-purpose machines tailored to client
                    needs.
                  </p>
                  <p className="text-start">
                    We excel in creating precise mechanical drawings and
                    customized components for complex industrial applications.
                    Beyond manufacturing, we are also trusted distributors of
                    premium-quality cutting tools, including CNC-compatible
                    tools, gear cutting tools, and solid carbide tooling.
                  </p>
                  <p className="text-start">
                    Our comprehensive product lineup ensures high performance
                    and durability across all applications.
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-full h-full"
                  src="https://www.reconservices.in/uploads/special_video_bg.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-xl h-0.25 bg-gray-200 my-16  mx-auto"></div>
            <div className="w-full flex flex-row justify-center items-start max-h-fit gap-10">
              <div className="w-[60%] flex flex-col gap-5 justify-start items-start">
                <div className="text-start text-2xl font-semibold text-gray-900">
                  How is Re-con Services embracing innovation through advanced
                  technologies like 3D printing?
                </div>
                <div className="text-lg flex flex-col gap-1 text-gray-700 justify-start items-start">
                  <p className="text-start">
                    At Re-con Services, we stay at the forefront of
                    technological advancement by offering specialized 3D
                    printing and scanning solutions.
                  </p>
                  <p className="text-start">
                    At Re-con Services, we stay at the forefront of
                    technological advancement by offering specialized 3D
                    printing and scanning solutions.
                  </p>
                  <p className="text-start">
                    Whether you're developing a new product or improving an
                    existing one, our state-of-the-art 3D equipment brings
                    unmatched precision and efficiency to every stage of your
                    project.
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-full h-full"
                  src="https://www.reconservices.in/uploads/special_video_bg.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 px-5 flex flex-col justify-start items-start max-w-[60vw] gap-7">
          <div className="text-4xl font-semibold text-gray-800">
            Vision and Mission
          </div>
          <div className="text-lg font-normal text-gray-600">
            At Re-con Services, we envision a future where our technical prowess
            and unwavering dedication drive superior solutions. Our team of
            experts, fueled by industry-leading knowledge and a passion for
            precision, is committed to ensuring that every project we undertake
            meets the highest standards of quality and efficiency. Partner with
            us to experience unparalleled craftsmanship and innovation in
            mechanical solutions. Trust Re-con Services to transform your ideas
            into reality with unmatched mechanical expertise and reliability.
            Our mission is to build sustainable relationships with our customers
            and clients and provide exceptional customer services by pursuing
            business through innovation and advanced technology.
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
