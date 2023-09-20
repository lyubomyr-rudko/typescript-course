// add readonly modifier to prevent props reassignment
function exercise17() {
    // TODO: define class Student with properties name, age, studentId
    // TODO: add constructor to initialize the properties
    // TODO: add method printStudent to print the student info to console
    class Student {
        constructor(
            public name: string,
            public age: number,
            public studentId: string
        ) {}

        printStudent() {
            console.log(
                `Name: ${this.name}; Age: ${this.age}; StudentId: ${this.studentId}`
            );
        }
    }

    // TODO: create an instance of the class Student
    // TODO: print the student info to console
    const student = new Student('Serhii', 32, 'ajkSFHjkhkjFAho@#$');
    student.printStudent();

    // TODO: try to change the studentId property
    student.studentId = 'jklashfjkHGFKAJH@';

    // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
    class Student2 {
        constructor(
            public name: string,
            public age: number,
            public readonly studentId: string
        ) {}
    }

    const student2 = new Student2('Serhii', 32, 'ajkSFHjkhkjFAho@#$');

    // ! student2.studentId = 'jklashfjkHGFKAJH@'; // Cannot assign to 'studentId' because it is a read-only property.
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
    };

    const desktopWidget: TWidget = {
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
    function formatCommandLine(command: string | string[]) {
        if (typeof command === 'string') {
            return command.trim();
        } else if (Array.isArray(command)) {
            return command.map((arg) => arg.trim()).join(' ');
        }
        throw new Error('command must be string or string[]');
    }

    console.log(formatCommandLine('  git status  ')); // git status
    console.log(formatCommandLine(['git ', ' status '])); // git status
    // ! console.log(formatCommandLine(false)); // run time error - should be compile time error instead
}
// TODO: compile and run the code
exercise19();

// use literal types for type checking
function exercise20() {
    // TODO: define rock, paper, scissors literal type and assign it to TMove type
    type TMove = 'rock' | 'paper' | 'scissors';
    // TODO: add type check to the function below
    function rockPaperSizorsVins(me: TMove, other: TMove) {
        if (me === 'rock' && other === 'paper') {
            return false;
        }
        if (me === 'paper' && other === 'scissors') {
            return false;
        }
        if (me === 'scissors' && other === 'rock') {
            return false;
        }
        return true;
    }
    console.log(rockPaperSizorsVins('rock', 'paper')); // false
    console.log(rockPaperSizorsVins('paper', 'scissors')); // false
    console.log(rockPaperSizorsVins('scissors', 'rock')); // false
    console.log(rockPaperSizorsVins('rock', 'scissors')); // true
    // TODO: make sure that the following calls are not allowed
    //! console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check
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
        name: 'widget',
    };
    const widgetWithSize: TWidgetWithSize = {
        name: 'widget',
        width: 10,
        height: 20,
        color: 'red',
    };
    const desktopWidget: TDesktopWidget = {
        name: 'widget',
        width: 10,
        height: 20,
        color: 'red',
        os: 'windows',
    };
    const mobileWidget: TMobileWidget = {
        name: 'widget',
        width: 10,
        height: 20,
        color: 'red',
        space: 100,
    };
    console.log(widget.name);
    console.log(
        widgetWithSize.name +
            ' ' +
            widgetWithSize.width +
            ' ' +
            widgetWithSize.height +
            ' ' +
            widgetWithSize.color
    );
    console.log(
        desktopWidget.name +
            ' ' +
            desktopWidget.width +
            ' ' +
            desktopWidget.height +
            ' ' +
            desktopWidget.color +
            ' ' +
            desktopWidget.os
    );
    console.log(
        mobileWidget.name +
            ' ' +
            mobileWidget.width +
            ' ' +
            mobileWidget.height +
            ' ' +
            mobileWidget.color +
            ' ' +
            mobileWidget.space
    );
    // TODO: print the result to console
}
// TODO: compile and run the code
exercise21();

// rewrite the code using async await
function exercise22() {
    // function printMessagesWithTimeout() {
    //   setTimeout(() => {
    //     console.log("1");

    //     setTimeout(() => {
    //       console.log("2");
    //     }, 1000);

    //     setTimeout(() => {
    //       console.log("3");

    //       setTimeout(() => {
    //         console.log("4");
    //       }, 1000);
    //     }, 1000);
    //   }, 1000);
    // }
    // printMessagesWithTimeout();

    const timeOut = (callback: () => void, ms: number): Promise<void> =>
        new Promise((resolve) =>
            setTimeout((): void => {
                callback();
                resolve();
            }, ms)
        );

    const printNum =
        (num: number): (() => void) =>
        () =>
            console.log(`${num}`);

    (async () => {
        await timeOut(printNum(1), 1000);
        await timeOut(printNum(2), 1000);
        await timeOut(printNum(3), 1000);
        await timeOut(printNum(4), 1000);
    })();
}
// TODO: compile and run the code
exercise22();
