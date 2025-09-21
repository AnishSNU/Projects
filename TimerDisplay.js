/**
 * TimerDisplay.js
 * Converts total seconds to HH:MM:SS and displays it.
 */
export default function TimerDisplay({ time }) {
  const format = (num) => String(num).padStart(2, "0");

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="text-7xl font-mono text-red-600 bg-black p-6 rounded-lg shadow-md">
      {format(hours)}:{format(minutes)}:{format(seconds)}
    </div>
  );
}
