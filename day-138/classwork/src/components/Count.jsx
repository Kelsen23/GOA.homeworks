import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment}>+1</button>
      <p>{count}</p>
    </div>
  )
}

export default App