// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  type TPoint=[number,number]
  const point1: TPoint=[1,1];
  const point2: TPoint=[4,5]
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance;
  }
  // TODO: call the function and print the result to console
  const result = distance(point1, point2);
  console.log(`The distance is ${result}`);
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = {x:number; y: number};
  const point1: TPoint = { x: 1, y: 1 };
  const point2: TPoint = { x: 4, y: 5 };
  function distance(p1: TPoint, p2: TPoint): number {
    //const x1 = p1.x; // TODO: replace with the first element of p1
    //const y1 = p1.y; // TODO: replace with the second element of p1
   // const x2 = p2.x; // TODO: replace with the first element of p2
    //const y2 = p2.y; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // TODO: calculate the distance
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

  
    return distance

  }
  // TODO: call the function and print the result to console
  
  const result = distance(point1, point2);
  console.log(`The distance is ${result}`);
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI: number = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calculateCircleArea(radius:number): number {
    return PI * radius * radius;
  }
  // TODO: call the function and print the result to console
  const circleRadius: number = 20;
  const circleArea : number = calculateCircleArea(circleRadius);
  console.log(`The area of a circle with radius ${circleRadius} is ${circleArea}`);
  // TODO: check the type of PI variable
  console.log(`The type of PI is: ${typeof PI}`);
  // TODO: declare a const variable that is an object with two properties - name and age
  interface PersonProps{
    name: string;
    age: number;
  }
  const myPerson: PersonProps={
    name:'Karina',
    age: 31,
  }
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function myAge(person:PersonProps):void
{
 person.age+=1;

}  // TODO: call the function and print the person object to console

myAge(myPerson)
console.log(`Updated person: ${JSON.stringify(myPerson)}`);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {

  type TArray= number[];
  type Tfunction=(n: number) => number
  // TODO: add type annotations
  // function map(arr, fn) {
  // TODO: add logic here
  // TODO: use regular for loop
  // return [];
  // }
  function map(array:TArray, fn:Tfunction):TArray{

    const result: TArray = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }
  // TODO: create an array of numbers

  const myArr: TArray=[1,2,3,4,5]
  // TODO: create a function which doubles a number

  function doubleNumbers(number:number): number{
    return number *2
  }
  // TODO: call map function (created earlier) with the array and the function
 const doubleArr: TArray= map(myArr,doubleNumbers)
  // TODO: print the result to console
  console.log(`Original Array: ${myArr}`);
  console.log(`Doubled Array: ${doubleArr}`);
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // TODO: create a type for user, with name property

  type User={
    name:string;
  }
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: User): void {
    console.log(`Hello, ${user.name}!`);
  }
  // TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // TODO: create a product object, asign it some object literal
  const product: Product = {
    name: "avocado",
    price: 15,
  };
  // TODO: call the function with product as a parameter
  printGreeting(product)
  // TODO: call the function with object literal as a parameter

  printGreeting({name:"Karina"})
  // TODO: try adding extra property to the object literal - observe the error
  const invalidUser = { name: "Bob", age: 25 }
  printGreeting(invalidUser)
  // TODO: fix the error with type assertion
  const validUser = { name: "Anna", age: 45 } as User;
  printGreeting(validUser);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  class Book{
   // TODO: constructor should take three parameters - title and year of publication
  // TODO: method `getInfo` should return the book title and year as a string
    title:string;
    year: number;

    
    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
      return this
    }
    
  getInfo(): void {
    console.log `${this.title} (${this.year})`;
  }
  getAge():number{
    let date:number=new Date().getFullYear();
    let bookYear: number=this.year;
    return date-bookYear;
  }
  revise(newYearPublication:number): void{
   this.year = newYearPublication;
  }
  }
  const myBook = new Book(' Gone with the Wind', 1936);
  console.log(myBook.getInfo());
  myBook.revise(1930);
  console.log(myBook.getInfo());
  console.log(`Book Age: ${myBook.getAge()}`);
  // TODO: create a book object and call the method `getInfo`, print the result to console
  // TODO: assign a new value to the year property
  // TODO: call the method `getInfo` again
  // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // TODO: call the method `getAge` and print the result to console
  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // TODO: call the method `revise` and pass a new year as a parameter
  // TODO: add private modifier to the year property
  // TODO: try to access the year property from outside of the class - observe the error
  // TODO: change protected modifier to the year property, remove private modifier
  class Magazine extends Book {
    constructor(title: string, year: number, private month: number, private day: number) {
      super(title, year);
      this.month=month;
      this.day=day;
    }
    getInfo(): string {
      const bookInfo = super.getInfo();
      return `${bookInfo}, Published in ${this.month}/${this.day}`;
    }
  }
  
  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  const myMagazine = new Magazine('NYT', 2023, 11, 12);
  console.log(myMagazine.getInfo());
  console.log(`Magazine Age: ${myMagazine.getAge()}`);
}
// TODO: compile and run the code
excercise9();
