import React from "react";

export default function TemperatureControls({ onIncrease, onDecrease }) {
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={onDecrease}>- Decrease</button>
      <button onClick={onIncrease} style={{ marginLeft: "10px" }}>
        + Increase
      </button>
    </div>
  );
}
