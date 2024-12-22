import {useEffect, useState} from 'react'

const App = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.Height);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Resized happened")
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
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
    </div>
  )
}

export default App