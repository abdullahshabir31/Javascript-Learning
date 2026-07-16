// Example: Function Scope

let message = "Global Variable";

function showMessage() {
  let localMessage = "Local Variable";

  console.log(message);
  console.log(localMessage);
}

showMessage();
