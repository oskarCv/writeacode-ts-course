// This file demonstrates the use of the 'any' type in TypeScript, which allows a variable to hold any type of value without type checking.
// As rule is better to avoid using 'any' type, but it can be useful in certain situations where you need to work with dynamic data or when migrating JavaScript code to TypeScript.
// any is intended to use when migrating JavaScript code to TypeScript, or when working with dynamic data where the type is not known in advance. It can also be useful for prototyping or when you want to temporarily disable type checking for a specific variable.

(()=>{
  let dinamicValue: any = "Hello, World!"; // The variable dynamicValue is of type any, and it can hold any type of value.
  const message = (dinamicValue as string).toUpperCase(); // We can use type assertion to treat [cast] dynamicValue as a string and call string methods on it.
  console.log(dinamicValue); // Output: Hello, World!
  console.log(message); // Output: HELLO, WORLD!


  dinamicValue = 42; // Now dynamicValue holds a number.
  const numberValue = <number>dinamicValue; // We can also use angle bracket syntax for type assertion to treat dynamicValue as a number.
  console.log(dinamicValue); // Output: 42
  console.log(numberValue); // Output: 42

  dinamicValue = { message: "This is an object now." }; // Now dynamicValue holds an object.
  console.log(dinamicValue); // Output: { message: "This is an object now." }

  dinamicValue = [1, 2, 3]; // Now dynamicValue holds an array.
  console.log(dinamicValue); // Output: [1, 2, 3]

  dinamicValue = true; // Now dynamicValue holds a boolean.
  console.log(dinamicValue); // Output: true

})();
