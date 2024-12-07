const cart = [
  { name: "Apple", price: 1.5, quantity: 4 },
  { name: "Banana", price: 0.5, quantity: 6 },
  { name: "Orange", price: 2, quantity: 3 }
];

const result = cart.reduce((accumulator, currentValue) => {return accumulator + (currentValue.price * currentValue.quantity)}, 0)

console.log(result);