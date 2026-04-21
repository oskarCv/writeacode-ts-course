(() => {
  let price = 19.99; // TypeScript infers that price is of type number.
  console.log(price);
  let productName: string = "Book"; // Explicitly annotating the type as string
  console.log(productName);
  let tax: 0.3; // Declaring a boolean variable without initializing it type should be included due to there is no way to inferr it.
  // console.log(tax); // This will log undefined because tax is declared but not initialized.
  const stock: number = 100; // A constant variable of type number, not Number (the object wrapper type).
  console.log("Stock: ", stock);
})();
