//Default values in TypeScript allow you to specify a default value for a function parameter. This means that if the caller does not provide a value for that parameter, the default value will be used instead. This can help simplify your code and make it more robust by ensuring that parameters always have a valid value.
//In TypeScript, you can also use the nullish coalescing operator (??) to provide default values for variables or expressions. This operator returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. This can be particularly useful when working with optional parameters or when you want to provide a fallback value for a variable that may be null or undefined.
(()=>{
  const addProduct = (id : number, name:string, price:number, stock:number = 0, isNew:boolean = false ) => {
    return {
      id,
      name,
      price,
      stock,
      isNew,
    }
  }
  const product1 = addProduct(1, "Laptop", 999.99); // stock and isNew will use default values of 0 and false respectively.
  const product2 = addProduct(2, "Smartphone", 499.99, 50); // isNew will use the default value of false.
  const product3 = addProduct(3, "Tablet", 299.99, 30, true); // No default values are used since all parameters are provided.

  console.log("Product 1: ", product1);
  console.log("Product 2: ", product2);
  console.log("Product 3: ", product3);
})();
