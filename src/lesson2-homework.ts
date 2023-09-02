
function excercise4() {
  type TPoint2D = [number, number];
  const p1: TPoint2D = [1, 1];
  const p2: TPoint2D = [4, 5];

  function distance(p1: TPoint2D, p2: TPoint2D): number {
    const x1 = p1[0];
    const y1 = p1[1];
    const x2 = p2[0];
    const y2 = p2[1];
    const result: number = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return result;

  }
  console.log(distance(p1, p2));
}

excercise4();

function excercise5() {
  type TPoint = { x: number, y: number };
  const p1: TPoint = { x: 1, y: 1 };
  const p2: TPoint = { x: 4, y: 5 };

  function distance(p1: TPoint, p2: TPoint): number {
    const x1 = p1.x;
    const y1 = p1.y;
    const x2 = p2.x;
    const y2 = p2.y;
    const result: number = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return result;
  }
  console.log(distance(p1, p2));
}

excercise5();

function excercise6() {

  const PI = 3.14;

  function circleArea(radius: number): number {
    return PI * radius ** 2;
  }
  console.log('circleArea', circleArea(2));

  type TPerson = { name: string, age: number };
  const person: TPerson = { name: 'Serhii', age: 32 };

  function incAge(person: TPerson): void {
    person.age++;
  }
  incAge(person);
  console.log('person', person);
}
excercise6();

function excercise7() {

  type TFn = (num: number) => number;
  type TMap = (arr: number[], fn: TFn) => number[];

  const map: TMap = (arr, fn) => {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i]))
    }
    return newArr;
  }

  const numbers: number[] = [1, 2, 3, 4];

  const dublesNumber: TFn = (num) => num * 2;

  const result = map(numbers, dublesNumber);

  console.log(result);

}

excercise7();

function excercise8() {

  type TUser = { name: string };
  type TProduct = { name: string, price: number };

  const printGreeting = (user: TUser) => {
    console.log(user);
  }

  const product: TProduct = { name: 'some product', price: 333 };

  printGreeting(product);

  printGreeting({ name: 'aaaaa' });

  printGreeting({ name: 'aaaaa', age: 222 } as TUser);
}

excercise8();

function excercise9() {

  class Book {
    title: string;
    protected year: number;
    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }
    getInfo(): string {
      return `${this.title} - ${this.year}`;
    }

    getAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }

    revise(newYear: number): void {
      const currentYear = new Date().getFullYear();
      if (currentYear > newYear && this.year < newYear) {
        this.year = newYear;
      } else {
        console.log('wrong new Year');
      }
    }
  }

  const book = new Book('potter', 1993);
  console.log(book.getInfo());

  // book.year = 2005;  // Error becouse add protected modifier

  console.log(book.getInfo());

  console.log(book.getAge());

  book.revise(2025);


  class Magazine extends Book {
    month: number;
    day: number;

    constructor(title: string, year: number, month: number, day: number) {
      super(title, year);
      this.month = month;
      this.day = day;
    }

    getInfo(): string {
      const getInfoBook = super.getInfo();
      return `${getInfoBook} month: ${this.month} day: ${this.day}`;
    }
  }
  const magazine = new Magazine('Serhii', 2000, 12, 18);
  console.log(magazine.getInfo());
  console.log(magazine.getAge());
}

excercise9();
