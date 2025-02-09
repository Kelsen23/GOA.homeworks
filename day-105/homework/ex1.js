const promise = new Promise((resolve, reject) => {
  const greeting = false;

  if (greeting) {
    resolve("Hello, Promise!");
  } else {
    reject("No greeting to Promise :(");
  }
});

promise.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});