// Example: Palindrome Check

const text = "madam";

const reversed = text.split("").reverse().join("");

if (text === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
