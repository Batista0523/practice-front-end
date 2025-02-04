import React, { useState, useEffect } from "react";
import Allteam from "./pages/Allteam";
import OneTeam from "./pages/OneTeam";
import JobsApi from "./ApisCalls/JobsApi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MoviesApi from "./ApisCalls/MoviesApi";

function App() {
  const [team, setTeam] = useState([]);
  const url = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/team`);
        const data = await response.json();
        // console.log(data)
        if (data.success) {
          setTeam(data.payload);
        } else {
          console.log("Error fetching data", data);
        }
      } catch (err) {
        console.error("Error fetching data internal", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsApi />} />
          <Route path="/movies" element={<MoviesApi />} />
          <Route path="/mlb" element={<Allteam teamData={team} />} />
          <Route path="/oneTeam/:id" element={<OneTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
