
const p = <p>This is dynamic!</p>;

const container = (
  <div>
    {p}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);