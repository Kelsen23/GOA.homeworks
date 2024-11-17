
const component = (
  <div>
    <h1>About React</h1>

    <p>React was developed by 'Meta' developers and is one of the most popular JavaScript library</p>
    <button onClick={() => console.log("Hello, React!")}>Click Me!</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);