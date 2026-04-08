import { Routes, Router, Navigate, Route, useNavigate } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Status from "./pages/Status";
import Propose from "./pages/Propose";
import Types from "./pages/Types";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Booking />
            </Layout>
          }
        />
        <Route
          path="/statistics"
          element={
            <Layout>
              <Statistics />
            </Layout>
          }
        />
        <Route
          path="/status"
          element={
            <Layout>
              <Status />
            </Layout>
          }
        />
        <Route
          path="/propose"
          element={
            <Layout>
              <Propose />
            </Layout>
          }
        />
        <Route
          path="/types"
          element={
            <Layout>
              <Types />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
