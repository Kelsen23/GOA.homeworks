
const users = [{name: "Jaba", age: 29}, {name: "Cobra", age: 30}, {name: 'HolyC', age: 22}];

const container = (
  <table>
    {users.map((user, index) => {
      return <p>{user.name} is {user.age} years old.</p>
    })}
  </table>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);