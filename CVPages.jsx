// pages/CVPages.jsx
// Each export below is a simple functional component
// representing a section of your CV.

import React from "react";

// ---------- Home ----------
export function Home() {
  return (
    <section>
      <h1>Anish Parthasarathy</h1>
      <p>Email: anish23110140@snuchennai.edu.in | Contact: 9962500605</p>
      <h2>Summary</h2>
      <p>
        I am Anish Parthasarathy, a passionate coder who strives
        to give my best in everything.
      </p>
    </section>
  );
}

// ---------- Education ----------
export function Education() {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        <li>The Schram Academy, Chennai (2011–2023)</li>
        <li>Shiv Nadar University Chennai (2023–present)</li>
      </ul>
    </section>
  );
}

// ---------- Skills ----------
export function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
      </ul>
    </section>
  );
}

// ---------- Experience ----------
export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <p>Volunteered for Capture the Flag event at SNU Chennai.</p>
    </section>
  );
}

// ---------- Achievements ----------
export function Achievements() {
  return (
    <section>
      <h2>Achievements</h2>
      <ul>
        <li>
          Got certificate for completing the French A1 foreign
          language course at SNU Chennai.
        </li>
      </ul>
    </section>
  );
}

// ---------- Projects ----------
export function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        <li>Malware Management System using SQL</li>
        <li>Bank Management System using Java</li>
        <li>Pulse Oximeter using Arduino and LCD Display</li>
      </ul>
    </section>
  );
}
