import React, { useState } from 'react'

export default function UseStateExample() {
  // TODO: Let's step it up by adding even more state!
  // First, let's wire up this counter, just like before.
  // Then, let's also set the component to update the border color on the click of the corresponding buttons!
  // replace these!
  const color = 'black'
  const count = 0
  return (
    <div style={{border: `5px solid ${color}`, width: "50%", margin: "auto", padding: "20px"}}>
      <p>Current count: {count}</p>
      <button>Increment</button>
      <button>Reset</button>
      <div style={{padding: "10px"}}>
        <button>Red</button>
        <button>Blue</button>
        <button>Green</button>
        <button>Yellow</button>
      </div>
    </div>
  );
}
