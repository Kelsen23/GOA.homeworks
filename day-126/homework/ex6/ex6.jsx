
const name= "John"
const age = 26;

const container = (
  <div>
    <p>{name} is {age}</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);