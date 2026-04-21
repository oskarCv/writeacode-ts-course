// This code demonstrates the use of type aliases in TypeScript. A type alias allows you to create a new name for a type, which can be a primitive, union, intersection, tuple, or any other type. In this example, we create a type alias called UserID that can be either a string or a number. We then use this type alias to declare a variable and a function parameter, and we demonstrate how to use it in practice.
// Type aliases are a powerful feature in TypeScript that can help improve code readability and maintainability by giving meaningful names to complex types. They can also be used to create more descriptive types for function parameters and return values, making it easier for developers to understand the intent of the code.
// help to reduce code duplication and improve readability by giving meaningful names to complex types. They can also be used to create more descriptive types for function parameters and return values, making it easier for developers to understand the intent of the code.

(() => {
  type UserID = string | number; // Creating a type alias named UserID that can be either a string or a number.
  // literal types can be used to create more specific type aliases, such as:
  type Status = "active" | "inactive" | "pending"; // A type alias for a union of string literal types representing user status.

  let userID : UserID; // Declaring a variable that can be either a string or a number.
  let userStatus : Status; // Declaring a variable that can be one of the specified string literals.

  //userStatus = "salute"; // This will cause a TypeScript error because "salute" is not a valid Status.

  printUserID("user123", "active"); // Output: User ID (string): user123
  printUserID(456, "inactive"); // Output: User ID (number): 456

  function printUserID(id: UserID, status: Status): void { // A function that accepts a parameter that can be either a string or a number.
    if (typeof id === "string" && status === "active") { // Checking if the type of id is a string.
      console.log(`User ID (string) ${id} and status: ${status}`);
    } else { // If it's not a string, it must be a number.
      console.log(`User ID (number): ${id} and status: ${status}`);
    }
  }
})();
