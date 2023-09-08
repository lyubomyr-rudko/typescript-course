import { type } from "os";

// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  // TODO: add a method `getArea` which returns the area of the rectangle
  // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  // TODO: call the method `getArea` and print the result to console
  // TODO: call the method `getPerimeter` and print the result to console
  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // TODO: change width and height properties to private, recomplile and
  // TODO: change compiler target to ES2015, complile and see the compiled code
  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // TODO: change compiler target to ESNext, complile and see the compiled code
  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)

  class Rectangle {
    #width:number;
    #height:number;

    constructor(width:number, height:number) {
      this.#width = width;
      this.#height = height;
    }

    getArea():number {
      return this.#width * this.#height
    }

    getPerimeter():number {
      return 2 * (this.#width + this.#height)
    }
  }
  
  const rectangle: Rectangle = new Rectangle(10, 20);
  console.log(`Excercise10: rectangle area: `, rectangle.getArea())
  console.log(`Excercise10: rectangle perimeter: `, rectangle.getPerimeter())
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  // TODO: add a private data property of type array of T
  class Stack<T> {
    private data: T[];

    constructor(data: T[]) {
      this.data = data;
    }

    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    push(item: T): void {
      const tempData: T[] = [];
      tempData.push(item);
      for (let value of this.data) tempData.push(value);
      this.data = tempData;
    }

    // TODO: add a pop method which removes and returns the item from the top of the stack
    pop() {
      const tempData: T[] = [];
      const popElement: T = this.data[0];
      for (let i = 1; i < this.data.length; i++) tempData.push(this.data[i]);
      this.data = tempData;
      return popElement;
    }
    }

    // TODO: create an instance of the Stack class with number type
    // TODO: push two numbers to the stack
    // TODO: pop an item from the stack and print it to console, calling toFixed method on it
    const num = new Stack<number>([]);
    num.push(0);
    num.push(1);
    console.log(`Excercise11: `, num.pop().toFixed());
  
    // TODO: create an instance of the Stack class with string type
    // TODO: push two strings to the stack
    // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
    const str = new Stack<string>([]);
    str.push('Hello ');
    str.push('world!');
    console.log(`Excercise11: `, str.pop().toUpperCase());
  
}
// TODO: compile and run the code
excercise11();

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {  

  // TODO: create a function that takes an array of numbers and returns a random number from the array
  function randomNum (arr: number[]): number {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
  // TODO: create a function that takes an array of strings and returns a random string from the array
  function randomString (arr: string[]): string {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
  // TODO: create a function that takes an array of objects and returns a random object from the array
  function randomObject (arr: object[]): object {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
  function randomValue<T> (arr: T[]): T {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  console.log(`Excercise12: `, randomValue<number>([1, 2, 3]))
  console.log(`Excercise12: `, randomValue<string>(['1a', '2b', '3c']))
  console.log(`Excercise12: `, randomValue<object>([{name: 'Bob'}, {name: 'Sam'}, {name: 'John'}]))
}
// TODO: compile and run the code
excercise12();

// add type assertion to the code
function excercise13() {
  // NOTE: do not change this function
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge();
  // TODO: uncomment the following code and add type assertion to fix the error
  console.log(userAge as number + 1);
}
// TODO: compile and run the code
excercise13();

// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
  function fetchUserAge() {
    const responseText = '{"name": "John", "age": "16"}';

    return JSON.parse(responseText).age;
  }
  const userAge = +fetchUserAge();
  // TODO: run the code below and observe the result, explain why it is happening,
  // TODO: add type casting to the function above, to fix the error
  if (userAge === 16) {
    console.log("Time to get your driver license");
  } else if (userAge > 16) {
    console.log("You are old enough to drive");
  } else {
    console.log("You are not old enough to drive");
  }
}
// TODO: compile and run the code
excercise14();

// add type safety to the code which uses any
function excercise15() {
  // TODO: declare a type for user object, which has a name property of type string
  type TUser = {name: string};
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): TUser[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: {users: TUser[]} = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}'
    );
    // TODO: add check for the data type to contain list of users
    if (Array.isArray(data.users)) {
      return data.users;
    } else {
      throw new Error("Invalid format");
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: TUser[] = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(`Excercise15: ${user.name}`));
}
// TODO: compile and run the code
excercise15();

// use type declarations to fix the comments in the code
function excercise16() {
  // TODO: add code which uses process.env.NODE_ENV variable,
  // TODO: try to compile and see the error
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  // TODO: remove global.d.ts file, copile and see the error again
  // TODO: install type declarations from error message -  @types/node
  // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
  process.env.NODE_ENV = 'development'
  console.log(process.env.NODE_ENV)
}
// TODO: compile and run the code
excercise16();
