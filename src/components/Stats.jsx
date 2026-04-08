import React from "react";

const Stats = () => {
  const stats = [
    { number: "150+", label: "Workshops Conducted" },
    { number: "10K+", label: "Students Registered" },
    { number: "25+", label: "Cities Covered" },
    { number: "50+", label: "Expert Mentors" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-100 p-6 rounded-xl text-center shadow-sm"
          >
            <h2 className="text-3xl font-bold text-indigo-600">
              {stat.number}
            </h2>
            <p className="text-slate-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
