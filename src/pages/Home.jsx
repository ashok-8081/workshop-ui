import React from "react";
import Navbar from "../components/Navbar";
import WorkshopCard from "../components/WorkshopCard";

const Home = () => {
  return <div>
    <Navbar />
    <div className="p-4 grid gap-4">
    <WorkshopCard />
    <WorkshopCard />
    </div>
  </div>;
};

export default Home;
