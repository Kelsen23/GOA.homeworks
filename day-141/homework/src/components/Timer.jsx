import React, { useState, useEffect } from 'react'

const Timer = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);  

    return () => clearInterval(time);
  }, [])
 
  return (
    <div>
      <h1>Timer: {count}s.</h1>
    </div>
  )
}

export default Timer