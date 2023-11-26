// Use mapping types
function exercise47() {
  // implement mapped type that takes two types T and K
  // K must be a union of strings or numbers or symbols
  // the mapped type should create a new type that has all properties included in list K, and the value of each property is T
  type TRecord<K extends string | number | symbol, T> = {
    [P in K]: T;
  };
  // TODO: uncomment the following code and check if your mapped type works
  type TPoint = TRecord<"x" | "y" | "z", number>;
  const point: TPoint = {
    x: 1,
    y: 2,
    z: 3,
  };
}
exercise47();

// Use mapping types modifiers
function exercise48() {
  // implement mapped type that makes all properties of T optional and nullable
  type TPartialNullable<T> = {
    [P in keyof T]+?: T[P] | null;
  };

  type TPoint = {
    x: number;
    y: number;
    z: number;
    name: string;
  };

  type TNullablePoint = TPartialNullable<TPoint>;
  const p1: TNullablePoint = { x: 10 };
  const p2: TNullablePoint = { x: 10, y: null };
}
exercise48();

// Template Literal Type
function exercise49() {
  // TODO: create a type that represents a string that contains TShirts sizes (S, M, L, XL, XXL)
  type TShirtSizes = "S" | "M" | "L" | "XL" | "XXL"
  // TODO: create a type that represents a string that contains TShirts colors (red, green, blue)
  type TShirtColors = "red" | "green" | "blue"
  // TODO: create a type that represents a string that contains TShirts sizes and colors (e.g. "S-red", "M-green", "L-blue")
  type TShirtDescription = `${TShirtSizes}-${TShirtColors}`
  // TODO: create a function that takes a size and a color and returns a TShirt size and color
  function createTShirt(size:TShirtSizes, color:TShirtColors):TShirtDescription{
    return `${size}-${color}` //wow
  }

  // TODO: make sure you annotate the params and return type of the function
  const tShirt = createTShirt("S", "red");
}
exercise49();

// Fix autocomplete problem for literal union types
function exercise50() {
  // TODO: observe the problem with autocomplete in the line createCar("BMW");
  // TODO: fix the problem by using the approach from the lesson
  type Brands = "BMW" | "Mercedes" | "Audi" | (string & {});

  function createCar(brand: Brands) {
    return `${brand} car`;
  }
  // TODO: check if autocomplete works before and after the fix
  // it works
  const car = createCar("BMW");
}
exercise50();

// Use satisfies constraint
function exercise51() {
  // Use satisfies constraint
  // TODO: create a tuple type that represents a 3d point
  type TPoint = [x:number, y:number, z:number];
  type ShapeStrings = "circle" | "square"

  // TODO: create a type that represents a 3d shapes (key is a string, value is an array of 3d points)

  type TShapes = {
    [key in ShapeStrings | (string & {})]:TPoint[]
  }

  const shapes = {
    circle: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    square: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    triangle:[
      [1, 2, 3],
    ]
  } satisfies TShapes;

  // TODO: create a function that takes a list points and prints them into console
  function drawShape(points: TPoint[]) {
    console.log(points);
  }

  drawShape(shapes.triangle); // TODO: uncomment and fix this to have compile check error, using satisfies constraint
}
exercise51();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra2() {
  /**
   * Write a program that prints the integers from 1 to 100 (inclusive).
   * But:
   *  - for multiples of three, print Fizz (instead of the number)
   *  - for multiples of five, print Buzz (instead of the number)
   *  - for multiples of both three and five, print FizzBuzz (instead of the number)
   */

  function fizzBuzz() {
    // TODO: add your code here
  }
  fizzBuzz();
  /**
   * 1
   * 2
   * Fizz
   * 4
   * Buzz
   * ...
   */

  // TODO: convert fizzBuzz function to return a string output instead of printing to console
  function fizzBuzzToString() {
    // TODO: add your code here
  }
  fizzBuzzToString();
  // TODO: write a test to validate fizzBuzz output using console.assert
  // console.assert( ... );
}
exerciseExtra2();
