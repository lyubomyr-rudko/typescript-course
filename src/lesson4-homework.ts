// add readonly modifier to prevent props reassignment
function exercise17() {
  // TODO: define class Student with properties name, age, studentId ++
  class Student {
    readonly name: string;
    readonly age: number;
    readonly studentId: number;
    // TODO: add constructor to initialize the properties ++
    constructor(name: string, age: number, studentId: number) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }
    // TODO: add method printStudent to print the student info to console ++
    printStudent() {
      console.log(`Name: ${this.name}, Age: ${this.age}, StudentId: ${this.studentId}`);
    }
  }
  // TODO: create an instance of the class Student ++
  const student = new Student("Oleg", 26, 1);
  // TODO: print the student info to console ++
  student.printStudent();
  // TODO: try to change the studentId property ++
  // student.age = 28; ++
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed ++
  // student.age = 32; ++
}
// TODO: compile and run the code ++
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

  // TODO: uncomment the code below and update the type definition to fix compile time error ++

  const widgetWithSize: TWidget = {
    name: "widget",
    width: 10,
    height: 20,
    color: "red",
    space: 100,
  };

  const desktopWidget: TWidget = {
    name: "widget",
    width: 10,
    height: 20,
    os: "windows",
    space: 100,
  };

  // TODO: print the result to console ++
  console.log(`Widget with size:`, widgetWithSize);
  console.log(`Desktop widget:`, desktopWidget);
}
// TODO: compile and run the code
exercise18();
// use uniton types to replace unknown type for compile time type checking ++
function exercise19() {
  function formatCommandLine(command: string | string[]) {
    if (typeof command === "string") {
      return command.trim();
    } else if (Array.isArray(command)) {
      return command.map((arg) => arg.trim()).join(" ");
    }
    throw new Error("command must be string or string[]");
  }

  console.log(formatCommandLine("  git status  ")); // git status  ++
  console.log(formatCommandLine(["git ", " status "])); // git status ++
  // console.log(formatCommandLine(false)); // run time error - should be compile time error instead ++
}
// TODO: compile and run the code  ++
exercise19();

// use literal types for type checking
function exercise20() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type  ++
  type TMove = "rock" | "paper" | "scissors";
  // TODO: add type check to the function below  ++
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
  console.log(rockPaperSizorsVins("rock", "paper")); // false  ++
  console.log(rockPaperSizorsVins("paper", "scissors")); // false  ++
  console.log(rockPaperSizorsVins("scissors", "rock")); // false  ++
  console.log(rockPaperSizorsVins("rock", "scissors")); // true ++
  // TODO: make sure that the following calls are not allowed ++
  // console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check ++
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
  // TODO: print the result to console ++
}
// TODO: compile and run the code ++
exercise21();

// rewrite the code using async await ++
function exercise22() {
  const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

  async function printMessagesWithTimeout(): Promise<void> {
    await delay(1000);
    console.log("1");
    await delay(1000);
    console.log("2");
    await delay(1000);
    console.log("3");
    await delay(1000);
    console.log("4");
  }
  printMessagesWithTimeout();
}
// TODO: compile and run the code ++
exercise22();
