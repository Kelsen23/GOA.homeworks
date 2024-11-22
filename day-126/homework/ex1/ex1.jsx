
const arr = ["Apple", "Banana", "Orange", "Cherry"];

const list = (
  <div>
    <ul>{arr.map((value, index) => {
      return <li key={index}>{value}</li>;
    })}</ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(list);

