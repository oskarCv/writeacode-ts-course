// The `never` type in TypeScript represents a value that never occurs. It is used to indicate that a function will never return or that a variable will never have a value. This can be useful for functions that throw exceptions or for variables that are meant to be unreachable.
// The `never` type is a subtype of all other types, which means that it can be assigned to any type, but no type can be assigned to `never` except `never` itself. This makes it useful for functions that are meant to never return, such as those that throw exceptions or have infinite loops.
(() => {

  const fail = (message:string) => {
    console.log("Failing with message: ", message); // Log the failure message to the console.
    throw new Error(message); // This function throws an error, so it never returns a value, hence its return type is never.
  }
  const sample = (input : unknown) => {
    if (typeof input === "string") {
      console.log("Input is a string: ", input);
    } else if (typeof input === "number") {
      console.log("Input is a number: ", input);
    } else if(Array.isArray(input)) {
      console.log("Input is an array: ", input);
    } else {
      try {
        JSON.stringify(input); // Attempt to stringify the input to check if it's a valid object.
      } catch (e) {
        fail("Unsupported type!"); // If JSON.stringify throws an error, we catch it and call fail to throw a new error.
      }
    }
  };
  sample("Hello, TypeScript!"); // Output: Input is a string:  Hello, TypeScript!
  sample(42); // Output: Input is a number:  42
  // sample(true); // This will throw an error: Unsupported type!
  sample([1,2,3]) // Output: Input is an array:  [1, 2, 3]
  sample({ key: "value" }); // This will throw an error: Unsupported type!
})()
