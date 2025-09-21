// Container.js
// Layout wrapper component: adds styling and a header.

import React from "react";

export default function Container({ children }) {
  return (
    <div style={styles.container}>
      <h2>🌡️ Thermostat</h2>
      {children}
    </div>
  );
}

const styles = {
  container: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    width: "220px",
    textAlign: "center",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9"
  }
};
