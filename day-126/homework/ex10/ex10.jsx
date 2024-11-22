
const name = "Terrence Andrew Davis";
const greeting = "Hello"

const container = (
  <div>
    {greeting}, {name}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);