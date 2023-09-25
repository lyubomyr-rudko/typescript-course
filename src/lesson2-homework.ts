function exercise4() {
  let one: [number, number] = [1, 1];
  let two: [number, number] = [4, 5];

  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  const res = distance(one, two);
}
exercise4();

function exercise5() {
  type TPoint = { x: number; y: number };

  const one: TPoint = { x: 1, y: 1 };
  const two: TPoint = { x: 4, y: 5 };

  function distance(p1: TPoint, p2: TPoint): number {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;

    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  const result = distance(one, two);
}
exercise5();

function excercise6() {
  const PI = 3.14;

  const circleArea = (radius: number) => {
    const area = PI * radius ** 2;
    return area;
  };
  console.log(circleArea(5), typeof PI);
  type THuman = {
    name: string;
    age: number;
  };
  const person: THuman = {
    name: "Danylo",
    age: 20,
  };

  const incr = (man: THuman): number => {
    return person.age++;
  };
  incr(person);

  console.log(person);
}
excercise6();

function excercise7() {
  function map(arr: number[], fn: (arg0: number) => number): void {
    const doubled: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      doubled.push(fn(arr[i]));
    }

    return console.log(doubled);
  }
  const array: number[] = [1, 2, 3, 4, 5];

  const makeDouble = (numb: number): number => {
    return numb * 2;
  };

  map(array, makeDouble);
}
excercise7();

function excercise8() {
  type TUser = {
    name: string;
  };
  const printGreeting = (user: TUser): void => {
    console.log(`Hello, ${user.name}`);
  };
  type TProduct = {
    name: string;
    price: number;
  };
  const product: TProduct = {
    name: "apple",
    price: 25,
  };
  printGreeting(product);
  printGreeting({ name: "Danylo" });
  printGreeting({ name: "Danylo", age: 20 } as TUser);
}
excercise8();

function excercise9() {
  class Book {
    title: string;
    year: number;
    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }

    getInfo(): string {
      return `${this.title} ${this.year}`;
    }
  }

  const paper = new Book("Tom Sawyer", 1876);
  console.log(paper.getInfo());
  paper.year = 2000;
  console.log(paper.getInfo());

  interface Book {
    getAge(): number;
  }
  paper.getAge = function () {
    const today = new Date().getFullYear();
    return today - paper.year;
  };

  console.log(paper.getAge());

  interface Book {
    revise(arg: number): number | void;
  }
  paper.revise = (newYear: number): number | void => {
    if (newYear < paper.year) {
      return console.log("year can not be less than prev year");
    }

    const today = new Date().getFullYear();
    if (today < newYear) {
      return console.log("year can not be in the future");
    }

    return (paper.year = newYear);
  };

  paper.revise(2025);
  paper.revise(1999);
  paper.revise(2013);

  class Magazine extends Book {
    month: string;
    day: number;

    constructor(title: string, year: number, month: string, day: number) {
      super(title, year);
      this.month = month;
      this.day = day;
    }

    getInfo() {
      const bookInfo = super.getInfo();
      return `${bookInfo} ${this.month} ${this.day}`;
    }
  }
  const mag = new Magazine("My Magazine", 2023, "March", 27);
  console.log(mag.getInfo());
}
excercise9();
