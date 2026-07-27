// Example: Promise.allSettled()

const promise1 = Promise.resolve("Success");

const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results),
);
