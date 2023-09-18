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
  function assignWidgetCost(obj: TWidget): TWidget;
  function assignWidgetCost(obj: TGadget): TGadget;
  function assignWidgetCost(obj: TThing): TThing {
    obj.cost = 100;
    return obj;
  }

  // TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: "widget" } as TWidget);
  // TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: "android" } as TGadget);

  console.log(a, b);
}
exercise30();

// Create call signatures
function exercise31() {
  function handleSaveUserSubmit(firstName: string, lastName: string, email?: string) {
    if (email !== undefined) {
      console.log(`firstName:${firstName} lastName:${lastName} email:${email}`);
    } else {
      console.log(`firstName:${firstName} lastName:${lastName}`);
    }
  }

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email?: string): void;
  };
  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
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
  createForm(handleSaveUserSubmit);
  createForm2(handleSaveUserSubmit);

  // *** add constructor signatures here ***

  type TUser = {
    name: string;
  };
  type TUserConstructor = { new (name: string): TUser };
  interface IUserConstructor {
    new (name: string): TUser;
  }

  function createAndPrintUser(ctor: IUserConstructor) {
    const user = new ctor("John Smith");
    console.log(user);
  }
  class User implements TUser {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  createAndPrintUser(User);
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
  class Dog extends Animal {
    makeSound(): void {
      console.log(this.name, "make sound:Gav Gav");
    }
  }

  // TODO: uncomment the following lines, fix the errors
  const myDog = new Dog("Buddy");
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
    name: 21,
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary["c"] = 3;
  // dictionary['d'] = '3'; // should cause an error error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  type TGetMostFrequentCharacter = (str: string) => TDictionary;
  const getMostFrequentCharacter: TGetMostFrequentCharacter = (str) => {
    let final: TDictionary = {};
    for (let i = 0; i < str.length; i++) {
      let item = str[i];
      final[item] = final[item] ? (final[item] += 1) : (final[item] = 1);
    }
    const result = Object.entries(final).sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      }
      if (a[1] < b[1]) {
        return +1;
      }
      return 0;
    });
    return Object.fromEntries(result.splice(0, 1));
  };
  console.log(getMostFrequentCharacter("She sells seashells by the seashore."));
}
exercise33();

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  type TStudentGrades = {
    [key: string]: number[];
  };
  const studentGrades: TStudentGrades = {
    Oleg: [2, 5, 7, 11, 6, 5, 12, 9, 10],
    Vasya: [4, 9, 3, 6, 9, 3, 7, 9, 12],
    Dima: [4, 5, 2, 3, 8, 6, 11, 6, 11],
    Roman: [1, 3, 5, 3, 4, 7, 8, 9, 12],
    Kirill: [4, 12, 11, 9, 8, 3, 8, 5, 3],
    Tolya: [7, 8, 9, 11, 10, 3, 6, 7, 9],
  };
  type TStudentAverageGradesCash = {
    [key: string]: number;
  };
  const studentAverageGradesCash: TStudentAverageGradesCash = {};
  // TODO: Implement function to calculate the average grade for a student
  type TcalculateAverageGrade = (studentName: string) => number | string;
  const calculateAverageGrade: TcalculateAverageGrade = (studentName) => {
    const studentFound = studentName !== undefined;
    if (studentFound) {
      if (!studentAverageGradesCash[studentName]) {
        const averageGrade =
          studentGrades[studentName].reduce((a, b) => a + b, 0) / studentGrades[studentName].length;
        studentAverageGradesCash[studentName] = averageGrade;
      }
      return studentAverageGradesCash[studentName];
    } else {
      return "Student not found";
    }
  };

  // TODO: Iterate through the dictionary and display each student's average grade
  for (const studentName in studentGrades) {
    // TODO: call calculateAverageGrade and print the result
    calculateAverageGrade(studentName);
  }
  console.log(studentAverageGradesCash);
  // TODO: add caching for the average grade calculation to the calculateAverageGrade function
}
exercise34();
