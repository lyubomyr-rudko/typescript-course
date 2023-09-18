// Create and use a type guard
function exercise29() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // + TODO: implement isWidget function to be a type guard
  function isWidget(arg: TThing): arg is TWidget {
    return ('name' in arg);
  }

  function printThingDescription(arg: TThing) {
    // + TODO: uncomment the following code
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

  // + TODO: add function overloading here to ensure that function return type matches the input value type
  function assignWidgetCost(obj: TWidget): TThing;
  function assignWidgetCost(obj: TGadget): TThing;
  function assignWidgetCost(obj: TThing): TThing {
    obj.cost = 100;

    return obj;
  }

  // + TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: "widget" });
  // + TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: "android" });

  console.log(a, b);
}
exercise30();

// Create call signatures
function exercise31() {
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string
  ) { }

  // +TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  };
  // +TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  }

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = "John";
    const lastName = "Smith";

    // +TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = "John";
    const lastName = "Smith";
    const email = "jsmith@somemail.some.com";

    // +TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }

  // *** add constructor signatures here ***
  type TUserConstructor = {
    new(user: string): void;
    // new(user: string, age: number): void;
  };
  interface IUserConstructor {
    new(user: string): void;
    // new(uset: string, age: number): void;
  }

  function createAndPrintUser(ctor: TUserConstructor) {
    // + TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
  }
}
exercise31();

// Create an abstract class and concrete classes
function exercise32() {
  // + TODO: make this class abstract
  abstract class Animal {
    constructor(public name: string) {
      this.name = name;
    }
    // + TODO: add abstract method named makeSound
    // makeSound ...
    abstract makeSound(): void

    eat(): void {
      console.log("eating");
    }
  }
  // + TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    constructor(public name: string) {
      super(name);
    }
    makeSound(): void {
      console.log('Woof, woof!');
    }

  }

  // + TODO: uncomment the following lines, fix the errors
  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}
exercise32();

// Create a type for a dictionary with string keys and number values
function exercise33() {
  // + TODO: create a type TDictionary
  type TDictionary = {
    [key: string]: number
  };

  // + TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
  const dictionary: TDictionary = { a: 0 };

  // + TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 0;
  // dictionary['d'] = '3'; // should cause an error error

  // + TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    str.toLocaleLowerCase().split('').forEach(character => {
      if (character in dictionary) {
        dictionary[character] = ++dictionary[character];
      } else {
        dictionary[character] = 1;
      }
    })
    const result = Object.entries(dictionary).sort((a, b) => b[1] - a[1]);
    return `the most frequent character is ${result[0][0]}`;
  }
  console.log(getMostFrequentCharacter("She sells seashells by the seashore."));
}
exercise33();

// Use index signature and caching
function exercise34() {
  // TODO: + Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  interface IStudentGrades {
    [key: string]: number[];
  };
  interface IStudentAvarageGradesCache {
    [key: string]: number;
  };

  const studentGrades: IStudentGrades = {
    Serhii: [20, 30, 40, 50],
    Bob: [22, 44, 66, 80],
    Nick: [11, 40, 60, 12],
  };
  const studentsCash: IStudentAvarageGradesCache = {};

  // + TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    if (!!studentsCash[studentName]) {
      // + TODO: calculate average grade
      console.log('From Cash');
      return studentsCash[studentName];

    } else {
      const grades = studentGrades[studentName];
      if (grades === undefined) {
        return "Student not found";
      }
      const totalGrade = grades.reduce((accum: number, grade: number): number => {
        return accum + grade;
      }, 0);
      const averageGrade = totalGrade / grades.length;
      studentsCash[studentName] = averageGrade;
      console.log('New student');
      return averageGrade;
    }
  }

  // + TODO: Iterate through the dictionary and display each student's average grade

  const printingResult = () => {
    for (const studentName in studentGrades) {
      console.log(`${studentName}: ${calculateAverageGrade(studentName)}`);
      // + TODO: call calculateAverageGrade and print the result
    }
  }
  printingResult();

  studentGrades['Oleg'] = [1, 2, 3, 4];

  printingResult();

  // + TODO: add caching for the average grade calculation to the calculateAverageGrade function
}
exercise34();
