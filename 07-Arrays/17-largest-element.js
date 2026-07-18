// Example: Largest Element in Array

const numbers = [15, 42, 8, 91, 27];

let largest = numbers[0];

for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}

console.log(largest);
