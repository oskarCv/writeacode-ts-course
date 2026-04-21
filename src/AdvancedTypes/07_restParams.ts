//Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array. They are defined using the ... syntax in function parameters. Rest parameters must be the last parameter in the function definition, and they will collect all remaining arguments passed to the function into an array.
//Rest parameters are useful when you want to create functions that can accept a variable number of arguments without having to specify each one individually. They provide a convenient way to handle cases where the number of arguments is not known in advance.
import { User, Roll } from "./01_enums";

const currentUser: User = {
  name: "Alice",
  roll: Roll.ADMIN
}

const checkUserRole = (user: User, ...allowedRoles: Roll[]) => {
  if (allowedRoles.includes(user.roll)) {
    console.log(`User ${user.name} has access.`);
  } else {
    console.log(`User ${user.name} does not have access.`);
  }
}

checkUserRole(currentUser, Roll.ADMIN, Roll.SELLER); // Output: User Alice has access.
checkUserRole(currentUser, Roll.CUSTOMER); // Output: User Alice does not have access.
