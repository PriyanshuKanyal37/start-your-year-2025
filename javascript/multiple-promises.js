const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1000)
);
const promise3 = Promise.resolve("Promise 3 resolved");

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
