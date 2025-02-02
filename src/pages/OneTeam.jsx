import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OneTeam() {
  const url = import.meta.env.VITE_URL;
  const [oneTeam, setOneTeam] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/team/${id}`);
        const data = await response.json();

        if (data.success) {
          setOneTeam(data.payload);
        } else {
          console.log("Error fetching one team", data);
        }
      } catch (err) {
        console.error("Error fetching one team", err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {oneTeam ? (
        <div>
          <h2>{oneTeam.name}</h2>
          <h2>{oneTeam.championships}</h2>
        </div>
      ) : (
        <p>no team</p>
      )}
    </div>
  );
}

export default OneTeam;
