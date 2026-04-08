import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* left content */}
        <div>
          <p className="text-indigo-400 font-medium mb-2">
            Learn • Build • Innovate
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Eplore Premium <br />
            FOSSEE Workshops
          </h1>

          <p className="mt-5 text-slate-400 text-lg">
            Join technical workshops conducted by IIT Bombay experts and enhance
            your practical skills in programming, simulation, electronics and
            more.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Register Now
            </Link>

            <button className="border border-r-slate-600 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
              Explore Workshops
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Event</h3>

          <div className="space-y-4">
            <p>📅 15 April 2026</p>
            <p>📍 IIT Bombay Campus</p>
            <p>🎓 Python & Machine Learning Workshop</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
