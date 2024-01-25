import React, { type ReactElement } from 'react'
import Header from './Header'

function App (): ReactElement {
  // const user = new User("Aditya", 0);
  return (
    <>
      <Header name={'Aditya'} age={20} />
      <Header name={'Naviz'} age={20} />
    </>
  )
}

export default App
