import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Sample data
const educationData = [
  { degree: "B.Tech CS", institution: "XYZ University", year: "2020-2024" }
];

const skillsData = ["React", "JavaScript", "HTML/CSS"];
const projectsData = [
  { name: "Portfolio Website", description: "Built with React" }
];
const experienceData = [
  { role: "Intern", company: "Tech Corp", year: "2023" }
];
const achievementsData = ["Winner of Hackathon 2023"];

// Components for each section
function Education() {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {educationData.map((item, i) => (
          <li key={i}>
            <strong>{item.degree}</strong> - {item.institution} ({item.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <ul>{skillsData.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>{projectsData.map((p, i) => <li key={i}><strong>{p.name}</strong>: {p.description}</li>)}</ul>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <ul>{experienceData.map((e, i) => <li key={i}><strong>{e.role}</strong> at {e.company} ({e.year})</li>)}</ul>
    </div>
  );
}

function Achievements() {
  return (
    <div>
      <h2>Achievements</h2>
      <ul>{achievementsData.map((a, i) => <li key={i}>{a}</li>)}</ul>
    </div>
  );
}

function CV() {
  return (
    <div>
      <nav>
        <Link to="education">Education</Link> | 
        <Link to="skills">Skills</Link> | 
        <Link to="projects">Projects</Link> | 
        <Link to="experience">Experience</Link> | 
        <Link to="achievements">Achievements</Link>
      </nav>
      <Routes>
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
}

export default CV;
