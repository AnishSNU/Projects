/**
 * ButtonContainer.js
 * - Provides ▲ ▼ buttons to adjust time by 1 second.
 * - Provides Start, Stop, Reset controls.
 */
export default function ButtonContainer({ onStart, onStop, onReset, setTime, isRunning, time }) {
  // Adjust time by +1 or -1 second
  const adjustTime = (amount) => {
    if (!isRunning) {
      setTime((prev) => Math.max(0, prev + amount)); // prevent negative
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      {/* Time Adjuster (▲ ▼) */}
      <div className="flex flex-col items-center text-white">
        <button
          onClick={() => adjustTime(1)}
          disabled={isRunning}
          className="px-6 py-2 bg-gray-700 rounded text-2xl disabled:opacity-50"
        >
          ▲
        </button>
        <span className="mt-2 mb-2">Adjust Time</span>
        <button
          onClick={() => adjustTime(-1)}
          disabled={isRunning || time === 0}
          className="px-6 py-2 bg-gray-700 rounded text-2xl disabled:opacity-50"
        >
          ▼
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={onStart}
          disabled={time === 0 || isRunning}
          className={`px-6 py-2 rounded-lg ${
            time === 0 || isRunning
              ? "bg-gray-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          Start
        </button>
        <button
          onClick={onStop}
          disabled={!isRunning}
          className={`px-6 py-2 rounded-lg ${
            !isRunning ? "bg-gray-600 text-white" : "bg-yellow-500 text-white"
          }`}
        >
          Stop
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
