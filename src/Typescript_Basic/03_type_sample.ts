// This file is a sample TypeScript file demonstrating basic type annotations.
(() => {
// const or let, variable name ":" type "=" value
let age: number = 30;
age = 35; // This is allowed because 35 is a number.
// age = "a"; // This will cause a type error because "a" is not a number.
//let inferredType = "Hello"; // TypeScript infers that this variable is of type string.
let name: string = "Oskar";
console.log(age);
console.log(name);
const isStudent = false; // TypeScript infers that isStudent is of type boolean.
console.log(isStudent);
})(); // IIFE (Immediately Invoked Function Expression) to avoid polluting the global scope.
