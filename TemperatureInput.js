function TemperatureInput({ value, onChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TemperatureInput;
