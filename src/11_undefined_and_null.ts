// This file demonstrates the use of undefined and null types in TypeScript.
// In TypeScript, undefined and null are distinct types that represent the absence of a value.
// undefined is the default value for uninitialized variables, while null is an assignment value that represents the intentional absence of any object value.

(()=> {
  // let numberValue: number = undefined; // A variable of type number that is initialized with undefined.
  // let stringValue: string = null; // A variable of type string that is initialized with null.
  let undefinedValue: undefined = undefined; // A variable of type undefined that is initialized with undefined.
  let nullValue: null = null;
  console.log("undefinedValue: ", undefinedValue); // Output: undefinedValue:  undefined
  console.log("nullValue: ", nullValue); // Output: nullValue:  null

  let numericValue: number | undefined = undefined; // A variable that can hold either a number or undefined.
  console.log("numericValue: ", numericValue);

  numericValue = 42; // Now numericValue holds a number.
  console.log("numericValue: ", numericValue); // Output: numericValue:  42

  let optionalString: string | null = null; // A variable that can hold either a string or null.
  console.log("optionalString: ", optionalString); // Output: optionalString:  null

})();
