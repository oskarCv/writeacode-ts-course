// In TypeScript, optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name in the function signature. Optional parameters allow you to create more flexible functions that can handle a varying number of arguments without causing errors.
// When a parameter is marked as optional, it can be omitted when calling the function. If the optional parameter is not provided, it will be undefined within the function body. You can also provide default values for optional parameters, which will be used if the caller does not supply a value.
// nullish coalescing operator (??) is a useful tool in TypeScript for handling optional parameters. It allows you to provide a default value for an optional parameter if it is null or undefined. This can help prevent errors and ensure that your function behaves predictably even when optional parameters are not provided.

(() => {
 const addProduct = (
  id: number,
  name: string,
  price: number,
  description?: string,
  stock? : boolean
) => {
  return {
    id,
    name,
    price,
    description : description ?? "No description provided", // Providing a default value for description if it's not provided.
    stock : stock ?? false // Providing a default value for stock if it's not provided.
  }
 }
 const product1 = addProduct(1, "Laptop", 999.99);
 const product2 = addProduct(2, "Smartphone", 499.99, "A high-end smartphone", true);

 console.log("Product 1: ", product1);
 console.log("Product 2: ", product2);


})();

