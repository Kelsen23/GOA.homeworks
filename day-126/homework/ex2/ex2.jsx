
const boolean = false;

const variable = (
  <div>
    {boolean ? 'Welcome' : 'Please log in'}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(variable);

