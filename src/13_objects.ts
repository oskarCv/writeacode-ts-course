(()=>{
  //login sample
  const login = (data:{username: string, password: string}): boolean => {
    // In a real application, you would check the username and password against a database or authentication service.
    // For this example, we'll just check if they match some hardcoded values.
   console.log(`Username: ${data.username}, Password: ${data.password}`);
    return data.username === "admin" && data.password === "password";
  }
  login({username: "test", password: "password"})
    ? console.log("Login successful")
    : console.log("Login failed");
})();
