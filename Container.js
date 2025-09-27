/**
 * Container.js
 * Wrapper component for styling and heading.
 */
export default function Container({ children }) {
  return (
    <div className="p-6 bg-black text-red-600 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Countdown Clock</h1>
      {children}
    </div>
  );
}
