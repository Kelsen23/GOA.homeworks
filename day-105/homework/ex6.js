const promise = new Promise((resolve, reject) => {
  const dataFetched = true;

  if (dataFetched) {
    resolve("Data Fetched!");
  } else {
    reject("Data Failed To Fetch!");
  }
});

promise.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.error(error);
})