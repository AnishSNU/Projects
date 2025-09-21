export default function TemperatureControls({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}
