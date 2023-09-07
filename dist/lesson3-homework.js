"use strict";
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
// try different target compiler options
function excercise10() {
    var _Rectangle_width, _Rectangle_height;
    // + TODO: declare a Rectangle class, with width and height properties
    // + TODO: add a constructor which takes width and height as parameters
    // + TODO: add a method `getArea` which returns the area of the rectangle
    // + TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
    // + TODO: create an instance of the Rectangle class, with width 10 and height 20
    // + TODO: call the method `getArea` and print the result to console
    // + TODO: call the method `getPerimeter` and print the result to console
    // + TODO: compile and run the code
    // + TODO: change compiler target to ES5, complile and see the compiled code
    // + TODO: change width and height properties to private, recomplile and
    // + TODO: change compiler target to ES2015, complile and see the compiled code
    // + TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
    // + TODO: change compiler target to ESNext, complile and see the compiled code
    // + TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
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
            return 2 * (__classPrivateFieldGet(this, _Rectangle_width, "f") + __classPrivateFieldGet(this, _Rectangle_height, "f"));
        }
    }
    _Rectangle_width = new WeakMap(), _Rectangle_height = new WeakMap();
    const rect = new Rectangle(10, 20);
    console.log(rect.getArea());
    console.log(rect.getPerimeter());
}
// + TODO: compile and run the code
excercise10();
// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
    // + TODO: create a generic Stack class
    // + TODO: add a private data property of type array of T
    // + TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
    // + TODO: add a pop method which removes and returns the item from the top of the stack
    // + TODO: create an instance of the Stack class with number type
    // + TODO: push two numbers to the stack
    // + TODO: pop an item from the stack and print it to console, calling toFixed method on it
    // + TODO: create an instance of the Stack class with string type
    // + TODO: push two strings to the stack
    // + TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
    // + TODO: compile and run the code
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
    const stackNumber = new Stack();
    stackNumber.push(1);
    stackNumber.push(4);
    console.log(stackNumber.pop()?.toFixed(2));
    const stackString = new Stack();
    stackString.push('one');
    stackString.push('two');
    console.log(stackString.pop()?.toUpperCase());
}
excercise11();
// add type safety to the code which uses any
function excercise12() {
    // + TODO: create a function that takes an array of numbers and returns a random number from the array
    // + TODO: create a function that takes an array of strings and returns a random string from the array
    // + TODO: create a function that takes an array of objects and returns a random object from the array
    // + TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function numberReturner(num) {
        return num[getRandomInt(num.length)];
    }
    function stringReturner(str) {
        return str[getRandomInt(str.length)];
    }
    function objectReturner(obj) {
        return obj[getRandomInt(obj.length)];
    }
    function returner(arg) {
        return arg[getRandomInt(arg.length)];
    }
}
// + TODO: compile and run the code
excercise12();
function excercise13() {
    // NOTE: do not change this function
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": 18}';
        return JSON.parse(responseText).age;
    }
    const userAge = fetchUserAge();
    // + TODO: uncomment the following code and add type assertion to fix the error
    console.log(userAge + 1);
}
// + TODO: compile and run the code
excercise13();
// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
    function fetchUserAge() {
        const responseText = '{"name": "John", "age": "16"}';
        return JSON.parse(responseText).age;
    }
    const userAge = +fetchUserAge();
    console.log(typeof userAge);
    // + TODO: run the code below and observe the result, explain why it is happening,
    // + TODO: add type casting to the function above, to fix the error
    if (userAge === 16) {
        console.log('Time to get your driver license');
    }
    else if (userAge > 16) {
        console.log('You are old enough to drive');
    }
    else {
        console.log('You are not old enough to drive');
    }
}
// + TODO: compile and run the code
excercise14();
// add type safety to the code which uses any
function excercise15() {
    // + TODO: fix the fetchUsers function to return an array of users, not any type
    function fetchUsers() {
        // + TODO: add type safety to the data variable, annotate it with the type of users
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        // + TODO: add check for the data type to contain list of users
        if (Array.isArray(data.users)) {
            return data.users;
        }
        throw Error('Wrong data');
    }
    // + TODO: fix typings of the users variable (currently it is of type any)
    const users = fetchUsers();
    // + TODO: add type safety to the code to print the names of the users to console
    Array.isArray(users)
        ? users.forEach((user) => console.log(user.name))
        : console.log('no no no');
}
// TODO: compile and run the code
excercise15();
// use type declarations to fix the comments in the code
function excercise16() {
    // + TODO: add code which uses process.env.NODE_ENV variable,
    // + TODO: try to compile and see the error
    // + TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
    // + TODO: try to compile and see the error fixed
    // + TODO: remove global.d.ts file, copile and see the error again
    // + TODO: install type declarations from error message -  @types/node
    // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
    const key = process.env.NODE_ENV;
}
// + TODO: compile and run the code
excercise16();
