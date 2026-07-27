// Example: JSON Methods

const student = {
  name: "Abdullah",
  age: 24,
};

const jsonData = JSON.stringify(student);

console.log(jsonData);

const objectData = JSON.parse(jsonData);

console.log(objectData);
