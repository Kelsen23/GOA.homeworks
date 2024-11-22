
const people = [{name: "Boba", items: ["Milk", "Banana", "Honey"]}, {name: "Biba", items: ["Chips", "Cookies", "Cheese"]}];

const container = (
  <div>
    {people.map((person, index) => {
      return (
      <div>
        <h1>{person.name}</h1>
        
        <ul>{person.name}'s items: {person.items.map((item, itemIndex) => {
          return <li>{item}</li>
        })}</ul>
      </div>
      );
    })}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);