export class MyDate {
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  printDateFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
}
// In this example, we have defined the properties day, month, and year as private. This means that they cannot be accessed or modified directly from outside the class. Instead, we can only interact with these properties through the methods defined within the class, such as printDateFormat. This encapsulation helps to protect the internal state of the class and prevents unintended modifications from external code.
const date1 = new MyDate(15, 8, 2024);
console.log(date1.printDateFormat()); // Output: 15/8/2024
// The following lines would result in an error because the properties are private and cannot be accessed directly.
// date1.day = 20; // Error: Property 'day' is private and only accessible within class 'MyDate'.
// console.log(date1.day); // Error: Property 'day' is private and only accessible within class 'MyDate'.
//console.log(date1.addPadding(5)); // Error: Property 'addPadding' is private and only accessible within class 'MyDate'.

