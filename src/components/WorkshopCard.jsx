import React from "react";

const WorkshopCard = ({ title, instructor, date, location, type }) => {
  return (
    <div className="bg-white rounded0xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">by {instructor}</p>
      <div className="mt-2 text-sm">
        <p>📅 {date}</p>
        <p>📍 {location}</p>
        <p>🏷 {type}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
        <button className="border px-3 py-1 rounded">Register</button>
      </div>
    </div>
  );
};

export default WorkshopCard;
