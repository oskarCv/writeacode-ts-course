// In this example, we will create a class called MyDate that represents a date with day, month, and year properties. The class will have two methods: printDateFormat, which returns the date in a string format, and addDate, which allows us to add a specified amount of days, months, or years to the date.
// The addDate method takes two parameters: amount, which is the number of days, months, or years to add, and type, which specifies whether we are adding days, months, or years. The method uses a switch statement to determine which type of date component to add and updates the corresponding property accordingly. It also includes basic validation to ensure that the day does not exceed 30 and the month does not exceed 12.
// this is not a fully functional date class, as it does not account for varying month lengths, leap years, or other complexities of date handling. However, it serves as a simple example of how to create a class with methods that manipulate its properties in TypeScript.
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
  addDate(amount:number, type:'days' | 'months' | 'years'): string{

    switch(type){
      case 'days':
        if(this.day + amount < 30){
          this.day += amount;
        } else {
          console.log("Invalid day amount, cannot exceed 30");
        }
        break;
      case 'months':
        if(this.month + amount < 12){
          this.month += amount;
        } else {
          console.log("Invalid month amount, cannot exceed 12");
        }
        break;
      case 'years':
        this.year += amount;
        break;
    }
    return `${this.day}/${this.month}/${this.year}`;
  }
}

  const date1 = new MyDate(15, 8, 2024);

  console.log(date1.printDateFormat()); // Output: 15/8/2024
  console.log(date1.addDate(10, 'days')); // Output: 25/8/2024

