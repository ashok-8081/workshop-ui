import Navbar from "../components/Navbar";
import WorkshopCard from "../components/WorkshopCard";

const Home = () => {
  const workshops = [
    {
      id: 1,
      title: "Python Workshop",
      instructor: "IIT Bombay",
      date: "12 April 2026",
      location: "Online",
      type: "Programming"
    },
    {
      id: 2,
      title: "Scilab Workshop",
      instructor: "FOSSEE Team",
      date: "18 April 2026",
      location: "Delhi",
      type: "Simulation"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} {...workshop} />
        ))}
      </div>
    </div>
  );
};

export default Home;