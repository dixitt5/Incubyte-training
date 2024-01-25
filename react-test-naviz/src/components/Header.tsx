import React from 'react'
import { type ReactElement } from 'react'

export function Header ({ flag }: { flag: boolean }): ReactElement {
  return (
    <>
      <h1>Pokemon { flag ? 'Home' : 'Details' }</h1>
    </>
  )
}
