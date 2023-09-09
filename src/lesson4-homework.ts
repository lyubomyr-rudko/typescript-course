(function () {
  const loggerMain = (hm: string) => (ex: string) =>
    function (...args: any[]) {
      console.log(hm, ex, ...args);
    };
  const localLogger = loggerMain('lesson4 - homework');

  // add readonly modifier to prevent props reassignment

  function exercise17() {
    const logger = localLogger('excercise17');
    // TODO: define class Student with properties name, age, studentId
    // TODO: add constructor to initialize the properties
    // TODO: add method printStudent to print the student info to console
    // TODO: create an instance of the class Student
    // TODO: print the student info to console
    // TODO: try to change the studentId property
    // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
    class Student {
      name: string;
      age: number;
      readonly studentId: number;
      constructor(name: string, age: number, studentId: number) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
      }
      printStudent(): void {
        logger(`Student ${this.name}, age ${this.age}, id ${this.studentId}`);
      }
    }
    const studentJon = new Student('Jon', 18, 1234);
    studentJon.printStudent();

    //Cannot assign to 'studentId' because it is a read-only property.
    //studentJon.studentId = 345;
  }
  // TODO: compile and run the code
  exercise17();

  // use optional modifier to fix compile time error
  function exercise18() {
    const logger = localLogger('excercise18');
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
    logger('widgetWithSize', widgetWithSize);
    logger('desktopWidget', desktopWidget);
  }
  // TODO: compile and run the code
  exercise18();

  // use uniton types to replace unknown type for compile time type checking
  function exercise19() {
    const logger = localLogger('excercise19');
    type TComands = string | string[];
    function formatCommandLine(command: TComands): string {
      if (typeof command === 'string') {
        return command.trim();
      } else if (Array.isArray(command)) {
        return command.map((arg) => arg.trim()).join(' ');
      }
      throw new Error('command must be string or string[]');
    }

    logger(formatCommandLine('  git status  ')); // git status
    logger(formatCommandLine(['git ', ' status '])); // git status
    //Argument of type 'boolean' is not assignable to parameter of type 'TComands'.
    //logger(formatCommandLine(false)); // run time error - should be compile time error instead
  }
  // TODO: compile and run the code
  exercise19();

  // use literal types for type checking
  function exercise20() {
    const logger = localLogger('excercise20');
    // TODO: define rock, paper, scissors literal type and assign it to TMove type
    // TODO: add type check to the function below
    type TRock = 'rock';
    type TPaper = 'paper';
    type TScissors = 'scissors';
    type TMove = TRock | TPaper | TScissors;

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
    logger(rockPaperSizorsVins('rock', 'paper')); // false
    logger(rockPaperSizorsVins('paper', 'scissors')); // false
    logger(rockPaperSizorsVins('scissors', 'rock')); // false
    logger(rockPaperSizorsVins('rock', 'scissors')); // true
    // TODO: make sure that the following calls are not allowed
    //Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'.ts(2345)
    logger(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check
  }
  // TODO: compile and run the code
  exercise20();

  // use intersection types to improve code readability
  function exercise21() {
    const logger = localLogger('excercise21');
    // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

    type TWidget = {
      name: string;
    };

    type TWidgetWithSize = {
      width: number;
      height: number;
      color: string;
    };

    type TDesktopWidget = {
      os: string;
    };

    type TMobileWidget = {
      space: number;
    };

    const widget: TWidget = {
      name: 'widget',
    };
    const widgetWithSize: TWidget & TWidgetWithSize = {
      name: 'widget',
      width: 10,
      height: 20,
      color: 'red',
    };
    const desktopWidget: TWidget & TWidgetWithSize & TDesktopWidget = {
      name: 'widget',
      width: 10,
      height: 20,
      color: 'red',
      os: 'windows',
    };
    const mobileWidget: TWidget & TWidgetWithSize & TMobileWidget = {
      name: 'widget',
      width: 10,
      height: 20,
      color: 'red',
      space: 100,
    };
    logger(widget.name);
    logger(
      widgetWithSize.name +
        ' ' +
        widgetWithSize.width +
        ' ' +
        widgetWithSize.height +
        ' ' +
        widgetWithSize.color,
    );
    logger(
      desktopWidget.name +
        ' ' +
        desktopWidget.width +
        ' ' +
        desktopWidget.height +
        ' ' +
        desktopWidget.color +
        ' ' +
        desktopWidget.os,
    );
    logger(
      mobileWidget.name +
        ' ' +
        mobileWidget.width +
        ' ' +
        mobileWidget.height +
        ' ' +
        mobileWidget.color +
        ' ' +
        mobileWidget.space,
    );
    // TODO: print the result to console
  }
  // TODO: compile and run the code
  exercise21();

  // rewrite the code using async await
  function exercise22() {
    const logger = localLogger('excercise22');

    function printMessage(timeout: number, message: string): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          logger(`Timout ${timeout}, message ${message}`);
          resolve();
        }, timeout);
      });
    }
    async function printMessageWithTimoutAsync() {
      await printMessage(1000, '1');
      await printMessage(1000, '2');
      await printMessage(1000, '3');
    }
    printMessageWithTimoutAsync();
  }
  // TODO: compile and run the code
  exercise22();
})();
