// App.jsx
// Top-level wrapper. Shows NavBar on every page, and renders the route content.

import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <AppRoutes />
    </div>
  );
}
