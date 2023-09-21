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
    return (arg as TWidget).name !== undefined;
  }

  function printThingDescription(arg: TThing): void {
    // + TODO: uncomment the following code
    if (isWidget(arg)) {
      console.log(arg.name);
    } else {
      console.log(arg.os);
    }
  }
  printThingDescription({ name: 'widget' });
  printThingDescription({ os: 'android' });
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
  function assignWidgetCost(obj: TThing): TThing {
    if (obj.cost === undefined) {
      obj.cost = 100;
    }

    return obj;
  }

  // + TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: 'widget' });
  // + TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: 'android' });

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

  // + TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string, email?: string): void;
  };
  // + TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string, email?: string): void;
  }

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    // + TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';

    // + TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }

  // *** add constructor signatures here ***
  type TUserConstructor = { new (firstName: string): string };
  interface IUserConstructor {
    new (firstName: string): string;
  }

  function createAndPrintUser(ctor: IUserConstructor) {
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
    abstract makeSound(): void;
    eat(): void {
      console.log('eating');
    }
  }
  // + TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    makeSound(): void {
      console.log('Bark');
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
    [key: string]: number;
  };

  // + TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
  const dictionary: TDictionary = { a: 1, b: 2, c: 3 };

  // + TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 3;
  // dictionary['d'] = '3'; // should cause an error error

  // + TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    let temp = str.toLowerCase().split('');
    let dictionary: TDictionary = {};
    for (let i = 0; i < temp.length; i++) {
      if (Object.keys(dictionary).find((el) => el === temp[i])) {
        dictionary[temp[i]] = ++dictionary[temp[i]];
      } else {
        dictionary[temp[i]] = 1;
      }
    }
    const res = Object.entries(dictionary).sort((a, b) => b[1] - a[1]);
    return res[0][0];
  }
  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
}
exercise33();

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)

  type TStudent = {
    [key: string]: number[];
  };
  const studentGrades: TStudent = {
    Jhon: [5, 2, 5, 3, 4],
    Sandra: [4, 4, 5, 5, 5],
    Michael: [3, 4, 4, 3, 3, 5],
  };

  // + TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number[] | string {
    if (studentGrades[studentName]) {
      return (studentGrades[studentName] = [
        studentGrades[studentName].reduce((acc, cur) => acc + cur),
      ]);
    } else {
      return 'Student not found';
    }
  }

  // + TODO: Iterate through the dictionary and display each student's average grade
  for (const studentName in studentGrades) {
    // + TODO: call calculateAverageGrade and print the result
    calculateAverageGrade(studentName);
  }
  // + TODO: add caching for the average grade calculation to the calculateAverageGrade function
  console.log(studentGrades);
}
exercise34();
