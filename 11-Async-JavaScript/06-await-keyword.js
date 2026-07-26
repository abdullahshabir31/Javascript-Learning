// Example: Await Keyword

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

async function showMessage() {
  const message = await getMessage();
  console.log(message);
}

showMessage();
