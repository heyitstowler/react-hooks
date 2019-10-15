import React, { useState } from 'react'

export default function UseStateExample() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
