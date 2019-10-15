import React, { useState } from 'react'

export default function UseStateExample() {
  // TODO: Let's wire up this counter! It should:
  // 1) keep track of a count
  // 2) Increment the count on the click of the 'Increment' button
  // 3) Reset the count when you click the 'Reset' button
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
