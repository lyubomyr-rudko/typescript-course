"use strict";
// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
    // TODO: declare two variables of type tuple, each with two numbers
    // TODO: assign values to the variables (1,1) and (4,5)
    const tuple1 = [1, 1];
    const tuple2 = [4, 5];
    // TODO: create a function which calculates the distance between two points in 2D space
    function distance(p1, p2) {
        const x1 = p1[0]; // Replace with the first element of p1
        const y1 = p1[1]; // Replace with the second element of p1
        const x2 = p2[0]; // Replace with the first element of p2
        const y2 = p2[1]; // Replace with the second element of p2
        // TODO: calculate the distance
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }
    // TODO: call the function and print the result to console
    const result = distance(tuple1, tuple2);
    console.log(`The distance between (${tuple1[0]}, ${tuple1[1]}) and (${tuple2[0]}, ${tuple2[1]}) is ${result}`);
}
// TODO: compile and run the code
excercise4();
// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
    // TODO: declare two variables of type TPoint
    // TODO: assign values to the variables (1,1) and (4,5)
    let point1 = { x: 1, y: 1 };
    let point2 = { x: 4, y: 5 };
    // TODO: create a function which calculates the distance between two points in 2D space
    function distance(p1, p2) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        // TODO: use distructuring to get x and y from p1 and p2
        // TODO: calculate the distance
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }
    // TODO: call the function and print the result to console
    const result = distance(point1, point2);
    console.log(`The distance between (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}) is ${result}`);
}
// TODO: compile and run the code
excercise5();
// Create functions that use const declarations
function excercise6() {
    // TODO: declare a const PI and assign value 3.14
    const PI = 3.14;
    // TODO: declare a function which calculates a circle area, takes radius as a parameter
    function calculateCircleArea(radius) {
        const area = PI * radius * radius;
        return area;
    }
    // TODO: call the function and print the result to console
    const radius = 5;
    const circleArea = calculateCircleArea(radius);
    console.log(`The area of a circle with radius ${radius} is ${circleArea}`);
    // TODO: check the type of PI variable
    console.log(`The type of PI is: ${typeof PI}`);
    // TODO: declare a const variable that is an object with two properties - name and age
    const person = {
        name: "John",
        age: 30
    };
    // TODO: declare a function which takes a person object as a parameter and increments age by 1
    function incrementAge(p) {
        p.age++;
    }
    // TODO: call the function and print the person object to console
    incrementAge(person);
    console.log(`After incrementing age, ${person.name} is now ${person.age} years old.`);
}
excercise6();
// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
    function map(arr, fn) {
        // TODO: add logic here
        // TODO: use regular for loop
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i]));
        }
        return result;
    }
    // TODO: create an array of numbers
    const arr = [1, 2, 3];
    // TODO: create a function which doubles a number
    const doubleFn = (num) => num * 2;
    // TODO: call map function (created earlier) with the array and the function
    const doubledArray = map(arr, doubleFn);
    // TODO: print the result to console
    console.log(doubledArray);
}
// TODO: compile and run the code
excercise7();
// declare a function which takes a user and prints greeting to console
function excercise8() {
    // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
    function printGreeting(user) {
        console.log(`Hello, ${user.name}`);
    }
    const userJohn = { name: 'John' };
    printGreeting(userJohn);
    // TODO: create a product object, asign it some object literal
    const product = { name: "Orange", price: 50 };
    // TODO: call the function with product as a parameter
    printGreeting(product);
    // TODO: call the function with object literal as a parameter
    // printGreeting({ name: "Apple", price: 29.99 });
    // TODO: try adding extra property to the object literal - observe the error
    // TODO: fix the error with type assertion
    printGreeting({ name: "Apple" });
}
// TODO: compile and run the code
excercise8();
// declare a `Book` class with a constructor and a method
function excercise9() {
    // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
    class Book {
        title;
        year;
        // TODO: constructor should take 2 parameters - title and year of publication
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        // TODO: method `getInfo` should return the book title and year as a string
        getInfo() {
            return `Title: ${this.title}, Year of Publication: ${this.year}`;
        }
        // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
        getAge(currentYear) {
            return currentYear - this.year;
        }
        // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
        revise(newYear) {
            if (newYear > this.year && newYear <= new Date().getFullYear()) {
                this.year = newYear;
                return true;
            }
            return false;
        }
    }
    // TODO: create a book object and call the method `getInfo`, print the result to console
    const myBook = new Book("See you are interested in the dark", 2020);
    console.log(myBook.getInfo());
    // TODO: assign a new value to the year property
    myBook.year = 2021;
    // TODO: call the method `getInfo` again
    console.log(myBook.getInfo());
    // TODO: call the method `getAge` and print the result to console
    console.log(myBook.getAge(myBook.year));
    // TODO: call the method `revise` and pass a new year as a parameter
    myBook.revise(2022);
    // TODO: add private modifier to the year property
    // TODO: try to access the year property from outside of the class - observe the error
    // TODO: change protected modifier to the year property, remove private modifier
    // TODO: create a subclass `Magazine` which extends `Book` class
    class Magazine extends Book {
        // TODO: add a new properties `month` and `day` to the `Magazine` class
        month;
        day;
        // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
        constructor(title, year, month, day) {
            // TODO: use super keyword to call the `Book` class constructor with title and year parameters
            super(title, year);
            this.month = month;
            this.day = day;
        }
        // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
        getInfo() {
            // TODO: use super keyword to call the `getInfo` method of the `Book` class
            const bookInfo = super.getInfo();
            return `${bookInfo}, Month: ${this.month}, Day: ${this.day}`;
        }
    }
    // TODO: create a magazine object and call the method `getInfo`, print the result to console
    const myMagazine = new Magazine("Vogue", 2022, 8, 31);
    console.log(myMagazine.getInfo());
    // TODO: call the inherited method `getAge` of the magazine object and print the result to console
    console.log(`Age of the magazine: ${myMagazine.getAge(myMagazine.year)}`);
}
// TODO: compile and run the code
excercise9();
