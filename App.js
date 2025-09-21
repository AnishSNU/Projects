// App.js
// Main application component: manages temperature state and unit conversions.

import React, { useState } from "react";
import Container from "./Container";
import TextBoxDisplay from "./TextBoxDisplay";
import ButtonContainer from "./ButtonContainer";

export default function App() {
  // Store Celsius as the single source of truth (best practice).
  const [celsius, setCelsius] = useState(25); // default: 25°C
  const [isCelsius, setIsCelsius] = useState(true); // toggle between units

  // Increase Celsius by 1
  const increaseTemp = () => setCelsius(prev => prev + 1);

  // Decrease Celsius by 1
  const decreaseTemp = () => setCelsius(prev => prev - 1);

  // Toggle between Celsius and Fahrenheit display
  const toggleUnit = () => {
    setIsCelsius(prev => !prev);
  };

  // Compute Fahrenheit only when needed (derived value)
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <Container>
      {/* Display temperature with correct unit */}
      <TextBoxDisplay
        temperature={isCelsius ? celsius.toFixed(1) : fahrenheit.toFixed(1)}
        unit={isCelsius ? "°C" : "°F"}
      />

      {/* Pass handlers for buttons */}
      <ButtonContainer
        onIncrease={increaseTemp}
        onDecrease={decreaseTemp}
        onToggleUnit={toggleUnit}
      />
    </Container>
  );
}
