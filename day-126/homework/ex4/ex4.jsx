
const obj = { backgroundColor: 'cyan', color: 'white' };

const container = (
  <div style={obj}>
    <h1>Hello React!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);