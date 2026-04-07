import { Routes, Router, Navigate, Route, useNavigate } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
