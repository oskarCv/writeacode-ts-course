//Tuples in TypeScript are a special type of array that can hold a fixed number of elements, where each element can have a different type. They are defined using square brackets [] and the types of the elements are specified in order.
//Tuples are useful when you want to represent a collection of values that are related but have different types, such as a pair of coordinates (x, y) or a user profile with a name and age.
(()=>{
  let user:[string, number] = ["Alice", 30];
  const [name, age] = user; // Destructuring the tuple to get the name and age.
  console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Alice, Age: 30
})();
