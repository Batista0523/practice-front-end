import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>select an api</h1>
      <Link to='/movies'>Movies</Link>
      <br />
      <Link to='/jobs'>Jobs</Link>
      <br />
      <Link to='/mlb'>MLB</Link>
    </div>
  )
}

export default Home
