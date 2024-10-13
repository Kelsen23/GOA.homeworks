const promise = new Promise((resolve, reject) => {
  const numMultiplication = true;

  if (numMultiplication) {
    resolve(5);
  } else {
    reject("We won't multiply given number");
  }
});

promise.then((response) => {
  console.log("We will multiply given number by 2. It is:", response * 2);
})
.catch((error) => {
  console.log(error);
})