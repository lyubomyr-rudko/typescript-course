// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4():void {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  const startPoint:[number, number] = [1, 1];
  const endPoint:[number, number] = [4, 5];
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  }
  // TODO: call the function and print the result to console
  console.log(distance(startPoint, endPoint));
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5():void {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = { x: number, y: number };
  const startPoint: TPoint = {x: 1, y: 1};
  const endPoint: TPoint = {x: 4, y: 5};
  function distance(p1: TPoint, p2: TPoint): number {
    // TODO: use distructuring to get x and y from p1 and p2
    const {x:x1, y:y1} = p1;
    const {x:x2, y:y2} = p2;
    // TODO: calculate the distance
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  }
  // TODO: call the function and print the result to console
  console.log(distance(startPoint, endPoint));
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6():void {
  // TODO: declare a const PI and assign value 3.14
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  // TODO: call the function and print the result to console
  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  // TODO: call the function and print the person object to console
  const PI = 3.14;
  const calculateCircleArea = (radius:number):number => PI * Math.pow(radius, 2);
  console.log(calculateCircleArea(2));

  type TPerson = {name: string, age: number};

  const person: TPerson = {
    name: 'John',
    age: 22,
  }
  const increasePersonAge = (person:TPerson):void => {
    person.age += 1;
    console.log(person)
  }
  increasePersonAge(person);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7():void {
  // TODO: add type annotations
  type TNumberFunc = (number:number) => number;
   function map(arr:number[], fn:TNumberFunc):number[] {
  // TODO: add logic here
  // TODO: use regular for loop
     const result:number[] = []
     for (let i = 0; i < arr.length; i += 1) {
       result.push(fn(arr[i]))
     }
   return result;
   }
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
  const arrayOfNumbers: number[] = [1, 3, 5];
  const doubleNumber: TNumberFunc = (number) => number * 2;
  console.log(map(arrayOfNumbers, doubleNumber));
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8():void {
  // TODO: create a type for user, with name property
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  // TODO: create a type for product, with name property and price property
  // TODO: create a product object, asign it some object literal
  // TODO: call the function with product as a parameter
  // TODO: call the function with object literal as a parameter
  // TODO: try adding extra property to the object literal - observe the error
  // TODO: fix the error with type assertion
  type TUser = {name: string};
  const printGreeting = (user:TUser): void => console.log(`Hello ${user.name}`);
  type TProduct = {name: string, price: number};
  const product: TProduct = {name: "Apple", price: 1000};
  printGreeting(product);
  printGreeting({name: 'John'});
  printGreeting({name: 'John', age: 22} as TUser);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9():void {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // TODO: constructor should take three parameters - title and year of publication
  // TODO: method `getInfo` should return the book title and year as a string
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
  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  class Book {
    title: string
    protected yearOfPublication: number
    constructor(title:string, yearOfPublication:number) {
      this.title = title
      this.yearOfPublication = yearOfPublication
    }
    getInfo (): string {
      return `${this.title} was published in ${this.yearOfPublication}`
    }

    getAge(): number {
      return new Date().getFullYear() - this.yearOfPublication
    }

    revise(newYearOfPublication: number): void {
      if (newYearOfPublication > new Date().getFullYear()) {
        console.log('This date can not be in the future');
        return;
      }
      if (newYearOfPublication < this.yearOfPublication) {
        console.log('This date can not be less than previous date');
        return;
      }
      this.yearOfPublication = newYearOfPublication;
    }
  }

  const myBook = new Book('Harry Potter and the Philosopher\'s Stone', 1997);
  console.log(myBook.getInfo());
  //myBook.yearOfPublication = 1998;
  console.log(myBook.getInfo());
  console.log(myBook.getAge());
  myBook.revise(2000);
  console.log(myBook.getAge());

  class Magazine extends Book {
    month: number;
    day:number;
    constructor(title: string, yearOfPublication: number, month:number, day:number) {
      super(title, yearOfPublication);
      this.month = month;
      this.day = day
    }

    getInfo():string {
      const bookInfo = super.getInfo()
      return `${bookInfo} ${this.month} ${this.day}`
    }
  }

  const magazine = new Magazine('JS weekly', 2023, 5, 14)

  console.log(magazine.getInfo())
  console.log(magazine.getAge())
}
// TODO: compile and run the code
excercise9();
