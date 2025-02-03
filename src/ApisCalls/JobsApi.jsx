import React, { useEffect, useState } from "react";

function JobsApi() {
  const [jobs, setJobs] = useState([]);
  const url = import.meta.env.VITE_JOBS_URL;
  const host = import.meta.env.VITE_JOBS_HOST;
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;
  


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": host,
          },
        };


        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data, "here data");
        if (data) {
          setJobs(data.data);
        }
      } catch (err) {
        console.error("Error fetchind data", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          <h4>Company {job.company}</h4>
          <p>
            <strong>Job Title : </strong>
            {job.job_title}
          </p>
          <p>
            <strong>Location : </strong> {job.location}
          </p>
          <p>
            <strong>Base Salary : </strong> {job.max_base_salary}
          </p>
        </div>
      ))}
    </div>
  );
}

export default JobsApi;
