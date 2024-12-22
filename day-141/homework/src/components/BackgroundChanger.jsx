import React, { useState } from 'react'

const BackgroundChanger = () => {

  const [color, setColor] = useState('white');

  const changeToOrange = () => {
    setColor('orange')
  }

  const changeToBlue = () => {
    setColor('blue')
  }

  return (
    <div style={{backgroundColor: color}}>
      <button onClick={changeToOrange}>Orange</button>
      <button onClick={changeToBlue}>Blue</button>
    </div>
  )
}

export default BackgroundChanger