import React from "react";

const testimonials = [
  {
    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    name: "Priya Sharma",
    role: "Client",
    text: "“We have been partnering with Re-con Services for over a year now, and they have greatly enhanced our manufacturing capabilities. Their cutting tools are of superior quality and have made a noticeable difference in our output.”",
  },
  {
    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png",
    name: "Arvind Mehta",
    role: "Client",
    text: "“Re-con Services's professionalism and dedication are commendable. Since partnering with them, we've experienced a significant boost in our efficiency and product quality. I highly recommend Re-con Services to anyone in the manufacturing industry.”",
  },
  {
    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png",
    name: "Rajesh Kumar",
    role: "Client",
    text: "“Re-con Services has been an absolute game-changer for our manufacturing processes. The team is highly knowledgeable and always ready to assist with any issues we encounter.”",
  },
  {
    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png",
    name: "Arvind Mehta",
    role: "Client",
    text: "“Re-con Services's professionalism and dedication are commendable. Since partnering with them, we've experienced a significant boost in our efficiency and product quality. I highly recommend Re-con Services to anyone in the manufacturing industry.”",
  },
];

const TestimonialCard = ({ img, name, role, text }) => (
  <div className="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500">
    <div className="relative mb-4">
      <img className="h-16 w-16 rounded-full" src={img} alt={name} />
      <svg
        className="absolute top-0 -right-2"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10.5" cy="10.5" r="8.5" fill="#2563EB" />
        <path
          d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
          fill="#fff"
        />
      </svg>
    </div>
    <p>{text}</p>
    <p className="text-lg text-gray-700 font-medium mt-5">{name}</p>
    <p className="text-xs">{role}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="my-20 flex flex-col items-center text-center">
      <p className="text-4xl font-bold max-w-5xl mb-[72px]">
        What our <span className="text-blue-600">Clients</span> have to say
        about us!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
