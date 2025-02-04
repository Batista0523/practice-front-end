import React from "react";
import { Link } from "react-router-dom";





function Allteam({ teamData }) {

  
  return (
    <div>
      <Link to='/'>Home</Link>
      {teamData.map((team, index) => (
        <div
          style={{
            border: "2px solid blue",
            width: "200px",
            margin: "30px",
          }}
          key={index}
        >
          <Link to={`/oneTeam/${team.id}`}>
            <h4>
              Team : <strong>{team.name}</strong>
            </h4>
          </Link>
          <p>
            Stadium : <strong>{team.stadium}</strong>
          </p>
          <p>
            City : <strong> {team.city}</strong>
          </p>
          <p>
            Founded Year : <strong>{team.founded_year}</strong>
          </p>
          <p>
            Championships : <strong>{team.championships}</strong>
          </p>
          <img
            style={{ height: "100px", border: "2px solid black" }}
            src={team.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default Allteam;
