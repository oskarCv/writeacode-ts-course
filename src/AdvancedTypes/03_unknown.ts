// The 'unknown' type in TypeScript is a type-safe counterpart to 'any'. It represents any value, but unlike 'any', you cannot perform operations on an 'unknown' type without first asserting its type. This makes it safer to use, as it forces you to check the type of the value before using it.
// The 'unknown' type is useful when you want to accept any value but want to ensure that you perform type checks before using it. It is often used in situations where you are working with dynamic data or when you want to create a function that can accept values of any type while still maintaining type safety.
(()=>{
  let value: unknown; // Declaring a variable of type unknown.
  value = "Hello, World!"; // Assigning a string value to the unknown variable.
  console.log(value); // Output: Hello, World!

  value = 42; // Now assigning a number value to the unknown variable.
  console.log(value); // Output: 42

  value = { message: "This is an object now." }; // Now assigning an object to the unknown variable.
  console.log(value); // Output: { message: "This is an object now." }

  // To use the value of type unknown, we need to perform a type check or type assertion.
  if (typeof value === "string") {
    console.log("The value is a string: ", value.toUpperCase()); // We can safely call string methods after checking the type.
  } else if (typeof value === "number") {
    console.log("The value is a number: ", value.toFixed(2)); // We can safely call number methods after
  } else if (typeof value === "object" && value !== null) {
    console.log("The value is an object: ", value); // We can safely access object properties after checking the type.
  }
})();
