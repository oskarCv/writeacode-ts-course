(()=>{
  let productName: string = "Laptop"; // Declaring a string variable and initializing it with "Laptop".
  console.log(productName);
  let description: string;
  description = "A high-performance laptop for gaming and work."; // Assigning a string value to the description variable.
  console.log('Description: ', description);
  const summary: string = `
    Product: ${productName}\n
    Description: ${description}
  `; // Using template literals to create a summary string.
  console.log('summary: ', summary);
})()
