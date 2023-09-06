require('dotenv').config();

// try different target compiler options
function excercise10() {
    // TODO: declare a Rectangle class, with width and height properties
    // TODO: add a constructor which takes width and height as parameters
    // TODO: add a method `getArea` which returns the area of the rectangle
    // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    // TODO: create an instance of the Rectangle class, with width 10 and height 20
    // TODO: call the method `getArea` and print the result to console
    // TODO: call the method `getPerimeter` and print the result to console
    // TODO: compile and run the code
    // TODO: change compiler target to ES5, complile and see the compiled code
    // TODO: change width and height properties to private, recomplile and
    // TODO: change compiler target to ES2015, complile and see the compiled code

    class Rectangle {
        constructor(private width: number, private height: number) {}

        getArea(): number {
            return this.width * this.height;
        }

        getPerimeter(): number {
            return this.width + this.height;
        }
    }

    const rectangle = new Rectangle(10, 20);
    console.log(rectangle.getArea());
    console.log(rectangle.getPerimeter());

    // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
    // TODO: change compiler target to ESNext, complile and see the compiled code
    // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
    class Rectangle2 {
        #width: number;
        #height: number;

        constructor(width: number, height: number) {
            this.#width = width;
            this.#height = height;
        }

        getArea(): number {
            return this.#width * this.#height;
        }

        getPerimeter(): number {
            return this.#width + this.#height;
        }
    }

    const rectangle2 = new Rectangle(10, 20);
    console.log(rectangle2.getArea());
    console.log(rectangle2.getPerimeter());
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
    // TODO: create a generic Stack class
    // TODO: add a private data property of type array of T
    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    // TODO: add a pop method which removes and returns the item from the top of the stack
    class Stack<T> {
        constructor(private data: T[] = []) {}

        push(item: T): void {
            this.data.push(item);
        }

        pop(): T | undefined {
            return this.data.pop();
        }
    }
    // TODO: create an instance of the Stack class with number type
    const instanceOfNumbers = new Stack<number>();

    // TODO: push two numbers to the stack
    instanceOfNumbers.push(1);
    instanceOfNumbers.push(2);

    // TODO: pop an item from the stack and print it to console, calling toFixed method on it
    const lastNumber = instanceOfNumbers.pop();
    console.log(lastNumber);

    // TODO: create an instance of the Stack class with string type
    const instanceOfStrings = new Stack<string>();

    // TODO: push two strings to the stack
    instanceOfStrings.push('string 1');
    instanceOfStrings.push('string 2');

    // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
    const lastStr = instanceOfStrings.pop();
    console.log(lastStr);
}
// TODO: compile and run the code
excercise11();

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
    function getRandomIndx(max: number): number {
        return Math.floor(Math.random() * max);
    }

    type TObj = { id: number; at: Date };

    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayOfStrings = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6'];
    const arrayOfObjects: TObj[] = [
        { id: 1, at: new Date() },
        { id: 2, at: new Date() },
        { id: 3, at: new Date() },
        { id: 4, at: new Date() },
    ];

    // TODO: create a function that takes an array of numbers and returns a random number from the array
    const getRandomNumber = (numbers: number[]): number => {
        const indx = getRandomIndx(numbers.length);
        return numbers[indx];
    };
    console.log(getRandomNumber(arrayOfNumbers));

    // TODO: create a function that takes an array of strings and returns a random string from the array
    const getRandomString = (strings: string[]): string => {
        const indx = getRandomIndx(strings.length);
        return strings[indx];
    };

    console.log(getRandomString(arrayOfStrings));

    // TODO: create a function that takes an array of objects and returns a random object from the array
    const getRandomObject = (objects: TObj[]): TObj => {
        const indx = getRandomIndx(objects.length);
        return objects[indx];
    };

    console.log(getRandomObject(arrayOfObjects));

    // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
    const getRandomItem = <T>(arr: T[]): T => {
        const indx = getRandomIndx(arr.length);
        return arr[indx];
    };

    console.log(getRandomItem(arrayOfNumbers));
    console.log(getRandomItem(arrayOfStrings));
    console.log(getRandomItem(arrayOfObjects));
}
// TODO: compile and run the code
excercise12();

// add type assertion to the code
function excercise13() {
    // NOTE: do not change this function
    function fetchUserAge(): unknown {
        const responseText = '{"name": "John", "age": 18}';
        return JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge() as number;
    // TODO: uncomment the following code and add type assertion to fix the error
    console.log(userAge + 1);
}
// TODO: compile and run the code
excercise13();

// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
    function fetchUserAge(): number {
        const responseText = '{"name": "John", "age": "16"}';
        const age = parseInt(JSON.parse(responseText).age);

        if (Number.isNaN(age)) {
            throw new Error('Age not a number');
        }

        return age;
    }
    const userAge = fetchUserAge();

    // TODO: run the code below and observe the result, explain why it is happening,
    // TODO: add type casting to the function above, to fix the error
    if (typeof userAge === 'number') {
        if (userAge === 16) {
            console.log('Time to get your driver license');
        } else if (userAge > 16) {
            console.log('You are old enough to drive');
        } else {
            console.log('You are not old enough to drive');
        }
    }
}
// TODO: compile and run the code
excercise14();

// add type safety to the code which uses any
function excercise15() {
    // TODO: declare a type for user object, which has a name property of type string
    type TUser = {
        name: string;
    };

    // TODO: fix the fetchUsers function to return an array of users, not any type
    function fetchUsers(): TUser[] {
        // TODO: add type safety to the data variable, annotate it with the type of users
        const data: { users: TUser[] } = JSON.parse(
            '{"users": [{"name": "John"}, {"name": "Jane"}]}'
        );

        // TODO: add check for the data type to contain a list of users
        if (Array.isArray(data.users)) {
            return data.users;
        } else {
            throw new Error('Data does not contain a list of users');
        }
    }

    // TODO: fix typings of the users variable (currently it is of type any)
    const users: TUser[] = fetchUsers();

    // TODO: add type safety to the code to print the names of the users to console
    users.forEach((user) => console.log(user.name));
}
// TODO: compile and run the code
excercise15();

// use type declarations to fix the comments in the code
function excercise16() {
    // TODO: add code which uses process.env.NODE_ENV variable,
    // TODO: try to compile and see the error
    // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
    // TODO: try to compile and see the error fixed
    // TODO: remove global.d.ts file, copile and see the error again
    // TODO: install type declarations from error message -  @types/node
    // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
    console.log(process.env.NODE_ENV);
}
// TODO: compile and run the code
excercise16();
