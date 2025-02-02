import React, { useState, useEffect } from "react";
import Allteam from "./pages/Allteam";
import OneTeam from "./pages/OneTeam";
import JobsApi from "./ApisCalls/JobsApi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [ team , setTeam ] = useState([])
  const url = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch(`${url}/team`)
        const data = await response.json()
        // console.log(data)
        if(data.success) {
          setTeam(data.payload)
        }else{
          console.log("Error fetching data" , data)
        }
      }catch(err){
        console.error("Error fetching data internal" , err)

      }
    }
    fetchData()
  },[])
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Allteam  teamData={team}/>} /> */}
          <Route path="/" element={<JobsApi/>} />
          <Route path="/oneTeam/:id" element={<OneTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
