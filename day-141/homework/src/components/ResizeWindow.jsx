import {useEffect, useState} from 'react'

const App = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [result, setResult] = useState('');

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

      if (window.innerWidth > window.innerHeight) {
        setResult('Window is Horizontal')
      } else {
        setResult('Window is Vertical')
      }
    })

    return () => {
      console.log("clean Terminal")
      window.removeEventListener("resize", () => {
        setHeight(0);
        setWidth(0);
      })
    }
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
      <div>Width: {width}</div>
      <div>Height: {height}</div>
      <div>Result: {result}</div>
    </div>
  )
}

export default App