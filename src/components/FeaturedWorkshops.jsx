import React from "react";
import WorkshopCard from "./WorkshopCard";

const FeaturedWorkshops = () => {
  const workshops = () => [
    {
      id: 1,
      title: "Python Workshop",
      instructor: "IIT Bombay",
      date: "15 April 2026",
      location: "Online",
      type: "Programming",
    },
    {
      id: 2,
      title: "Scilab Workshop",
      instructor: "FOSSEE Team",
      date: "20 April 2026",
      location: "Delhi",
      type: "Simulation",
    },
  ];
  return (
  <section >
    <div>
      <h2>Featured Workshops</h2>
    </div>
  </section>
);
};

export default FeaturedWorkshops;
