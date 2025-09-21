function TemperatureDisplay({ celsius, fahrenheit }) {
  return (
    <div>
      <p>{celsius !== "" ? `${celsius} °C` : "--"} </p>
      <p>{fahrenheit !== "" ? `${fahrenheit} °F` : "--"} </p>
    </div>
  );
}

export default TemperatureDisplay;
