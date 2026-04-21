// In this example, we will define an interface for a Product object. An interface in TypeScript is a way to define the shape of an object, specifying the properties and their types. We will also use a union type to define the possible values for the product's status.
// Interfaces can help improve code readability and maintainability by providing a clear contract for the structure of objects. They can also be used to enforce type safety when working with complex data structures, making it easier for developers to understand the expected properties and their types.
// type vs interface: Type aliases can represent any type, including primitives, unions, intersections, tuples, and more. Interfaces are specifically designed to describe the shape of objects and can be extended or implemented by classes. Interfaces can also be merged, allowing for more flexible code organization, while type aliases cannot be merged and are more rigid in their structure.
// interface is a powerful feature in TypeScript that allows you to define the structure of an object, including its properties and their types. It can also be used to define the shape of a function or an array. In this example, we will create an interface for a Product object, which includes properties such as title, createdAt, stock, and an optional status property that can be one of several string literals. We will then create an array of Product objects and demonstrate how to use the interface to ensure type safety when working with these objects.
// type cannot be extended or implemented by classes, while interfaces can be extended and implemented. This means that interfaces can be used to create more complex types by combining multiple interfaces together, while type aliases cannot be combined in this way. Additionally, interfaces can be merged, allowing for more flexible code organization, while type aliases cannot be merged and are more rigid in their structure. Overall, interfaces are a powerful tool for defining the shape of objects and ensuring type safety in TypeScript, while type aliases are more versatile but less structured.

type status = "available" | "out of stock" | "discontinued"; // A union type that can only be one of the specified string literals.

interface Product {
  title: string;
  createdAt: Date;
  stock: number;
  status?: status; // An optional property of type status, which can be one of the specified string literals or undefined.
}

const product: Product [] = []; // An array of Product objects, initialized as an empty array.

product.push({
  title: "Laptop",
  createdAt: new Date(),
  stock: 10,
  status: "available"
});

console.log(product);
