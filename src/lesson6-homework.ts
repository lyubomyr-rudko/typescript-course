// Create and use a type guard
function exercise29() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // TODO: implement isWidget function to be a type guard
  function isWidget(arg: TThing): arg is TWidget {
    return (arg as TWidget).name !== undefined;
  }

  function printThingDescription(arg: TThing) {
    // TODO: uncomment the following code
    if (isWidget(arg)) {
      console.log(arg.name);
    } else {
      console.log(arg.os);
    }
  }
  printThingDescription({ name: "widget" });
  printThingDescription({ os: "android" });
}
exercise29();

// Create an overloaded function definitions
function exercise30() {
  type TWidget = {
    name: string;
    cost?: number;
  };
  type TGadget = {
    os: string;
    cost?: number;
  };
  type TThing = TWidget | TGadget;

  // TODO: add function overloading here to ensure that function return type matches the input value type
  function assignWidgetCost(name: string): TWidget;
  function assignWidgetCost(os: string): TGadget;
  function assignWidgetCost(obj: TThing): TThing;
  function assignWidgetCost(arg: string | TThing): TThing {
    if (typeof arg === "string") {
      if (arg.includes("android")) {
        return { os: arg, cost: 100 };
      } else {
        return { name: arg, cost: 100 };
      }
    } else {
      arg.cost = 100;
      return arg;
    }
  }

  // TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost("widget");
  // TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost("android");

  console.log(a, b);
}
exercise30();

// Create call signatures
function exercise31() {
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string
  ) {}

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string, email?: string): void;
  };
  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string, email?: string): void;
  }

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = "John";
    const lastName = "Smith";

    // TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = "John";
    const lastName = "Smith";
    const email = "jsmith@somemail.some.com";

    // TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }

  // *** add constructor signatures here ***
  type TUserConstructor = new (name: string) => { name: string };
  
  interface IUserConstructor {
    new (name: string): { name: string };
  }

  function createAndPrintUser(ctor: IUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
  }
}
exercise31();

// Create an abstract class and concrete classes
function exercise32() {
  // TODO: make this class abstract
  abstract class Animal {
    constructor(public name: string) {
      this.name = name;
    }

    // TODO: add abstract method named makeSound
    abstract makeSound(): void;

    eat(): void {
      console.log("eating");
    }
  }

  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal{
    constructor(name: string) {
      super(name);
    }

    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }

  // TODO: uncomment the following lines, fix the errors
  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}
exercise32();

// Create a type for a dictionary with string keys and number values
function exercise33() {
  // TODO: create a type TDictionary
  type TDictionary = {
    [key: string]: number;
  };

  // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
  const dictionary: TDictionary = {
    'a': 1,
    'b': 2,
    'c': 3
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 3;
  // dictionary['d'] = '3'; // should cause an error error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    const charCount: TDictionary = {};

    for (const char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }

    let mostFrequentChar = '';
    let maxCount = 0;

    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        mostFrequentChar = char;
        maxCount = charCount[char];
      }
    }

    return mostFrequentChar;
  }
  console.log(getMostFrequentCharacter("She sells seashells by the seashore."));
}
exercise33();

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  type TDictionary = {
    [key: string]: number[];
  };
  // key is a student name, value is an array of grades (numbers)
  const studentGrades: TDictionary = {
    "John": [85, 90, 92],
    "Jane": [78, 88, 95],
    "Bob": [92, 88, 76],
  };

  // TODO: add caching for the average grade calculation to the calculateAverageGrade function
   const averageCache: { [key: string]: number } = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    if (averageCache[studentName]) {
      return averageCache[studentName];
    } else {
      const studentFound = false;
      if (!studentFound) {
        let averageGrade = 0;
        for (let i = 0; i < studentGrades[studentName].length; i++) {
          averageGrade += studentGrades[studentName][i]
        }
        return averageGrade / studentGrades[studentName].length;
      } else {
        return "Student not found";
      }
    }
  }

  // TODO: Iterate through the dictionary and display each student's average grade
  for (const studentName in studentGrades) {
    const averageGrade = calculateAverageGrade(studentName);
    console.log(`${studentName}: ${averageGrade}`);
  }
}
exercise34();
