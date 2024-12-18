const animals = [
  { name: "Lion", species: "Panthera leo" },
  { name: "Elephant", species: "Loxodonta" },
  { name: "Penguin", species: "Spheniscidae" }
];

animals.forEach((animal, index) => {
  console.log(`${index + 1}. ${animal.name} is ${animal.species}`);
})