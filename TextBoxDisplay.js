// TextBoxDisplay.js
// Displays the current temperature and unit.

import React from "react";

export default function TextBoxDisplay({ temperature, unit }) {
  return (
    <div style={styles.display}>
      {temperature} {unit}
    </div>
  );
}

const styles = {
  display: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    margin: "15px 0",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#fff"
  }
};
