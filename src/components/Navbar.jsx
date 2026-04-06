import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">FOSSEE Workshops</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Statistics
          </a>
          <a href="#" className="block">
            Status
          </a>
          <a href="#" className="block">
            Propose
          </a>
          <a href="#" className="block">
            Types
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block hover:text-blue-400">
            Statistics
          </a>
          <a href="#" className="block hover:text-blue-400">
            Status
          </a>
          <a href="#" className="block hover:text-blue-400">
            Propose
          </a>
          <a href="#" className="block hover:text-blue-400">
            Types
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
