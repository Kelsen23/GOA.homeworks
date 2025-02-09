const promise = new Promise((resolve, reject) => {
    const isWorkingOk = false;

    if (isWorkingOk) {
      resolve("Everything working ok!");
    } else {
      reject("Something went wrong!");
    }
})

promise.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
})