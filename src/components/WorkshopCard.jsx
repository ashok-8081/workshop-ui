import React from "react";
import { useNavigate } from "react-router-dom";

const WorkshopCard = ({ title, instructor, date, location, type }) => {
  const navigate = useNavigate();
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
        <button className="border px-3 py-1 rounded"
        onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default WorkshopCard;
