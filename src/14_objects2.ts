(()=>{
  type User = {
    name: string;
    age: number;
  };
  let userList: User[] = []; // An array of User objects, initialized as an empty array.

  const addUser = (name: string, age: number): void => {
    const newUser: User = { name, age }; // Creating a new User object with the provided name and age.
    userList.push(newUser); // Adding the new User object to the userList array.
  };

  addUser("Alice", 30); // Adding a user named Alice with age 30 to the userList.
  addUser("Bob", 25); // Adding a user named Bob with age 25 to the userList.

  console.log("User List: ", userList); // Logging the userList to the console, which will show the added users.

  // const expectedSum = (arr: number[] | undefined, target: number) : number[] => {
  //   if (!arr || arr.length == 0){
  //     return [-1];
  //     for(let j = i+1; j < arr.length; j++){
  //       if(arr[i] + arr[j] == target){
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [-1];
  // }
  // const sampleArray : number[] = [1,3,5,7,9,2];
  // console.log(expectedSum(sampleArray, 9));
})()
