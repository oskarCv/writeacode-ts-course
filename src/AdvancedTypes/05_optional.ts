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

