(()=>{
  let isDone: boolean = false; // Declaring a boolean variable and initializing it with false.
  console.log(isDone);
  let isNew: boolean; // Declaring a boolean variable without initializing it, it will be undefined.
  const random = Math.random(); // Generate a random number between 0 and 1.
  console.log("Random number: ", random);
  isNew = random > 0.5 ? true : false; // Assigning a boolean value based on the random number.
  console.log("Is new: ", isNew);
})()
