const promise = new Promise((resolve, reject) => {
  const randomOutcome = Math.random();

  if (randomOutcome > 0.5) {
    resolve("Succes!");
  } else {
    reject("Failed!");
  }
});

promise.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
})