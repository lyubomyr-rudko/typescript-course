// add readonly modifier to prevent props reassignment
function exercise17() {
  // TODO: define class Student with properties name, age, studentId
  // TODO: add constructor to initialize the properties
  // TODO: add method printStudent to print the student info to console
  // TODO: create an instance of the class Student
  // TODO: print the student info to console
  // TODO: try to change the studentId property
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed

  console.log("\n---Exercise 17 start---\n")

  class Student{
    public name:string
    public age:number
    readonly studentId:number

    constructor(name:string, age:number){
      this.name = name
      this.age = age
      this.studentId = new Date().getTime()
    }

    public printStudent(){
      console.log(`Student info: \n name:${this.name}\n age:${this.age} \n studentId${this.studentId}`)
    }
  }

  const myStudent = new Student("Dodo", 17)
  myStudent.printStudent()
  console.log("\n---Exercise 17 end---\n")
}
// TODO: compile and run the code
exercise17();

// use optional modifier to fix compile time error
function exercise18() {
  console.log("\n---Exercise 18 start---\n")
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
  console.log("widgetWithSize: ", widgetWithSize)
  console.log("desktopWidget: ", desktopWidget)

  console.log("\n---Exercise 18 end---\n")
}
// TODO: compile and run the code
exercise18();

// use uniton types to replace unknown type for compile time type checking
function exercise19() {
  console.log("\n---Exercise 19 start---\n")
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
  // console.log(formatCommandLine(false)); // run time error - should be compile time error instead
  console.log("\n---Exercise 19 end---\n")
}
// TODO: compile and run the code
exercise19();

// use literal types for type checking
function exercise20() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  console.log("\n---Exercise 20 start---\n")
  type TGameDecisions = "rock" | "paper" | "scissors"
  // TODO: add type check to the function below
  function rockPaperSizorsVins(me: TGameDecisions, other: TGameDecisions) {
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
  console.log("\n---Exercise 20 end---\n")
  // TODO: make sure that the following calls are not allowed - 👌
  // console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check
}
// TODO: compile and run the code
exercise20();

// use intersection types to improve code readability
function exercise21() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types
  console.log("\n---Exercise 21 start---\n")
  type TWidget = {
    name: string;
  };

  type TWidgetWithSize = TWidget & {
    width: number;
    height: number;
    color: string;
  };

  type TDesktopWidget = TWidgetWithSize & {
    name: string;
    width: number;
    height: number;
    color: string;
    os: string;
  };

  type TMobileWidget = TWidgetWithSize & {
    name: string;
    width: number;
    height: number;
    color: string;
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
  console.log("\n---Exercise 21 end---\n")
  // TODO: print the result to console
}
// TODO: compile and run the code
exercise21();

// rewrite the code using async await
async function exercise22() {
  console.log("\n---Exercise 22 start---\n")
  const delay = async (milliseconds:number)=>{
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(true)
      }, milliseconds)
    })
  }

  async function printMessagesWithTimeout() {
    //second try
    await delay(1000)
      .then(()=>{
        console.log("1")
      })

    await delay(1000)
      .then(()=>{
        console.log("2")
        console.log("3")
      })

    await delay(1000)
      .then(()=>{
        console.log("4")
      })

    //first try
    //   await new Promise(async (resolve)=>{
    //     setTimeout(()=>{
    //       console.log("1")
    //       resolve(true)
    //     }, 1000)
    //   })
    //     .then(async()=>{
    //         await new Promise(async (resolve)=>{
    //           setTimeout(()=>{
    //             console.log("2")
    //           }, 1000)

    //           setTimeout(()=>{
    //             console.log("3")
    //             resolve(true)
    //           }, 1000)
    //         })
    //           .then(async ()=>{
    //             await new Promise(async (resolve)=>{
    //               setTimeout(()=>{
    //                 console.log("4")
    //                 resolve(true)
    //               }, 1000)
    //             })
    //           })
    //     })


    //original
    // setTimeout(() => {
    //   console.log("1");

    //   setTimeout(() => {
    //     console.log("2");
    //   }, 1000);

    //   setTimeout(() => {
    //     console.log("3");

    //     setTimeout(() => {
    //       console.log("4");
    //     }, 1000);
    //   }, 1000);
    // }, 1000);
    console.log("\n---Exercise 22 end---\n")
  }
  await printMessagesWithTimeout();
}
// TODO: compile and run the code
exercise22();
