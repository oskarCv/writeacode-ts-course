//Method overloads in TypeScript allow us to define multiple function signatures for a single function implementation. This can be useful when we want to provide different ways to call a function based on the types of the arguments passed. In this example, we will create a function that can accept either a string or an array of strings and return the appropriate result based on the input type.
// The function 'parseString' will have two overloads: one for a string input that returns an array of characters, and another for an array of strings that returns a single concatenated string. The implementation of the function will use type guards to determine the type of the input and return the correct output accordingly.

//function parseString(input: string): string[]; // Overload signature for string input, returns an array of characters.
//function parseString(input: string[]): string; // Overload signature for array of strings input, returns a single concatenated string.

// be careful with the order of overloads, the more specific one should be defined first, otherwise it will cause a compilation error because TypeScript will not be able to determine which overload to use when the function is called.

function parseString(input: string | string[]): (string|string[]) {
  if (typeof input === "string") {
    const arrayResponse = input.split('');
    return arrayResponse; // If the input is a string, split it into an array of characters and return it.
  } else {
    const stringResponse = input.join('');
    return stringResponse; // If the input is an array of strings, join them into a single string and return it.
  }
}

const result1 = parseString("writeacode"); // This will return an array of characters: ['w', 'r', 'i', 't', 'e', 'a', 'c', 'o', 'd', 'e']result1.
const result2 = parseString(["w", "r", "i", "t", "e", "a", "c", "o", "d", "e"]); // This will return a single string: "writeacode"

console.log(result1);
console.log(result2);
