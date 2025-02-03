import "./App.css" 

const App = () => {

  const btnStyle = {backgroundColor: "green", marginTop: 10, padding: "1rem"}

  return (
    <div>
      <h1 className="Hello">Hello!</h1>
      <button style={{backgroundColor: "blue", marginTop: 10, padding: 5}}>Hello!</button>
      <button style={btnStyle}>Hello!</button>
    </div>
  )
}

export default App