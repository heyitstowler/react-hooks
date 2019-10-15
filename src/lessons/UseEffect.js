import React, { useState, useEffect } from "react";

export default function UseStateExample() {
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
