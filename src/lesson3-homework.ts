// try different target compiler options
const loggerMain = (hm: string) => (ex: string) =>
  function (...args: any[]) {
    console.log(hm, ex, ...args);
  };
const localLogger = loggerMain('lesson2 - homework');

function excercise10() {
  const logger = localLogger('excercise10');
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
    #width: number;
    #height: number;
    constructor(wiidth: number, height: number) {
      this.#width = wiidth;
      this.#height = height;
    }
    getArea(): number {
      return this.#width * this.#height;
    }
    getPerimetr(): number {
      return (this.#width + this.#height) * 2;
    }
  }
  const myRectangle = new Rectangle(10, 20);
  logger('Area is:', myRectangle.getArea());
  logger('Perimetr is:', myRectangle.getPerimetr());
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  const logger = localLogger('excercise11');
  // TODO: create a generic Stack class
  // TODO: add a private data property of type array of T
  // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // TODO: add a pop method which removes and returns the item from the top of the stack
  // TODO: create an instance of the Stack class with number type
  // TODO: push two numbers to the stack
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  // TODO: create an instance of the Stack class with string type
  // TODO: push two strings to the stack
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  class Stack<T> {
    private data: T[] = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.pop();
    }
    getStack(): T[] {
      return [...this.data];
    }
  }
  function fixed(item: number | undefined): string | undefined {
    if (typeof item === 'number') {
      return item.toFixed();
    }
    return item;
  }

  function toUppercase(item: string | undefined): string | undefined {
    if (typeof item === 'string') {
      return item.toUpperCase();
    }
    return item;
  }

  const numberStack = new Stack<number>();
  numberStack.push(1);
  numberStack.push(2);
  numberStack.push(3);
  logger('numberStack=', numberStack.getStack());
  logger('numberStack pop =', fixed(numberStack.pop()));
  logger('numberStack=', numberStack.getStack());
  const stringStack = new Stack<string>();
  stringStack.push('a');
  stringStack.push('b');
  stringStack.push('c');
  logger('stringStack=', stringStack.getStack());
  logger('stringStack pop =', toUppercase(stringStack.pop()));
  logger('stringStack=', stringStack.getStack());
}
// TODO: compile and run the code
excercise11();

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
  const logger = localLogger('excercise12');
  // TODO: create a function that takes an array of numbers and returns a random number from the array
  // TODO: create a function that takes an array of strings and returns a random string from the array
  // TODO: create a function that takes an array of objects and returns a random object from the array
  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
  type TSomeObj = { p1: string };
  const arrInt: number[] = [1, 2, 3, 4, 5, 6];
  const arrStr: string[] = ['1', '2', '3', '4', '5'];
  const arrObj: TSomeObj[] = [
    { p1: '1' },
    { p1: '2' },
    { p1: '3' },
    { p1: '4' },
    { p1: '5' },
    { p1: '6' },
    { p1: '7' },
  ];

  function getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getRandomItem<T>(items: T[]): T {
    return items[getRndInteger(0, items.length)];
  }

  logger('Random number from', arrInt, 'is', getRandomItem(arrInt));
  logger('Random number from', arrStr, 'is', getRandomItem(arrStr));
  logger('Random number from', arrObj, 'is', getRandomItem(arrObj));
}
// TODO: compile and run the code
excercise12();

// add type assertion to the code
function excercise13() {
  const logger = localLogger('excercise13');
  // NOTE: do not change this function
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge() as number;
  // TODO: uncomment the following code and add type assertion to fix the error
  logger(userAge + 1);
}
// TODO: compile and run the code
excercise13();
// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
  function fetchUserAge() {
    const responseText = '{"name": "John", "age": "18"}';

    return JSON.parse(responseText).age;
  }
  const userAge: number = parseInt(fetchUserAge() as string, 10);
  // TODO: run the code below and observe the result, explain why it is happening,
  // TODO: add type casting to the function above, to fix the error
  if (userAge === 16) {
    console.log('Time to get your driver license');
  } else if (userAge > 16) {
    console.log('You are old enough to drive');
  } else {
    console.log('You are not old enough to drive');
  }
}
// TODO: compile and run the code
excercise14();

// add type safety to the code which uses any
function excercise15() {
  const logger = localLogger('excercise15');
  // TODO: declare a type for user object, which has a name property of type string
  type TUserObj = {
    name: string;
  };
  type TFatchUserResponse = {
    users: TUserObj[];
  };
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers(): TUserObj[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: TFatchUserResponse = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}',
    );

    // TODO: add check for the data type to contain list of users
    if (
      typeof data === 'object' &&
      data !== null &&
      'users' in data &&
      Array.isArray(data.users)
    ) {
      return data.users;
    }
    return [];
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users = fetchUsers();
  logger(users);
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => logger(user.name));
}
// TODO: compile and run the code
excercise15();

// use type declarations to fix the comments in the code
function excercise16() {
  const logger = localLogger('excercise16');
  // TODO: add code which uses process.env.NODE_ENV variable,
  // TODO: try to compile and see the error
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  // TODO: remove global.d.ts file, copile and see the error again
  // TODO: install type declarations from error message -  @types/node
  // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
  logger(process.env.NODE_ENV);
}
// TODO: compile and run the code
excercise16();
