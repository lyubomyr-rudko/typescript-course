"use strict";
// 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
// TODO: declare two variables of type tuple, each with two numbers
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: create a function which calculates the distance between two points in 2D space
// TODO: replace with the first element of p1
// TODO: replace with the second element of p1
// TODO: replace with the first element of p2
// TODO: replace with the second element of p2
// TODO: calculate the distance
// TODO: call the function and print the result to console
// TODO: compile and run the code
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
const exercise4 = () => {
    const p1 = [1, 1];
    const p2 = [4, 5];
    const distance = (p1, p2) => {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    };
    console.log(`The distance between two points is ${distance(p1, p2)} m`);
};
exercise4();
//Done -----------------------------------------------------------------------------------------------------
// 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
// TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
// TODO: declare two variables of type TPoint
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: create a function which calculates the distance between two points in 2D space
// TODO: replace with the x-coordinate of p1
// TODO: replace with the y-coordinate  of p1
// TODO: replace with the x-coordinate  of p2
// TODO: replace with the y-coordinate  of p2
// TODO: calculate the distance
// TODO: rewrite code to use distructuring to get x and y from p1 and p2
// TODO: call the function and print the result to console
// TODO: compile and run the code
const exercise5 = () => {
    const p1 = { x: 1, y: 1 };
    const p2 = { x: 4, y: 5 };
    const distance = (p1, p2) => {
        // const x1 = p1.x
        // const y1 = p1.y
        // const x2 = p2.x
        // const y2 = p2.y
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    };
    console.log(`The distance between two points is ${distance(p1, p2)} m`);
};
exercise5();
//Done -----------------------------------------------------------------------------------------------------
// 6. Create functions that use const declarations
// TODO: declare a const PI and assign value 3.14
// TODO: declare a function which calculates a circle area, takes radius as a parameter
// TODO: call the function and print the result to console
// TODO: check the type of PI variable
//---------------------------------------
// TODO: declare a const variable that is an object with two properties - name and age
// TODO: declare a function which takes a person object as a parameter and increments age by 1
// TODO: call the function and print the person object to console
const exercise6 = () => {
    const PI = 3.14;
    const calcCircleArea = (radius) => PI * radius ** 2;
    const radius = 2;
    console.log(`The area of the circle with radius ${radius} m is ${calcCircleArea(radius)} m`);
    const person = { name: "Frank", age: 30 };
    const incrementAgeByOne = (person) => { person.age += 1; };
    incrementAgeByOne(person);
    console.log('The person object is', person);
};
exercise6();
//Done -----------------------------------------------------------------------------------------------------
// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
// TODO: add type annotations
// function map(arr, fn) {
// TODO: add logic here
// TODO: use regular for loop
// return [];
// }
// TODO: create an array of numbers
// TODO: create a function which doubles a number
// TODO: call map function (created earlier) with the array and the function
// TODO: print the result to console
// TODO: compile and run the code
const exercise7 = () => {
    const map = (arr, fn) => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i]));
        }
        return newArr;
    };
    const arrOfNums = [1, 1, 2, 3, 5, 8];
    const doubleNum = num => num * 2;
    console.log("The new array is", map(arrOfNums, doubleNum));
};
exercise7();
//Done -----------------------------------------------------------------------------------------------------
// declare a function which takes a user and prits greeting to console
// TODO: create a type for user, with name property
// TODO: create a function with name printGreeting, which takes a user and prits greeting to console
// TODO: create a type for product, with name property and price property
// TODO: create a product object, asign it some object literal
// TODO: call the function with product as a parameter
// TODO: call the function with object literal as a parameter
// TODO: try adding extra property to the object literal - observe the error
// TODO: fix the error with type assertion
// TODO: compile and run the code
const exercise8 = () => {
    const printGreeting = (user) => console.log(`Hello ${user.name}`);
    const product = {
        name: "Guitar",
        price: 1499.98,
    };
    printGreeting(product);
    printGreeting({ name: "Frank", age: 30 });
};
exercise8();
//Done -----------------------------------------------------------------------------------------------------
// declare a `Book` class with a constructor and a method
// TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
// TODO: constructor should take three parameters - title and year of publication
// TODO: method `getInfo` should return the book title and year as a string
// TODO: create a book object and call the method `getInfo`, print the result to console
// TODO: assign a new value to the year property
// TODO: call the method `getInfo` again
// TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
// TODO: call the method `getAge` and print the result to console
// TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
// TODO: call the method `revise` and pass a new year as a parameter
// TODO: add private modifier to the year property
// TODO: try to access the year property from outside of the class - observe the error
// TODO: change protected modifier to the year property, remove private modifier
// TODO: create a subclass `Magazine` which extends `Book` class
// TODO: add a new properties `month` and `day` to the `Magazine` class
// TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
// TODO: use super keyword to call the `Book` class constructor with title and year parameters
// TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
// TODO: use super keyword to call the `getInfo` method of the `Book` class
// TODO: create a magazine object and call the method `getInfo`, print the result to console
// TODO: call the inherited method `getAge` of the magazine object and print the result to console
// TODO: compile and run the code
const exercise9 = () => {
    class Book {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getInfo() {
            return `Title: ${this.title}, Publication Year: ${this.year}`;
        }
        setYear(newYear) {
            this.year = newYear;
        }
        getAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
        revise(newYear) {
            const currentYear = new Date().getFullYear();
            if (newYear > currentYear) {
                console.error("Error: The year cannot be in the future.");
            }
            else if (newYear < this.year) {
                console.error("Error: The new year cannot be less than the previous year.");
            }
            else {
                this.year = newYear;
                console.log(`Book revised. New Year: ${this.year}`);
            }
        }
    }
    class Magazine extends Book {
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        getInfo() {
            const bookInfo = super.getInfo(); // Call the getInfo method of the Book class
            return `${bookInfo}, Month: ${this.month}, Day: ${this.day}`;
        }
    }
    const book = new Book("Sample Book", 1981);
    console.log(book.getInfo());
    book.setYear(1986);
    console.log(book.getInfo());
    console.log(`Book Age: ${book.getAge()} years`);
    book.revise(2020);
    // book.year = 1986 /* Property 'year' is private and only accessible within class 'Book'. */
    const magazine = new Magazine("Tech Today", 2018, 4, 21);
    console.log(magazine.getInfo());
    console.log(`Magazine Age: ${magazine.getAge()} years`);
};
exercise9();
//Done -----------------------------------------------------------------------------------------------------
//================================== ✩ Extra tasks ✩ ======================================================
// try different target compiler options
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
// TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
// TODO: change compiler target to ESNext, complile and see the compiled code
// TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
// TODO: compile and run the code
const exercise10 = () => {
    var _Rectangle_width, _Rectangle_height;
    class Rectangle {
        constructor(width, height) {
            _Rectangle_width.set(this, void 0);
            _Rectangle_height.set(this, void 0);
            __classPrivateFieldSet(this, _Rectangle_width, width, "f");
            __classPrivateFieldSet(this, _Rectangle_height, height, "f");
        }
        getArea() {
            return __classPrivateFieldGet(this, _Rectangle_width, "f") * __classPrivateFieldGet(this, _Rectangle_height, "f");
        }
        getPerimeter() {
            return (__classPrivateFieldGet(this, _Rectangle_width, "f") + __classPrivateFieldGet(this, _Rectangle_height, "f")) * 2;
        }
    }
    _Rectangle_width = new WeakMap(), _Rectangle_height = new WeakMap();
    const newRectangle = new Rectangle(10, 20);
    console.log(`The area of the rectangle is ${newRectangle.getArea()}`);
    console.log(`The perimeter of the rectangle is ${newRectangle.getPerimeter()}`);
};
exercise10();
//Done -----------------------------------------------------------------------------------------------------
// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
// TODO: create a generic Stack class
// TODO: add a private data property of type array of T
// TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
// TODO: add a pop method which removes and returns the item from the top of the stack
// TODO: create an instance of the Stack class with number type
// TODO: push two numbers to the stack
// TODO: pop an item from the stack and print it to console, calling toFixed method on it
// TODO: create an instance of the Stack class with string type
// TODO: push two strings to the stack
// TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
// TODO: compile and run the code
const exercise11 = () => {
    class Stack {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.pop();
        }
    }
    const stackOfNums = new Stack();
    stackOfNums.push(3.564);
    stackOfNums.push(5.8765);
    const poppedNum = stackOfNums.pop();
    poppedNum !== undefined ? console.log(`The popped number is ${poppedNum.toFixed()}`) : console.log("Stack is empty");
    const stackOfStrs = new Stack();
    stackOfStrs.push("Hello there");
    stackOfStrs.push("How are you?");
    const poppedStr = stackOfStrs.pop();
    poppedStr !== undefined ? console.log(`The popped string is ${poppedStr.toUpperCase()}`) : console.log("Stack is empty");
};
exercise11();
//Done -----------------------------------------------------------------------------------------------------
// add type safety to the code which uses any
// TODO: declare a type for user object, which has a name property of type string
// TODO: fix the fetchUsers function to return an array of users, not any type
// function fetchUsers() {
// TODO: add type safety to the data variable
// const data: unknown = JSON.parse(
//   '{"users": [{"name": "John"}, {"name": "Jane"}]}'
// );
// TODO: add check for the data type to contain list of users
// return data;
// }
// TODO: fix typings of the users variable (currently it is of type any)
// const users = fetchUsers();
// TODO: add type safety to the code to print the names of the users to console
// users.forEach((user) => console.log(user.name));
// TODO: compile and run the code
const exercise12 = () => {
    const fetchUsers = () => {
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        if (!Array.isArray(data.users)) {
            throw new Error('Invalid data format: "users" should be an array.');
        }
        return data.users;
    };
    const users = fetchUsers();
    users.forEach((user) => console.log(user.name));
};
exercise12();
//Done -----------------------------------------------------------------------------------------------------
