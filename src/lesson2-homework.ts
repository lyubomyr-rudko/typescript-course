import { TupleType } from "typescript";

// 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  type Tuple = [number, number];
  let a: Tuple;
  let b: Tuple;
  // TODO: assign values to the variables (1,1) and (4,5)
  a = [1, 1];
  b = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  const x1 = a[0]; // TODO: replace with the first element of p1
  const y1 = a[1]; // TODO: replace with the second element of p1
  const x2 = b[0]; // TODO: replace with the first element of p2
  const y2 = b[1]; // TODO: replace with the second element of p2
  // TODO: calculate the distance

  // function distance(p1: [number, number], p2: [number, number]): number {
  //       p1 = a;
  //       p2 = b;
  //       const x1 = p1[0]; // TODO: replace with the first element of p1
  //       const y1 = p1[1]; // TODO: replace with the second element of p1
  //       const x2 = p2[0]; // TODO: replace with the first element of p2
  //       const y2 = p2[1]; // TODO: replace with the second element of p2
  //       // TODO: calculate the distance
  const distance = Math.hypot((x2 - x1), (y2 - y1));
  return console.log(distance);
}
// TODO: call the function and print the result to console
excercise4();



// TODO: compile and run the code

// 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = {
    x: number;
    y: number;
  };
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  let p1: TPoint = {
    x: 1, y: 4
  };
  let p2: TPoint = {
    x: 4, y: 5
  };
  function distance(p1: TPoint, p2: TPoint): number {
    // /////variant1
    // const x1 = p1.x; // TODO: replace with the x-coordinate of p1
    // const y1 = p1.y; // TODO: replace with the y-coordinate  of p1
    // const x2 = p2.x; // TODO: replace with the x-coordinate  of p2
    // const y2 = p2.y; // TODO: replace with the y-coordinate  of p2
    // // TODO: calculate the distance
    // // TODO: rewrite code to use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;

    return Math.hypot((x2 - x1), (y2 - y1));
  }
  console.log(distance(p1, p2));

  // TODO: call the function and print the result to console
}
// TODO: compile and run the code

excercise5();



// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter

  const r = 10;
  function squareCircle(r: number) {
    return PI * r * r / 2;
  }
  // TODO: call the function and print the result to console
  const area: number = squareCircle(r);
  console.log(area);
  // TODO: check the type of PI variable
  alert(typeof (PI));
  // TODO: declare a const variable that is an object with two properties - name and age
  const collegue = {
    name: "Nemo ",
    age: 50,
  }
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function incAge(collegue: { age: number }) {
    collegue.age++;
  }
  // TODO: call the function and print the person object to console
  incAge(collegue);
  console.log(collegue);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations

  function map(array: number[], function: (number) => number ): number[] {
    // TODO: add logic here
    // TODO: use regular for loop
    return [];
  }
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
}
// TODO: compile and run the code
excercise7();