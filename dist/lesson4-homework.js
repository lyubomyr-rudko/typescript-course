"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add readonly modifier to prevent props reassignment
function exercise17() {
    class Student {
        // TODO: define class Student with properties name, age, studentId
        name;
        age;
        studentId;
        // TODO: add constructor to initialize the properties
        constructor(name, age, studentId) {
            this.name = name;
            this.age = age;
            this.studentId = studentId;
        }
        // TODO: add method printStudent to print the student info to console
        printStudent() {
            return `name: ${this.name}, age: ${this.age}, id: ${this.studentId}`;
        }
    }
    // TODO: create an instance of the class Student
    const myStudent = new Student('John', 23, 'id4545');
    // TODO: print the student info to console
    console.log(myStudent.printStudent());
    // TODO: try to change the studentId property
    myStudent.studentId = 'id6767';
    // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
}
// TODO: compile and run the code
exercise17();
// use optional modifier to fix compile time error
function exercise18() {
    // TODO: uncomment the code below and update the type definition to fix compile time error
    const widgetWithSize = {
        name: 'widget',
        width: 10,
        height: 20,
        color: 'red',
        space: 100,
    };
    const desktopWidget = {
        name: 'widget',
        width: 10,
        height: 20,
        os: 'windows',
        space: 100,
    };
    // TODO: print the result to console
    console.log(widgetWithSize);
    console.log(desktopWidget);
}
// TODO: compile and run the code
exercise18();
// use uniton types to replace unknown type for compile time type checking
function exercise19() {
    function formatCommandLine(command) {
        if (typeof command === "string") {
            return command.trim();
        }
        else if (Array.isArray(command)) {
            return command.map((arg) => arg.trim()).join(" ");
        }
        throw new Error("command must be string or string[]");
    }
    console.log(formatCommandLine("  git status  ")); // git status
    console.log(formatCommandLine(["git ", " status "])); // git status
    console.log(formatCommandLine(false)); // run time error - should be compile time error instead
}
// TODO: compile and run the code
exercise19();
// use literal types for type checking
function exercise20() {
    // TODO: add type check to the function below
    function rockPaperSizorsVins(me, other) {
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
    console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check
}
// TODO: compile and run the code
exercise20();
// use intersection types to improve code readability
function exercise21() {
    // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types
    const widget = {
        name: "widget",
    };
    const widgetWithSize = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
    };
    const desktopWidget = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
        os: "windows",
    };
    const mobileWidget = {
        name: "widget",
        width: 10,
        height: 20,
        color: "red",
        space: 100,
    };
    console.log(widget.name);
    console.log(widgetWithSize.name +
        " " +
        widgetWithSize.width +
        " " +
        widgetWithSize.height +
        " " +
        widgetWithSize.color);
    console.log(desktopWidget.name +
        " " +
        desktopWidget.width +
        " " +
        desktopWidget.height +
        " " +
        desktopWidget.color +
        " " +
        desktopWidget.os);
    console.log(mobileWidget.name +
        " " +
        mobileWidget.width +
        " " +
        mobileWidget.height +
        " " +
        mobileWidget.color +
        " " +
        mobileWidget.space);
    // TODO: print the result to console
}
// TODO: compile and run the code
exercise21();
// rewrite the code using async await
function exercise22() {
    function printMessagesWithTimeout() {
        setTimeout(() => {
            console.log("1");
            setTimeout(() => {
                console.log("2");
            }, 1000);
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                }, 1000);
            }, 1000);
        }, 1000);
    }
    printMessagesWithTimeout();
    async function printMessagesWithAsync() {
        await later(1000);
        console.log("1");
        await later(1000);
        console.log("2");
        await later(1000);
        console.log("3");
        await later(1000);
        console.log('4');
    }
    const later = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    printMessagesWithAsync();
}
// TODO: compile and run the code
exercise22();
