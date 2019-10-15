import React, { useContext, useState } from 'react'
import { ContrivedContext } from '../Context'

export default function UseContext() {
  return (
    <div className="side-by-side">
      <FooReader />
      <FooWriter />
    </div>
  )
}


function FooReader () {
  const { foos } = useContext(ContrivedContext)

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
  const { addFoo, foos } = useContext(ContrivedContext)
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