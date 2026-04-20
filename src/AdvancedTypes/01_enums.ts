// Enums in TypeScript allow us to define a set of named constants. They can be numeric or string-based. In this example, we will create a string-based enum to represent different user roles.
// Enums can help improve code readability and maintainability by providing meaningful names for sets of related values.

enum Roll{
  ADMIN = "Admin",
  SELLER = "Seller",
  CUSTOMER = "Customer"
}

type User = {
  name: string;
  roll: Roll;
}

(() => {
  const user1: User = {
    name: "Alice",
    roll: Roll.ADMIN
  }
  console.log(user1);
})();
