// Class in TypeScript is a blueprint for creating objects with specific properties and methods. It allows us to define the structure and behavior of objects in a more organized way. In this example, we will create a simple class called 'Person' with properties for name and age, and a method to display the person's information.
// Classes in TypeScript can also have constructors, which are special methods that are called when an instance of the class is created. The constructor can be used to initialize the properties of the class. Additionally, TypeScript supports access modifiers (public, private, protected) to control the visibility of class members, and it also allows for inheritance, enabling us to create subclasses that extend the functionality of a base class.

const date = new Date();
const date2 = new Date(2024, 0, 1); // Note: In JavaScript, months are zero-indexed, so January is represented by 0.

console.log(date);
console.log(date2);

class myDate{
  day: number;
  month: number;
  year: number;
  // The constructor is a special method that is called when an instance of the class is created. It is used to initialize the properties of the class. In this example, we are using parameter properties, which allow us to declare and initialize class properties directly in the constructor parameters by using access modifiers (public, private, protected). This syntax helps to reduce boilerplate code and makes it more concise.
  // In this example, we have three properties: day, month, and year, which are initialized through the constructor parameters. The 'public' access modifier means that these properties can be accessed from outside the class.
  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

}
// We can create an instance of the myDate class by using the 'new' keyword and passing the required parameters to the constructor. This will initialize the properties of the class with the provided values.
const myDate1 = new myDate(15, 8, 2024);
console.log(myDate1);
