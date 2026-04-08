import FeaturedWorkshops from "../components/FeaturedWorkshops";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <FeaturedWorkshops />
      <Footer />
    </>
  );
};

export default Home;
