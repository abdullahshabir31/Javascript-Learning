// Example: Promise.race()

const first = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 1000),
);

const second = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 2000),
);

Promise.race([first, second]).then((result) => console.log(result));
