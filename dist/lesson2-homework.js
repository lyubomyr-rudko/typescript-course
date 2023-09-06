"use strict";
function excercise4() {
    let x = [1, 1];
    let y = [4, 5];
    function calculateDistance(p1, p2) {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }
    console.log(calculateDistance(x, y));
}
excercise4();
function excercise5() {
    const coordinate1 = { x: 1, y: 1 };
    const coordinate2 = { x: 4, y: 5 };
    function calculateDistance(p1, p2) {
        const { x: x1 } = p1;
        const { y: y1 } = p1;
        const { x: x2 } = p2;
        const { y: y2 } = p2;
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }
    console.log(calculateDistance(coordinate1, coordinate2));
}
excercise5();
// Create functions that use const declarations
function excercise6() {
    const PI = 3.14;
    const calculateCircleArea = (radius) => {
        return PI * Math.pow(radius, 2);
    };
    console.log(typeof PI);
    console.log(calculateCircleArea(10));
    const person = {
        name: 'Serhii',
        age: 32,
    };
    const incrementAge = (obj) => {
        return ++obj.age;
    };
    console.log(incrementAge(person));
    console.log(person);
}
excercise6();
// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
    function map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i]));
        }
        return result;
    }
    const arrOfNumbers = [10, 13, 8, 3, 11];
    const doubleNumber = (num) => {
        return num * 2;
    };
    console.log(map(arrOfNumbers, doubleNumber));
}
excercise7();
// declare a function which takes a user and prits greeting to console
function excercise8() {
    const printGreeting = (user) => user.name;
    let product = {
        name: 'Bread',
        price: 11,
    };
    console.log(printGreeting(product));
    console.log(printGreeting({ name: 'Bread', price: 11 }));
    product.color = 'white';
    product = { name: 'Bread', price: 11, color: 'white' };
    console.log(product);
}
excercise8();
// declare a `Book` class with a constructor and a method
function excercise9() {
    const date = new Date().getFullYear();
    class Book {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getInfo() {
            return `${this.title} is published in ${this.year}`;
        }
        getAge() {
            return date - this.year;
        }
        revise(year) {
            if (year > date || year < this.year) {
                return 'Wrong year';
            }
            return (this.year = year);
        }
        setYear(year) {
            return (this.year = year);
        }
    }
    let myBook = new Book('Sherlock Holmes', 1900);
    console.log(myBook.getInfo());
    myBook.year = 1800;
    console.log(myBook.getInfo());
    console.log(myBook.getAge());
    console.log(myBook.revise(2022));
    class Magazine extends Book {
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        getInfo() {
            return `${super.getInfo()} ${this.month} ${this.day}`;
        }
    }
    const myMagazine = new Magazine('Playboy', 1950, 'June', 10);
    console.log(myMagazine.getAge());
}
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
