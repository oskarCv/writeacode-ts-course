// This file demonstrates the use of union types in TypeScript, allowing a variable to hold values of multiple types.
// Union types are defined using the pipe (|) symbol, which separates the different types that a variable can hold.
// In this example, the variable 'dinamicValue' can hold either a string or a number, and the function 'greet' can accept either type as an argument.
(( ) => {
let dinamicValue: string | number; // A variable that can hold either a string or a number.
dinamicValue = "Hello, TypeScript!";
console.log(dinamicValue); // Output: Hello, TypeScript!
dinamicValue = 42;
console.log(dinamicValue); // Output: 42
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(30)); // Output: age: 30
function greet(data: string | number): string {
  if (typeof data === "string") {
    return `Hello, ${data}!`;
  } else {
    return `age: ${data}`;
  }
}})();
