function exercise17() {
  // TODO: define class Student with properties name, age, studentId
  // TODO: add constructor to initialize the properties
  // TODO: add method printStudent to print the student info to console
  // TODO: create an instance of the class Student
  // TODO: print the student info to console
  // TODO: try to change the studentId property
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
  class Student {
    constructor(public name: string, public age: number, readonly studentId: string) {
    }

    printStudent() {
      console.log(`Student's ${this.studentId} name is ${this.name} and student is ${this.age} years old` )
    }
  }

  const student = new Student('John', 19, 'KT34242');
  student.printStudent();
  // student.studentId = 'TT344324'; it's impossible due to readonly property
}
// TODO: compile and run the code
exercise17();

// use optional modifier to fix compile time error
function exercise18() {
  type TWidget = {
    name: string;
    width: number;
    height: number;
    color?: string;
    os?: string;
    space: number;
  };

  // TODO: uncomment the code below and update the type definition to fix compile time error

  const widgetWithSize: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  }

  const desktopWidget:TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    os: 'windows',
    space: 100,
  }

  // TODO: print the result to console
  console.log(widgetWithSize, desktopWidget)
}
// TODO: compile and run the code
exercise18();

// use uniton types to replace unknown type for compile time type checking
function exercise19() {
  function formatCommandLine(command: string | string[]) {
    if (typeof command === "string") {
      return command.trim();
    } else if (Array.isArray(command)) {
      return command.map((arg) => arg.trim()).join(" ");
    }
    throw new Error("command must be string or string[]");
  }

  console.log(formatCommandLine("  git status  ")); // git status
  console.log(formatCommandLine(["git ", " status "])); // git status
  // console.log(formatCommandLine(false)); // error because boolean is not assignable to string or array of strings
}
// TODO: compile and run the code
exercise19();

// use literal types for type checking
function exercise20() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  // TODO: add type check to the function below
  type TMove = 'rock' | 'paper' | 'scissors';
  function rockPaperSizorsVins(me: TMove, other: TMove) {
    if (me === "rock" && other === "paper") {
      return false;
    }
    if (me === "paper" && other === "scissors") {
      return false;
    }
    if (me === "scissors" && other === "rock") {
      return false;
    }
    return true;
  }
  console.log(rockPaperSizorsVins("rock", "paper")); // false
  console.log(rockPaperSizorsVins("paper", "scissors")); // false
  console.log(rockPaperSizorsVins("scissors", "rock")); // false
  console.log(rockPaperSizorsVins("rock", "scissors")); // true
  // TODO: make sure that the following calls are not allowed
  // console.log(rockPaperSizorsVins("papapaper", "scissors")); // papapaper is not assignable to TMove
}
// TODO: compile and run the code
exercise20();

// use intersection types to improve code readability
function exercise21() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

  type TWidget = {
    name: string;
  };

  type TWidgetWithSize = TWidget & {
    width: number;
    height: number;
    color: string;
  };

  type TDesktopWidget = TWidgetWithSize & {
    os: string;
  };

  type TMobileWidget = TWidgetWithSize & {
    space: number;
  };

  const widget: TWidget = {
    name: "widget",
  };
  const widgetWithSize: TWidgetWithSize = {
    name: "widget",
    width: 10,
    height: 20,
    color: "red",
  };
  const desktopWidget: TDesktopWidget = {
    name: "widget",
    width: 10,
    height: 20,
    color: "red",
    os: "windows",
  };
  const mobileWidget: TMobileWidget = {
    name: "widget",
    width: 10,
    height: 20,
    color: "red",
    space: 100,
  };
  console.log(widget.name);
  console.log(
    widgetWithSize.name +
      " " +
      widgetWithSize.width +
      " " +
      widgetWithSize.height +
      " " +
      widgetWithSize.color
  );
  console.log(
    desktopWidget.name +
      " " +
      desktopWidget.width +
      " " +
      desktopWidget.height +
      " " +
      desktopWidget.color +
      " " +
      desktopWidget.os
  );
  console.log(
    mobileWidget.name +
      " " +
      mobileWidget.width +
      " " +
      mobileWidget.height +
      " " +
      mobileWidget.color +
      " " +
      mobileWidget.space
  );
  // TODO: print the result to console
}
// TODO: compile and run the code
exercise21();

// rewrite the code using async await
function exercise22() {
  async function printMessagesWithTimeout() {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(2)
    await delay(1000);
    console.log(3);
    await delay(1000);
    console.log(4);
  }
  printMessagesWithTimeout();
}
// TODO: compile and run the code
exercise22();
