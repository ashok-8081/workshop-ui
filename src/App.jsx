import { Routes, Router, Navigate, Route, useNavigate } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Status from "./pages/Status";
import Propose from "./pages/Propose";
import Types from "./pages/Types";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Booking />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/status" element={<Status />} />
        <Route path="/propose" element={<Propose />} />
        <Route path="/types" element={<Types />} />
      </Routes>
    </>
  );
}

export default App;
