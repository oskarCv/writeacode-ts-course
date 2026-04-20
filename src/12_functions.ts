(() => {
  type status = "available" | "out of stock" | "discontinued"; // A union type that can only be one of the specified string literals.
  const toJson = (
    title: string,
    createdAt: Date,
    stock: number,
    status?: status // An optional parameter of type status, which can be one of the specified string literals or undefined.
  ): object => {

    return {
      title,
      createdAt,
      stock,
      status
    }
  }
  const product = toJson("Laptop", new Date(), 10);
  console.log(product);
})();
