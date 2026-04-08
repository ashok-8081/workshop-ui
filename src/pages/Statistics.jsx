import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Statistics = () => {
  const statisticData = [
    {
      id: 1,
      totalWorkshop: 120,
      participants: 3500,
      citiesCovered: 20,
    },
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Workshop Statistics</h1>

        {statisticData.map((statistic) => (
          <div key={statistic.id} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-gray-500">Total Workshops</h2>
              <p className="text-2xl font-bold">{statistic.totalWorkshop}</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-gray-500">Participants</h2>
              <p className="text-2xl font-bold">{statistic.participants}</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-gray-500">Cities Covered</h2>
              <p className="text-2xl font-bold">{statistic.citiesCovered}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistics;
