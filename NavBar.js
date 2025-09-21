import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/education" style={{ margin: "0 10px" }}>Education</Link>
      <Link to="/skills" style={{ margin: "0 10px" }}>Skills</Link>
      <Link to="/experience" style={{ margin: "0 10px" }}>Experience</Link>
      <Link to="/achievements" style={{ margin: "0 10px" }}>Achievements</Link>
      <Link to="/projects" style={{ margin: "0 10px" }}>Projects</Link>
      <Link to="/thermostat" style={{ margin: "0 10px" }}>Thermostat</Link>
      <Link to="/timer" style={{ margin: "0 10px" }}>Timer</Link>
    </nav>
  );
}
