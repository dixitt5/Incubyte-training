import React, { type ReactElement } from 'react'

const ErrorPage = (): ReactElement => {
  return (
    <div className="text-3xl font-bold text-center text-red-600">
      <p className="mx-2 mt-5">Error 404: Page not found!</p>
    </div>
  )
}

export default ErrorPage
