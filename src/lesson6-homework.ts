// Create and use a type guard
function exercise29() {
  console.log("\n---Exercise 29 start---\n")

  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // TODO: implement isWidget function to be a type guard
  function isWidget(arg: TThing): arg is TWidget {
    return (arg as TWidget)?.name !== undefined;
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

  console.log("\n---Exercise 29 end---\n")
}
exercise29();

// Create an overloaded function definitions
function exercise30() {
  console.log("\n---Exercise 30 start---\n")

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
  function assignWidgetCost(obj: TWidget): TWidget
  function assignWidgetCost(obj: TGadget): TGadget 
  function assignWidgetCost(obj:TThing):TThing{
    obj.cost = 100;

    return obj;
  }

  // TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: "widget" });
  // TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: "android" });

  console.log(a, b);
  console.log("\n---Exercise 30 end---\n")
}
exercise30();

// Create call signatures
function exercise31() {
  console.log("\n---Exercise 31 start---\n")

  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string
  ) {}

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = (firstName: string,lastName: string, email?: string)=>void
  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string,lastName: string, email?: string):void
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
  type TUserConstructor = new (firstName: string, lastName: string, email?: string)=>void
  interface IUserConstructor {
    new (firstName: string,lastName: string, email?: string):void
  }

  function createAndPrintUser(ctor: IUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John', "Smith");
    console.log(user);
  }

  createAndPrintUser(class{constructor(public firstName: string, public lastName: string, public email?: string){}}) //wow

  console.log("\n---Exercise 31 end---\n")
}
exercise31();

// Create an abstract class and concrete classes
function exercise32() {
  console.log("\n---Exercise 32 start---\n")

  // TODO: make this class abstract
  abstract class Animal {
    constructor(public name: string) {
      this.name = name;
    }
    // TODO: add abstract method named makeSound
    abstract makeSound():void;
    eat(): void {
      console.log("eating");
    }
  }
  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    makeSound(): void {
        console.log("Dog sound")
    }
  }

  // TODO: uncomment the following lines, fix the errors
  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();

  console.log("\n---Exercise 32 end---\n")
}
exercise32();

// Create a type for a dictionary with string keys and number values
function exercise33() {
  console.log("\n---Exercise 33 start---\n")
  // TODO: create a type TDictionary
  type TDictionary = {
    [key:string]:string
  };

  // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
  const dictionary:TDictionary = {
    c:"Dodo",
    d:"06868686868",
    e:"none"
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary['c'] = '3';
  dictionary['d'] = '3'; // should cause an error error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    const preparedString = str.toLocaleLowerCase()
    console.log("d")
    type TSymbolCounterDictionary = {
      [key:string]:number
    }

    const lettersDictionary:TSymbolCounterDictionary = {}

    for(let i = 0; i<preparedString.length; i++){
      if(!lettersDictionary[preparedString[i]]){
        lettersDictionary[preparedString[i]] = 1
      } else{
        lettersDictionary[preparedString[i]]++
      }
    }

    let highestNumber:number = 0
    let resultedSymbol:string = ""

    for (let key in lettersDictionary) {
      if(highestNumber < lettersDictionary[key]){
        highestNumber = lettersDictionary[key]
        resultedSymbol = key
      }
    }

    console.log("highest number", highestNumber)
    console.log(lettersDictionary)

    return resultedSymbol;
  }
  console.log(getMostFrequentCharacter("She sells seashells by the seashore."));

  console.log("\n---Exercise 33 end---\n")
}
exercise33();

// Use index signature and caching
function exercise34() {
  console.log("\n---Exercise 34 start---\n")
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  type TDictionaryStudentsGrade = {
    [key:string]:number[]
  }

  type TDictionaryStudentsAverageGrade = {
    [key:string]:number
  }

  const studentGrades:TDictionaryStudentsGrade = {
    "Codo": [7,5,5,1,1],
    "Dodo": [6,7,4,7,3],
    "Fodo": [4,4,7,1,1],
    "Rodo": [1,1,1,1,1]
  };

  const cashedStudents:TDictionaryStudentsAverageGrade = { }

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    const studentCashed:boolean = !!cashedStudents[studentName]
    if(studentCashed){
      return cashedStudents[studentName]
    }

    const studentFound:boolean = !!studentGrades[studentName]

    if (studentFound) {
      // TODO: calculate average grade
      const sum:number = studentGrades[studentName].reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)

      const averageGrade:number = sum / studentGrades[studentName].length

      cashedStudents[studentName] = averageGrade

      return averageGrade
    } else {
      return "Student not found";
    }
  }

  // TODO: Iterate through the dictionary and display each student's average grade
  for (const studentName in studentGrades) {
    // TODO: call calculateAverageGrade and print the result
    const averageGrade = calculateAverageGrade(studentName)
    console.log(`${studentName} average grade - ${averageGrade} points`)
  }

  // TODO: add caching for the average grade calculation to the calculateAverageGrade function. Done

  console.log("\n---Exercise 34 end---\n")
}
exercise34();
