const promise = new Promise((resolve, reject) => {
  const timePassed = false;

  if (timePassed) {
    resolve("2 seconds have passed");
  } else {
    reject("Time pass failed");
  }
})

promise.then((response) => {
  setTimeout(() => {
    console.log(response);
  }, 2000);
})
.catch((error) => {
  console.log(error);
})