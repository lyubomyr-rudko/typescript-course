(function () {
  const loggerMain = (hm: string) => (ex: string) =>
    function (...args: any[]) {
      console.log(hm, ex, ...args);
    };
  const localLogger = loggerMain('lesson6 - homework');

  // Create and use a type guard
  function exercise29() {
    const logger = localLogger('exercise29');
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
      //TODO: uncomment the following code
      if (isWidget(arg)) {
        logger(arg.name);
      } else {
        logger(arg.os);
      }
    }
    printThingDescription({ name: 'widget' });
    printThingDescription({ os: 'android' });
  }
  exercise29();

  // Create an overloaded function definitions
  function exercise30() {
    const logger = localLogger('exercise30');
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
    const a = assignWidgetCost({ name: 'widget' } as TWidget);
    // TODO: fix same here - typeof b: TThing, not TGadget
    const b = assignWidgetCost({ os: 'android' } as TGadget);

    logger(a, b);
  }
  exercise30();

  // Create call signatures
  function exercise31() {
    const logger = localLogger('exercise31');
    function handleSaveUserSubmit(
      firstName: string,
      lastName: string,
      email?: string,
    ) {
      if (email !== undefined) {
        logger(
          `Submit firstName:${firstName} lastName:${lastName} email:${email}`,
        );
      } else {
        logger(`Submit firstName:${firstName} lastName:${lastName}`);
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
      const firstName = 'John';
      const lastName = 'Smith';

      // TODO: uncomment the following line
      onSubmit(firstName, lastName);
    }
    function createForm2(onSubmit: ISaveUserCallback) {
      const firstName = 'John';
      const lastName = 'Smith';
      const email = 'jsmith@somemail.some.com';

      // TOOD: uncomment the following line
      onSubmit(firstName, lastName, email);
    }
    createForm(handleSaveUserSubmit);
    createForm2(handleSaveUserSubmit);

    // *** add constructor signatures here ***
    type TUser = {
      name: string;
    };
    type TUserConstructor = new (name: string) => TUser;
    interface IUserConstructor {
      new (name: string): TUser;
    }

    function createAndPrintUser(ctor: IUserConstructor) {
      // TOOD: uncomment the following lines
      const user = new ctor('John Smith');
      logger(user);
    }
    class User implements TUser {
      public name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
    createAndPrintUser(User);
  }
  exercise31();

  // Create an abstract class and concrete classes
  function exercise32() {
    const logger = localLogger('exercise32');
    // TODO: make this class abstract
    abstract class Animal {
      constructor(public name: string) {
        this.name = name;
      }
      // TODO: add abstract method named makeSound
      // makeSound ...
      abstract makeSound(): void;

      eat(): void {
        logger(this.name, 'eating');
      }
    }
    // TODO: inherit from Animal and implement makeSound method
    class Dog extends Animal {
      makeSound(): void {
        logger(this.name, 'Wof Wof');
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
    const logger = localLogger('exercise33');
    // TODO: create a type TDictionary
    type TDictionary = {
      [key: string]: number;
    };

    // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
    const dictionary: TDictionary = {};

    // TODO: uncomment the following lines, fix the errors
    dictionary['c'] = 3;
    //dictionary['d'] = '3'; // should cause an error error

    // TODO: implement a function that calculates number of characters
    // in a string using the dictionary type, and returns a most frequent character

    function createDictionary(str: string): TDictionary {
      const dictionary: TDictionary = {};
      for (const i of str) {
        if (i in dictionary) {
          dictionary[i] = ++dictionary[i];
        } else {
          dictionary[i] = 1;
        }
      }
      return dictionary;
    }
    function findFrequent(data: TDictionary): TDictionary {
      const biggestVal: number = Math.max(...Object.values(data));
      const biggestKey: string = Object.keys(data).find(
        (key) => data[key] === biggestVal,
      ) as string;

      return { [biggestKey]: biggestVal };
    }
    function getMostFrequentCharacter(str: string): TDictionary {
      return findFrequent(createDictionary(str));
    }
    logger(getMostFrequentCharacter('She sells seashells by the seashore.'));
  }
  exercise33();

  // Use index signature and caching
  function exercise34() {
    const logger = localLogger('exercise34');
    // TODO: Define a dictionary of student grades, add type definition using index signature
    // key is a student name, value is an array of grades (numbers)
    type TStudentGrades = {
      [kay: string]: number[];
    };
    type TStudentGradesCash = {
      [kay: string]: number;
    };
    const studentGrades: TStudentGrades = {
      MarkAureliy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Yulian: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      AntoniyII: [1, 2, 3, 4, 2, 6, 2, 8, 2, 10],
      Brown: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Stan: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Mark: [1, 3, 3, 3, 5, 6, 3, 8, 9, 10],
      Antoniy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Yuliy: [1, 2, 3, 4, 5, 4, 7, 4, 9, 10],
    };
    const studentGradesCash: TStudentGradesCash = {};

    // TODO: Implement function to calculate the average grade for a student
    function calculateAverageGrade(
      studentName: string,
      grades: number[],
    ): TStudentGradesCash {
      if (grades.join('') in studentGradesCash) {
        return {
          [studentName]:
            studentGradesCash[
              grades.join('') as keyof typeof studentGradesCash
            ],
        };
      } else {
        const average: number =
          grades.reduce((a, b) => a + b, 0) / grades.length;
        studentGradesCash[grades.join('')] = average;
        return { [studentName]: average };
      }
    }

    // TODO: Iterate through the dictionary and display each student's average grade
    for (const studentName in studentGrades) {
      logger(calculateAverageGrade(studentName, studentGrades[studentName]));
    }

    // TODO: add caching for the average grade calculation to the calculateAverageGrade function
  }
  exercise34();
})();
