(function () {
  const loggerMain = (hm: string) => (ex: string) =>
    function (...args: any[]) {
      console.log(hm, ex, ...args);
    };
  const localLogger = loggerMain('lesson2 - homework');

  function excercise4() {
    const logger = localLogger('excercise4');
    // TODO: declare two variables of type tuple, each with two numbers
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    const point1: [number, number] = [1, 1];
    const point2: [number, number] = [4, 5];
    function distance(p1: [number, number], p2: [number, number]): number {
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

      // TODO: calculate the distance
    }
    // TODO: call the function and print the result to console
    logger('Distanse is', distance(point1, point2));
  }
  // TODO: compile and run the code
  excercise4();

  // 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
  function excercise5() {
    const logger = localLogger('excercise5');
    // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
    // TODO: declare two variables of type TPoint
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    type TPoint = { x: number; y: number };
    const point1: TPoint = { x: 1, y: 1 };
    const point2: TPoint = { x: 4, y: 5 };
    function distance(p1: TPoint, p2: TPoint): number {
      const { x: x1, y: y1 } = p1;
      const { x: x2, y: y2 } = p2;
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

      // TODO: calculate the distance
      // TODO: calculate the distance
      // TODO: rewrite code to use distructuring to get x and y from p1 and p2
    }
    // TODO: call the function and print the result to console
    logger('Distanse is:', distance(point1, point2));
  }
  // TODO: compile and run the code

  excercise5();

  // Create functions that use const declarations
  function excercise6() {
    const logger = localLogger('excercise6');
    // TODO: declare a const PI and assign value 3.14
    // TODO: declare a function which calculates a circle area, takes radius as a parameter
    // TODO: call the function and print the result to console
    // TODO: check the type of PI variable
    // TODO: declare a const variable that is an object with two properties - name and age
    // TODO: declare a function which takes a person object as a parameter and increments age by 1
    // TODO: call the function and print the person object to console
    type TPerson = {
      name: string;
      age: number;
    };
    const PI = 3.14;
    function areaCalc(radius: number): number {
      return PI * Math.pow(radius, 2);
    }
    function ageIncrementor(person: TPerson): TPerson {
      return {
        ...person,
        age: ++person.age,
      };
    }

    logger('area = ', areaCalc(5));
    logger('typeof PI = ', typeof PI);

    const person1: TPerson = { name: 'Jon Dow', age: 30 };
    const person1Older = ageIncrementor(person1);
    logger('Older person:', person1Older);
  }
  excercise6();

  // Create a function that takes as a first parameter an array of numbers
  // a second parameter - a function that takes a number and returns a number.
  // and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
  function excercise7() {
    const logger = localLogger('excercise7');
    //   // TODO: add type annotations
    //   function map(arr, fn) {
    //     // TODO: add logic here
    //     // TODO: use regular for loop
    //     return [];
    //   }
    //   // TODO: create an array of numbers
    //   // TODO: create a function which doubles a number
    //   // TODO: call map function (created earlier) with the array and the function
    //   // TODO: print the result to console
    type TFunc = (element: number) => number;
    type TFuncMap = (arr: number[], cbFunc: TFunc) => number[];
    const doubler: TFunc = (num) => {
      return num * 2;
    };
    const map: TFuncMap = (arr, cbFunc) => {
      const newArr = [];
      for (const i of arr) {
        newArr.push(cbFunc(i));
      }
      return newArr;
    };
    const testArr: number[] = [1, 2, 3, 4, 5, 6, 7];
    logger('Double array values is:', map(testArr, doubler));
  }
  // TODO: compile and run the code
  excercise7();

  // declare a function which takes a user and prits greeting to console
  function excercise8() {
    const logger = localLogger('excercise8');
    // TODO: create a type for user, with name property
    // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
    // TODO: create a type for product, with name property and price property
    // TODO: create a product object, asign it some object literal
    // TODO: call the function with product as a parameter
    // TODO: call the function with object literal as a parameter
    // TODO: try adding extra property to the object literal - observe the error
    // TODO: fix the error with type assertion
    type TUser = { name: string };
    type TGeetingsFunc = (user: TUser) => void;
    type TProduct = { name: string; price: number; test?: boolean };
    const printGreeting: TGeetingsFunc = (person: TUser) => {
      logger(`Hi ${person.name}`);
    };
    const user: TUser = { name: 'Jon Dow' };
    const product: TProduct = {
      name: 'apple',
      price: 2,
    };
    printGreeting(user);
    printGreeting(product);
    printGreeting({ name: 'apple', price: 2 });
    product.test = true;
  }
  // TODO: compile and run the code
  excercise8();

  // declare a `Book` class with a constructor and a method
  function excercise9() {
    const logger = localLogger('excercise9');
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
      protected title: string;
      protected year: number;
      constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
      }
      getInfo() {
        return `${this.title}, year ${this.year}`;
      }
      getAge() {
        const currentYear: number = new Date().getFullYear();
        return currentYear - this.year;
      }
      revise(newYear: number) {
        const currentYear: number = new Date().getFullYear();
        if (newYear >= this.year && newYear <= currentYear) {
          this.year = newYear;
        } else {
          logger(`${newYear} not in range`);
        }
      }
    }

    class Magazine extends Book {
      protected month: number;
      protected day: number;
      constructor(title: string, year: number, month: number, day: number) {
        super(title, year);
        this.month = month;
        this.day = day;
      }
      getInfo() {
        return `${this.title}, year ${this.year}, month ${this.month}, day ${this.day}`;
      }
    }

    const myBook = new Book('All about TS', 2023);
    logger(myBook.getInfo());
    myBook.year = 2020;
    logger(myBook.getInfo());
    logger('The age of the book is:', myBook.getAge(), 'years');
    myBook.revise(2021);
    myBook.revise(2030);
    logger(myBook.getInfo());
    const myMagazine = new Magazine('TS daily news', 2021, 9, 3);
    logger('My magazin info:', myMagazine.getInfo());
    logger('My magazin age:', myMagazine.getAge());
  }
  // TODO: compile and run the code
  excercise9();

  // try different target compiler options
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
})();
