import React, { useEffect, useState } from 'react'

const Count = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("re-render");
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setName(name + 'a')}>+a</button>
      {count}
      {name}
    </div>
  )
}

export default Count