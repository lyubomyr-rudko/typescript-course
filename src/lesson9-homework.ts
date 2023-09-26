// Use mappping types
function exercise47() {
  // implement mapped type that takes two types T and K
  // K must be a union of strings or numbers or symbols
  // the mapped type should create a new type that has all properties included in list K, and the value of each property is T
  type TRecord<K extends string | number | symbol, T> = {
    [key in K]: T;
  };
  // TODO: uncomment the following code and check if your mapped type works
  type TPoint = TRecord<'x' | 'y' | 'z', number>;
  const point: TPoint = {
    x: 1,
    y: 2,
    z: 3,
  };
}
exercise47();

// Use mappping types modifiers
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
  // TODO: create a type that represents a string that contains Tshirts sizes (S, M, L, XL, XXL)
  // TODO: create a type that represents a string that contains Tshirts colors (red, green, blue)
  // TODO: create a type that represents a string that contains Tshirts sizes and colors (e.g. "S-red", "M-green", "L-blue")
  // TODO: create a function that takes a size and a color and returns a Tshirt size and color
  // TOOD: make sure you annotate the params and return type of the function
  type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  type TColor = 'red' | 'green' | 'blue';
  type TTshirt<S extends TSize, K extends TColor> = `${S}-${K}`;

  function createTshirt<S extends TSize, K extends TColor>(
    size: S,
    color: K,
  ): TTshirt<S, K> {
    return `${size}-${color}`;
  }
  const tshirt = createTshirt('S', 'red');
}
exercise49();

// Fix autocoplete problem for literal union types
function exercise50() {
  // TODO: observe the problem with autocomplete in the line createCar("BMW");
  // TODO: fix the problem by using the approach from the lesson
  type Brands = 'BMW' | 'Mercedes' | 'Audi' | (string & {});

  function createCar(brand: Brands) {
    return `${brand} car`;
  }
  // TODO: check if autocomplete works before and after the fix
  const car = createCar('BMW');
}
exercise50();

// Use satisfies constraint
function exercise51() {
  // Use satisfies constraint
  // TODO: create a tuple type that represents a 3d point
  type TPoint = [x: number, y: number, z: number];
  type TShapes = Record<string, TPoint[]>;
  const shapes: TShapes = {
    circle: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    square: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  };

  // TODO: create a function that takes a list points and prints them into console
  function drawShape(points: TPoint[]) {
    console.log(points);
  }

  drawShape(shapes.square); // TOOD: uncomment and fix this to have compile check error, using satisfies constraint
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
    const re1 = /3/gi;
    const re2 = /5/gi;
    for (let i = 0; i <= 100; i++) {
      let textNum = i.toString();
      textNum = textNum.replace(re1, 'Fizz');
      textNum = textNum.replace(re2, 'Buzz');
      console.log(textNum);
    }
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

  // TODO: convert fizzBuzz to generate a string instead of printing to console
  function fizzBuzzToString(): string {
    const re1 = /3/gi;
    const re2 = /5/gi;
    let finalText: string = '';
    for (let i = 0; i <= 100; i++) {
      const textNum = i.toString();
      finalText = finalText + textNum;
    }
    finalText = finalText.replace(re1, 'Fizz');
    finalText = finalText.replace(re2, 'Buzz');
    return finalText;
  }
  fizzBuzzToString();
  // TODO: write a test to validate fizzBuzz output using console.assert
  const testValue = `012Fizz4Buzz67891011121Fizz141Buzz161718192021222Fizz242Buzz26272829Fizz0Fizz1Fizz2FizzFizzFizz4FizzBuzzFizz6Fizz7Fizz8Fizz94041424Fizz444Buzz46474849Buzz0Buzz1Buzz2BuzzFizzBuzz4BuzzBuzzBuzz6Buzz7Buzz8Buzz96061626Fizz646Buzz666768697071727Fizz747Buzz767778798081828Fizz848Buzz868788899091929Fizz949Buzz96979899100`;
  console.assert(fizzBuzzToString() === testValue, 'Function not woking');
}
exerciseExtra2();
