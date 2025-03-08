import React from 'react'

const Child = ({ error }) => {

  if (error) {
    throw new Error("An error was detected");
  }

  return (
    <div>
      Hello!
    </div>
  )
}

export default Child