import React, { useState, useEffect } from "react";

export default function UseStateExample() {
  // TODO: Okay, you know how to use a counter, I get it. Let's use some effects.
  // Let's set up our counter to update document.title with the current count
  // The title should be 'Clicked [current count] times!'
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times!`
    return () => {
      document.title = 'React App'
    }
  })
  return (
    <div>
      <p>Check the title!</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
