import React, { useState } from 'react'

export default function UseStateExample() {
  // TODO: Let's step it up by adding even more state!
  // First, let's wire up this counter, just like before.
  // Then, let's also set the component to update the border color on the click of the corresponding buttons!
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red')
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
