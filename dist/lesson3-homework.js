"use strict";
// try different target compiler options
function excercise10() {
    // TODO: declare a Rectangle class, with width and height properties
    class Rectangle {
        #width;
        #height;
        // TODO: add a constructor which takes width and height as parameters
        constructor(height, width) {
            this.#height = height;
            this.#width = width;
        }
        // TODO: add a method `getArea` which returns the area of the rectangle
        getArea() {
            return this.#height * this.#width;
        }
        // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
        getPerimeter() {
            return 2 * (this.#width + this.#height);
        }
    }
    // TODO: create an instance of the Rectangle class, with width 10 and height 20
    const myRectangle = new Rectangle(10, 20);
    // TODO: call the method `getArea` and print the result to console
    const area = myRectangle.getArea();
    console.log(area);
    // TODO: call the method `getPerimeter` and print the result to console
    const perimeter = myRectangle.getPerimeter();
    console.log(perimeter);
    // TODO: compile and run the code
    // TODO: change compiler target to ES5, complile and see the compiled code
    // TODO: change width and height properties to private, recomplile and
    // TODO: change compiler target to ES2015, complile and see the compiled code
    // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
    // TODO: change compiler target to ESNext, complile and see the compiled code
    // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();
// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
    // TODO: create a generic Stack class
    // TODO: add a private data property of type array of T
    // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    // TODO: add a pop method which removes and returns the item from the top of the stack
    class Stack {
        data = [];
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    // TODO: create an instance of the Stack class with number type
    const myStack = new Stack();
    // TODO: push two numbers to the stack
    myStack.push(2);
    myStack.push(10);
    // TODO: pop an item from the stack and print it to console, calling toFixed method on it
    const myNumber = myStack.pop();
    console.log(myNumber?.toFixed(2));
    // TODO: create an instance of the Stack class with string type
    const myString = new Stack();
    // TODO: push two strings to the stack
    myString.push('toto');
    myString.push('tata');
    // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
    const result = myString.pop();
    console.log(result?.toUpperCase());
}
// TODO: compile and run the code
excercise11();
// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
    // TODO: create a function that takes an array of numbers and returns a random number from the array
    function findNumber(numbers) {
        if (numbers.length === 0) {
            throw new Error("There ere no items");
        }
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const result = numbers[randomIndex];
        return result;
    }
    // TODO: create a function that takes an array of strings and returns a random string from the array
    function findString(strings) {
        if (strings.length === 0) {
            throw new Error("There ere no items");
        }
        const randomIndex = Math.floor(Math.random() * strings.length);
        const result = strings[randomIndex];
        return result;
    }
    // TODO: create a function that takes an array of objects and returns a random object from the array
    function findObject(objects) {
        if (objects.length === 0) {
            throw new Error("Array is empty");
        }
        const randomIndex = Math.floor(Math.random() * objects.length);
        return objects[randomIndex];
    }
    function findRandomItem(items) {
        if (items.length === 0) {
            throw new Error("There ere no items");
        }
        const randomIndex = Math.floor(Math.random() * items.length);
        const result = items[randomIndex];
        return result;
    }
    const numbers = [1, 2, 3, 4, 5];
    const randomNumber = findRandomItem(numbers);
    console.log("Random Number:", randomNumber);
    const strings = ["cat", "banana", "car", "phone"];
    const randomString = findRandomItem(strings);
    console.log("Random String:", randomString);
    const objects = [
        { name: "Karina", age: 30 },
        { name: "Anna", age: 45 },
        { name: "Aleksandra", age: 35 },
    ];
    const randomObject = findRandomItem(objects);
    console.log("Random Object:", randomObject);
}
// TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
// TODO: compile and run the code
excercise12();
// add type assertion to the code
function excercise13() {
    // NOTE: do not change this function
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": 18}';
        return JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge();
    // TODO: uncomment the following code and add type assertion to fix the error
    console.log(userAge + 1);
}
// TODO: compile and run the code
excercise13();
// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": "16"}';
        return JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge();
    // TODO: run the code below and observe the result, explain why it is happening,
    // TODO: add type casting to the function above, to fix the error
    if (userAge.age === 16) {
        console.log("Time to get your driver license");
    }
    else if (userAge.age > 16) {
        console.log("You are old enough to drive");
    }
    else {
        console.log("You are not old enough to drive");
    }
}
// TODO: compile and run the code
excercise14();
// add type safety to the code which uses any
function excercise15() {
    // TODO: declare a type for user object, which has a name property of type string
    // TODO: fix the fetchUsers function to return an array of users, not any type
    function fetchUsers() {
        // TODO: add type safety to the data variable, annotate it with the type of users
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        // TODO: add check for the data type to contain list of users
        return data.users;
    }
    // TODO: fix typings of the users variable (currently it is of type any)
    const users = fetchUsers();
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
}
// TODO: compile and run the code
excercise16();
