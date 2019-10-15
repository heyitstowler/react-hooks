import React, { useState } from 'react'

export default function UseStateExample() {
  const [count, setCount] = useState(0)
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
