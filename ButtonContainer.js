// ButtonContainer.js
// Renders the control buttons: increase, decrease, and toggle unit.

import React from "react";

export default function ButtonContainer({ onIncrease, onDecrease, onToggleUnit }) {
  return (
    <div style={styles.buttonContainer}>
      {/* Increase button */}
      <button onClick={onIncrease} aria-label="Increase temperature">+</button>

      {/* Decrease button */}
      <button onClick={onDecrease} aria-label="Decrease temperature">-</button>

      {/* Toggle unit button */}
      <button onClick={onToggleUnit} aria-label="Toggle Celsius/Fahrenheit">
        °C/°F
      </button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "5px"
  }
};
