// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  class Rectangle {
    #width: number;
    #height: number;
    constructor(width: number, height: number) {
      this.#width = width;
      this.#height = height;
    }
    
    // TODO: add a method `getArea` which returns the area of the rectangle
    getArea(): number {
      return this.#width * this.#height;
    }

    // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    getPerimeter(): number {
      return (this.#width + this.#height) * 2;
    }
  }
  
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  const myRectangle = new Rectangle(10, 20);
  // TODO: call the method `getArea` and print the result to console
  console.log(myRectangle.getArea());
  // TODO: call the method `getPerimeter` and print the result to console
  console.log(myRectangle.getPerimeter())
  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // TODO: change width and height properties to private, recomplile and
  // TODO: change compiler target to ES2015, complile and see the compiled code
  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // TODO: change compiler target to ESNext, complile and see the compiled code
  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  class Stack<T> {
    // TODO: add a private data property of type array of T
    private data: T[] = [];

    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    push(item: T): void {
      this.data.push(item);
    }

    // TODO: add a pop method which removes and returns the item from the top of the stack
    pop(): T | undefined {
      return this.data.pop();
    }
  }
  
  // TODO: create an instance of the Stack class with number type
  const numberStack = new Stack<number>();

  // TODO: push two numbers to the stack
  numberStack.push(11);
  numberStack.push(22.2);

  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  const poppedItem = numberStack.pop();
  if (typeof poppedItem === "number") {
    console.log(poppedItem.toFixed(2));
  }

  // TODO: create an instance of the Stack class with string type
  const stringStack = new Stack<string>();

  // TODO: push two strings to the stack
  stringStack.push("apple");
  stringStack.push("cherry");

  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  const poppedString = stringStack.pop();
  if (poppedString !== undefined) {
    console.log(poppedString.toUpperCase());
  }
}
// TODO: compile and run the code
excercise11();

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
  // TODO: create a function that takes an array of numbers and returns a random number from the array
  function numberFunction(numbers: number[]): number | undefined{
    if (numbers.length === 0) {
      return undefined;
    }
    const random = numbers[Math.floor(Math.random() * numbers.length)];
    return random;
  }
  // TODO: create a function that takes an array of strings and returns a random string from the array
  function stringFunction(strings: string[]): string | undefined{
    if (strings.length === 0) {
      return undefined;
    }
    const random = strings[Math.floor(Math.random() * strings.length)];
    return random;
  }

  // TODO: create a function that takes an array of objects and returns a random object from the array
  type MyObject = {
    number: number;
    fruit: string;
  }
  function objectFunction(objects: MyObject[]): MyObject | undefined{
    if (objects.length === 0) {
      return undefined;
    }
    const random = objects[Math.floor(Math.random() * objects.length)];
    return random;
  }

  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
  function genericFunction<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
      return undefined;
    }
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
  }

  const numberArr = [1, 2, 3];
  console.log(numberFunction(numberArr));
  console.log(genericFunction(numberArr));

  const stringArr = ["apple", "cherry", "orange"];
  console.log(stringFunction(stringArr));
  console.log(genericFunction(stringArr));

  const objectArr = [{ number: 1, fruit: "apple" }, { number: 2, fruit: "cherry" }, { number: 3, fruit: "orange" }]
  console.log(objectFunction(objectArr));
  console.log(genericFunction(objectArr));
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
  const userAge = fetchUserAge() as number ;
  // TODO: uncomment the following code and add type assertion to fix the error
  console.log(userAge + 1);
}
// TODO: compile and run the code
excercise13();

// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
  function fetchUserAge() {
    const responseText = '{"name": "John", "age": "18"}';

    return parseInt(JSON.parse(responseText).age);
  }
  const userAge = fetchUserAge();
  // TODO: run the code below and observe the result, explain why it is happening,
  // TODO: add type casting to the function above, to fix the error
  if (userAge > 16) {
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
  type User = {
    name: string;
  }

  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): User[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: { users: User[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}'
    );

    // TODO: add check for the data type to contain list of users
    if (Array.isArray(data.users)) {
      return data.users;
    } else {
      return [];
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users: User[] = fetchUsers();
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise15();


// use type declarations to fix the comments in the code
function excercise16() {
  // TODO: add code which uses process.env.NODE_ENV variable,
  console.log(process.env.NODE_ENV)
  // TODO: try to compile and see the error
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  // TODO: remove global.d.ts file, copile and see the error again
  // TODO: install type declarations from error message -  @types/node
  // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
}
// TODO: compile and run the code
excercise16();
