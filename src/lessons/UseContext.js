import React, { useContext, useState } from 'react'
import { ContrivedContext } from '../Context'

export default function UseContext() {
  // TODO: Alright, now we're really stepping it up here! Context is a great way to share state
  // across multiple components. Let's see how hooks help us with that!
  // I've created a context for you that keeps track of a list of text strings called "Foos".
  // Let's set up a FooReader to display the list of foos, as well as a FooWriter to add to our list of foos!
  return (
    <div className="side-by-side">
      <FooReader />
      <FooWriter />
    </div>
  )
}


function FooReader () {
  // TODO: Let's read from our list of Foos and display them in a list here.
  // ContrivedContext passes us the list of foos on the 'foos' key of its value.
  
  // replace this!
  const foos = []

  return (
    <section>
      <h2>Foos</h2>
      <ol>
        { foos.map((foo, idx) => (
          <li key={idx}>{foo}</li>
        ))}
      </ol>
    </section>
  )
}

function FooWriter () {
  // TODO: Let's update Foos and display them in a list here.
  // ContrivedContext passes us an updater function on the 'addFoo' key of its value.
  // For fun, let's also tell the writer how many foos we have
  
  //  Replace these!
  const foos = []
  const addFoo = () => {}

  const count = foos.length
  const [foo, updateFoo] = useState('')

  const handleChange = e => {
    const { value } = e.currentTarget
    updateFoo(value)
  }
  const submitFoo = e => {
    e.preventDefault()
    addFoo(foo)
    updateFoo('')
  }

  return (
    <section>
      <h2>Add a Foo</h2>
      <p>Currently {count} foos. Add another?</p>
      <form onSubmit={submitFoo}>
        <input type="text" value={foo} onChange={handleChange} />
        <button type="submit">Add foo</button>
      </form>
    </section>
  );
}