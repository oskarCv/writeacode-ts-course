// All attributes and methods of a class are public by default in TypeScript. This means that they can be accessed from anywhere in the code, both inside and outside the class. In this example, we will create a simple class with public attributes and methods to demonstrate how they work.

export class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  printDateFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

// We need to be careful when using public attributes and methods, as they can be accessed and modified from outside the class, which can lead to unintended consequences. It is generally recommended to use access modifiers (private, protected) to control the visibility of class members and
const date1 = new MyDate(15, 8, 2024);
date1.day = 20; // We can access and modify the 'day' attribute directly since it is public.
console.log(date1.day); // Output: 20
