import React from "react";
import Overview from "../components/custom/overview";
import TestimonialsSection from "../components/custom/testimonial";
import CTA from "../components/custom/CallToAction";
import Distributers from "../components/custom/dist";
import Features from "../components/custom/features";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Hero from "../components/custom/heroSection";
import Manufacturing from "../components/custom/manufacturing-section";

const clients = [
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

function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Hero />
        <Overview />
        <Features />
        <Manufacturing />
        <TestimonialsSection />
        <InfiniteMovingCards items={clients} />
        <Distributers />
      </div>
    </>
  );
}

export default Home;
