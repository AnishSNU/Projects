import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Education, Skills, Experience, Achievements, Projects } from "./CVPages.js";
import {Thermostat} from "./thermostat/Thermostat.js" 
import {Timer} from "./timer/Timer.js"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/thermostat" element={<Thermostat />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}
