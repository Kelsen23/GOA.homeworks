
const Fun = () => {
  return <h1>Hello React!</h1>;
}

const container = (
  <div>
    <Fun />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);