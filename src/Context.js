import React, { useState } from 'react'

export const ContrivedContext = React.createContext()

export function Provider({ children }) {
  const [foos, setFoos] = useState(['Initial foo'])

  const addFoo = foo => {
    setFoos([...foos, foo])
  }
  const value = {
    foos,
    addFoo
  }
  return (
    <ContrivedContext.Provider value={value}>
      {children}
    </ContrivedContext.Provider>
  )
}
