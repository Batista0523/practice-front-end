import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as streamingAvailability from "streaming-availability";
function MoviesApi() {
  const [movie, setMovie] = useState(null);
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;
  const host = import.meta.env.VITE_MOVIES_HOST;
  const url = import.meta.env.VITE_MOVIES_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new streamingAvailability.Client(
          new streamingAvailability.Configuration({
            apiKey,
          })
        );
        const data = await client.showsApi.getShow({
          id: "tt0068646",
        });
        console.log(data, "Movie Data");
        if (data) {
          setMovie(data);
        } else {
          console.log("Error fetching data", data);
        }
      } catch (err) {
        console.error("internal error", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      {movie ? <div>{movie.originalTitle}</div> : <p>loading...</p>}
    </div>
  );
}

export default MoviesApi;
