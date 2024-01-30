import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutme">About Me</Link>
      </li>
      <li>
        <Link to="/academic">Academics</Link>
      </li>
      <li>
        <Link to="/myprojects">My Projects</Link>
      </li>
    </ul>
  );
}
