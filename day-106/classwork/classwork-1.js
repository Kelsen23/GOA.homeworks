const promise = new Promise((resolve, reject) => {

  const bookIsReturned = false;

  if (bookIsReturned) {
    resolve("Book is Returned!")
  } else {
    reject("Your friend didn't return the book");
  }

});

promise.then((response) => {
  console.log(response); // If the promise is resolved, it logs "Book is Returned!"
})
.catch((error) => {
  console.log(error); // .catch() catches the error if bookIsReturned is false and the promise is rejected
})