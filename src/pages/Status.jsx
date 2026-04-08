import React from "react";
import Navbar from "../components/Navbar";

const Status = () => {
  const statusData = [
    {
      id: 1,
      title: "Python Workshop",
      status: "Upcoming",
      date: "15 April 2026",
    },
    {
      id: 2,
      title: "IoT Workshop",
      status: "Ongoing",
      date: "10 April 2026",
    },
    {
      id: 3,
      title: "Scilab Training",
      status: "Completed",
      date: "1 April 2026",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-100" px-6 py-10>
      <h1 className="text-3xl font-bold mb-8 text-center">Workshop Status</h1>

      <div className="gird md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statusData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-gray-600">Data: {item.data}</p>

            <span
              className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${item.status === "Upcoming" ? "bg-blue-100 text-blue-600" : item.status === "Ongoing" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
