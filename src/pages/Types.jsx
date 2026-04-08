import React from "react";
import Navbar from "../components/Navbar";
const Types = () => {
  const workshopTypes = [
    "Programming",
    "Electronics",
    "IoT",
    "Machine Learning",
    "Presentation Skills",
    "Simulation",
  ];
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center mb-10">
        Workshop Types
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshopTypes.map((type, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold text-slate-700">{type}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
