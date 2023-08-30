// 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
const exercise4 = () => {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  const p1: [number, number] = [1, 1]
  const p2: [number, number] = [4, 5]

  const distance = (p1: [number, number], p2: [number, number]): number => {
    const x1 = p1[0] // TODO: replace with the first element of p1
    const y1 = p1[1] // TODO: replace with the second element of p1
    const x2 = p2[0] // TODO: replace with the first element of p2
    const y2 = p2[1] // TODO: replace with the second element of p2
    // TODO: calculate the distance

    const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    return result;
  }
  // TODO: call the function and print the result to console
  console.log(distance(p1, p2))
}
exercise4()
// TODO: compile and run the code

//Done -----------------------------------------------------------------------------------------------------

// 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
const exercise5 = () => {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = { x: number, y: number };

  const p1 = {x: 1, y: 1}
  const p2 = {x: 4, y: 5}

  const distance = (p1: TPoint, p2: TPoint): number => {
    // const x1 = p1.x // TODO: replace with the x-coordinate of p1
    // const y1 = p1.y // TODO: replace with the y-coordinate  of p1
    // const x2 = p2.x // TODO: replace with the x-coordinate  of p2
    // const y2 = p2.y // TODO: replace with the y-coordinate  of p2
    
    // TODO: rewrite code to use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1
    const { x: x2, y: y2 } = p2

    // TODO: calculate the distance
    const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    return result;
  }
  // TODO: call the function and print the result to console
  console.log(distance(p1, p2))
}
exercise5()
// TODO: compile and run the code

//Done -----------------------------------------------------------------------------------------------------

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  // TODO: call the function and print the result to console
  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  // TODO: call the function and print the person object to console
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  // function map(arr, fn) {
    // TODO: add logic here
    // TODO: use regular for loop
    return [];
  }
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
// }
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  // TODO: create a type for product, with name property and price property
  // TODO: create a product object, asign it some object literal
  // TODO: call the function with product as a parameter
  // TODO: call the function with object literal as a parameter
  // TODO: try adding extra property to the object literal - observe the error
  // TODO: fix the error with type assertion
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
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
}
// TODO: compile and run the code
excercise9();

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
}
// TODO: compile and run the code
excercise10();
