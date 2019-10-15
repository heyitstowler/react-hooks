import React, { useState, useEffect } from "react";

export default function UseStateExample() {
  // TODO: Okay, you know how to use a counter, I get it. Let's use some effects.
  // Let's set up our counter to update document.title with the current count
  // The title should be 'Clicked [current count] times!'
  // We should also set the title back to 'React App' when we leave.
  const [count, setCount] = useState(0);

  // Update the title here

  return (
    <div>
      <p>Check the title!</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
