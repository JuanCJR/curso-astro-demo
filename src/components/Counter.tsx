import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span>{counter}</span>
      <button
        className="border px-4 py-2 text-xl ml-4 mr-4"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        className="border px-4 py-2 text-xl"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </>
  );
}
