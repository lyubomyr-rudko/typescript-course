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

    // TODO: add function overloading here to ensure that function return type matches the input value type
    function assignWidgetCost(obj: TWidget): TWidget;
    function assignWidgetCost(obj: TGadget): TGadget;
    function assignWidgetCost(obj: TThing): TThing {
        obj.cost = 100;

        return obj;
    }

    // TODO: fix problem - typeof a: TThing, not TWidget
    const a = assignWidgetCost({ name: 'widget' });
    // TODO: fix same here - typeof b: TThing, not TGadget
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

    // TODO: add call signatures here. Add overrides for optional email param
    type TSaveUserCallback = (
        firstName: string,
        lastName: string,
        email?: string
    ) => void;
    // TODO: add call signatures here. Add overrides for optional email param
    interface ISaveUserCallback {
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

    // *** add constructor signatures here ***
    type TUserConstructor = new (
        firstName: string,
        lastName: string,
        email?: string
    ) => void;
    interface IUserConstructor {
        new (firstName: string, lastName: string, email?: string): void;
    }

    function createAndPrintUser(ctor: IUserConstructor) {
        // TOOD: uncomment the following lines
        const user = new ctor('John', 'Smith');
        console.log(user);
    }

    createForm(handleSaveUserSubmit);
    createForm2(handleSaveUserSubmit);
    createAndPrintUser(
        class User {
            constructor(public name: string) {}
        }
    );
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
            console.log('eating');
        }
    }
    // TODO: inherit from Animal and implement makeSound method
    class Dog extends Animal {
        constructor(public name: string) {
            super(name);
        }
        makeSound(): void {
            console.log('Woof, woof!');
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
    // TODO: create a type TDictionary
    type TDictionary = {
        [key: string]: number;
    };

    // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
    const dictionary: TDictionary = { a: 1, b: 2, c: 3, d: 4 };

    // TODO: uncomment the following lines, fix the errors
    dictionary['c'] = 3;
    dictionary['d'] = 3; // should cause an error error

    // TODO: implement a function that calculates number of characters
    // in a string using the dictionary type, and returns a most frequent character
    function getMostFrequentCharacter(str: string): string {
        const dictionary2: TDictionary = {};
        const formatingString = str.toLowerCase();
        formatingString.split('').forEach((letter: string) => {
            if (dictionary2[letter]) {
                dictionary2[letter] += 1;
            } else {
                dictionary2[letter] = 1;
            }
        });

        type TMyTuple = [string, number];
        const dictinaryEntries = Object.entries(dictionary2);
        const highestCount = Math.max(
            ...dictinaryEntries.map(([_, value]: TMyTuple): number => value)
        );
        const mostFrequentCharacter = dictinaryEntries.find(
            ([_, value]: TMyTuple) => value === highestCount
        );

        if (mostFrequentCharacter === undefined) {
            throw new Error('Something went wrong :(');
        }

        return `The most frequent character is "${mostFrequentCharacter[0]}" with the number of repetitions ${highestCount}`;
        // return `The most frequent character is "${dictionaryKeys[valueIndex]}" with the number of repetitions ${highestCount}`;
    }
    console.log(
        getMostFrequentCharacter('She sells seashells by the seashore.')
    );
}
exercise33();

// Use index signature and caching
function exercise34() {
    // TODO: Define a dictionary of student grades, add type definition using index signature
    // key is a student name, value is an array of grades (numbers)
    type TStudentGrades = { [key: string]: number[] };
    type TStudentAvarageGradesCache = { [key: string]: number };
    const studentGrades: TStudentGrades = {
        Serhii: [10, 5, 13, 54, 65, 6],
        Andrey: [6, 2, 43, 24, 45, 76],
        John: [1, 32, 53, 46, 25, 6],
        Bob: [13, 2, 13, 41, 25, 16],
    };
    const studentsCash: TStudentAvarageGradesCache = {};

    // TODO: Implement function to calculate the average grade for a student
    function calculateAverageGrade(studentName: string): number | string {
        const isStudentCashed = Boolean(studentsCash[studentName]);
        if (isStudentCashed) {
            console.log('From Cash:');

            return studentsCash[studentName];
        } else {
            const grades = studentGrades[studentName];
            if (grades === undefined) {
                return `Student not found`;
            }
            const averageGrade = +(
                grades.reduce(
                    (sum: number, grade: number): number => (sum += grade),
                    0
                ) / grades.length
            ).toFixed(2);
            studentsCash[studentName] = averageGrade;
            console.log('New student:');
            return averageGrade;
        }
    }

    // TODO: Iterate through the dictionary and display each student's average grade
    const logger = () => {
        for (const studentName in studentGrades) {
            console.log(
                `${studentName}: ${calculateAverageGrade(studentName)}`
            );
        }
    };
    logger();

    // TODO: add caching for the average grade calculation to the calculateAverageGrade function
    studentGrades['Jim'] = [6, 2, 43, 24, 45, 76];
    studentGrades['Ann'] = [6, 2, 43, 24, 45, 76];
    studentGrades['Nati'] = [6, 2, 43, 24, 45, 76];
    logger();
}
exercise34();
