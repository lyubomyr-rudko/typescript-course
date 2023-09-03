"use strict";
// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
    const tuple1 = [1, 1];
    const tuple2 = [4, 5];
    function distance(p1, p2) {
        const x1 = p1[0]; // Replace with the first element of p1
        const y1 = p1[1]; // Replace with the second element of p1
        const x2 = p2[0]; // Replace with the first element of p2
        const y2 = p2[1]; // Replace with the second element of p2
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }
    const result = distance(tuple1, tuple2);
    console.log(`The distance between (${tuple1[0]}, ${tuple1[1]}) and (${tuple2[0]}, ${tuple2[1]}) is ${result}`);
}
excercise4();
function excercise5() {
    let point1 = { x: 1, y: 1 };
    let point2 = { x: 4, y: 5 };
    function distance(p1, p2) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }
    const result = distance(point1, point2);
    console.log(`The distance between (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}) is ${result}`);
}
excercise5();
// Create functions that use const declarations
function excercise6() {
    const PI = 3.14;
    function calculateCircleArea(radius) {
        const area = PI * radius * radius;
        return area;
    }
    const radius = 5;
    const circleArea = calculateCircleArea(radius);
    console.log(`The area of a circle with radius ${radius} is ${circleArea}`);
    console.log(`The type of PI is: ${typeof PI}`);
    const person = {
        name: "John",
        age: 30
    };
    function incrementAge(p) {
        p.age++;
    }
    incrementAge(person);
    console.log(`After incrementing age, ${person.name} is now ${person.age} years old.`);
}
excercise6();
function excercise7() {
    function map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i]));
        }
        return result;
    }
    const arr = [1, 2, 3];
    function doubleFn(num) {
        const doubleNumber = num * 2;
        return doubleNumber;
    }
    const doubledArray = map(arr, doubleFn);
    console.log(doubledArray);
}
excercise7();
function excercise8() {
    function printGreeting(user) {
        console.log(`Hello, ${user.name}`);
    }
    const userJohn = { name: 'John' };
    printGreeting(userJohn);
    const product = { name: "Orange", price: 50 };
    printGreeting(product);
    // printGreeting({ name: "Apple", price: 29.99 });
    printGreeting({ name: "Apple" });
}
excercise8();
// declare a `Book` class with a constructor and a method
function excercise9() {
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
}
// TODO: compile and run the code
excercise9();
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
    // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
    // TODO: change compiler target to ESNext, complile and see the compiled code
    // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
}
// TODO: compile and run the code
excercise10();
