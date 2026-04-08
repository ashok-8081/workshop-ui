import React from "react";
import WorkshopCard from "./WorkshopCard";

const FeaturedWorkshops = () => {
  const workshops = [
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
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Workshops</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} {...workshop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkshops;
