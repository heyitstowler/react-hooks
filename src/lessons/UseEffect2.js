import React, { useState, useEffect } from 'react'

export default function UseStateExample() {
  // TODO: We've brought back our fancy border! Let's pretend that our effect is something computationally
  // expensive or something like a fetch that we don't want to run unless the count has changed.
  // Let's set up our counter to update document.title with the current count, but only when the
  // count changes!
  // I've added an alert to tell you when we're updating the title, so you know how often we're
  // running our effect!

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')

  useEffect(() => {
    window.alert('Updating the title!')
    document.title = `Clicked ${count} times!`;
    return () => {
      document.title = "React App";
    };
  }, [count]);

  return (
    <div style={{border: `5px solid ${color}`, width: "50%", margin: "auto", padding: "20px"}}>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{padding: "10px"}}>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('yellow')}>Yellow</button>
      </div>
    </div>
  );
}
