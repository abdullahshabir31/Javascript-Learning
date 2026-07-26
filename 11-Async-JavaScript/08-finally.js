// Example: finally

Promise.resolve("Task Completed")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Execution Finished");
  });
