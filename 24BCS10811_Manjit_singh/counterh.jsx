import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Add
      </button>
    </div>
  );
}