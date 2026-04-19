(()=>{
  const fruits: string[] = ["Apple", "Banana", "Cherry"]; // Declaring an array of strings and initializing it with some fruit names.
  const numbers = [1, 2, 3, 4, 5]; // TypeScript infers that numbers is an array of numbers.
  console.log("Fruits: ", fruits);
  console.log("Numbers: ", numbers);
  let mixedArray:(number | string | boolean)[] = [1, "Two", 3, "Four"]; // An array that can contain both numbers and strings.
  mixedArray.push(true); // Adding a boolean value to the mixed array, which is allowed because of the union type.
  mixedArray.push(5); // Adding a number to the mixed array, which is also allowed.
  mixedArray.push("Six"); // Adding a string to the mixed array, which is also allowed.
  console.log("Mixed Array: ", mixedArray);
})();
