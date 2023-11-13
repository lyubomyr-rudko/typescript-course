"use strict";
// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
    const p1 = [1, 1];
    const p2 = [4, 5];
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    function distance(p1, p2) {
        const x1 = p1[0]; // TODO: replace with the first element of p1
        const y1 = p1[1]; // TODO: replace with the second element of p1
        const x2 = p2[0]; // TODO: replace with the first element of p2
        const y2 = p2[1]; // TODO: replace with the second element of p2
        // TODO: calculate the distance
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    // TODO: call the function and print the result to console
    console.log(distance(p1, p2));
}
// TODO: compile and run the code
excercise4();
// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
    // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
    // TODO: declare two variables of type TPoint
    const x = { x: 1, y: 1 };
    const y = { x: 4, y: 5 };
    function distance(p1, p2) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        // const x1 = 0; // TODO: replace with the first element of p1
        // const y1 = 0; // TODO: replace with the second element of p1
        // const x2 = 0; // TODO: replace with the first element of p2
        // const y2 = 0; // TODO: replace with the second element of p2
        // TODO: use distructuring to get x and y from p1 and p2
        // TODO: calculate the distance
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    // TODO: call the function and print the result to console
    console.log(distance(x, y));
}
// TODO: compile and run the code
excercise5();
// Create functions that use const declarations
function excercise6() {
    // TODO: declare a const PI and assign value 3.14
    const PI = 3.14;
    // TODO: declare a function which calculates a circle area, takes radius as a parameter
    function calcCircleArea(radius) {
        return PI * radius ** 2;
    }
    console.log(calcCircleArea(4));
    // TODO: call the function and print the result to console
    // TODO: check the type of PI variable
    // TODO: declare a const variable that is an object with two properties - name and age
    const obj = { name: "Oleg", age: 25 };
    // TODO: declare a function which takes a person object as a parameter and increments age by 1
    const increaseObjAge = (obj) => {
        return { ...obj, age: ++obj.age };
    };
    // TODO: call the function and print the person object to console
    console.log(increaseObjAge(obj));
}
excercise6();
// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
    // TODO: add type annotations
    function map(arr, fn) {
        const result = arr.map((number) => fn(number));
        return result;
    }
    // TODO: create an array of numbers
    const numberArr = [1, 2, 3, 4, 5, 6];
    // TODO: create a function which doubles a number
    const double = (x) => {
        return x ** 2;
    };
    // TODO: call map function (created earlier) with the array and the function
    console.log(map(numberArr, double));
    // TODO: print the result to console
}
// TODO: compile and run the code
excercise7();
// declare a function which takes a user and prits greeting to console
function excercise8() {
    // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
    function printGreeting(obj) {
        console.log(obj.name);
    }
    // TODO: create a product object, asign it some object literal
    const product = { name: "Orange", price: 25 };
    // TODO: call the function with product as a parameter
    printGreeting(product);
    // TODO: call the function with object literal as a parameter
    printGreeting({ name: "Orange", price: 25 });
    // TODO: try adding extra property to the object literal - observe the error
    // TODO: fix the error with type assertion
}
// TODO: compile and run the code
excercise8();
// declare a `Book` class with a constructor and a method
function excercise9() {
    // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
    class Book {
        title;
        year;
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getInfo() {
            return this.title + this.year;
        }
        getAge() {
            return new Date().getFullYear() - this.year;
        }
        revise(newYear) {
            if (newYear < new Date().getFullYear() && newYear > this.year)
                return (this.year = newYear);
        }
    }
    const newBook = new Book("Wolf", 1975);
    console.log(newBook.getInfo());
    // newBook.year = 1989;
    console.log(newBook.getInfo());
    console.log(newBook.getAge());
    console.log(newBook.revise(1995));
    console.log(newBook.getAge());
    class Magazine extends Book {
        month;
        day;
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        getInfo() {
            const bookInfo = super.getInfo();
            return `${bookInfo} month: ${this.month} day: ${this.day}`;
        }
    }
    const Maxim = new Magazine("Maxim", 2005, "April", 21);
    console.log(Maxim.getInfo());
    console.log(Maxim.getAge());
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
    // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
    // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
    // TODO: use super keyword to call the `Book` class constructor with title and year parameters
    // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
    // TODO: use super keyword to call the `getInfo` method of the `Book` class
    // TODO: create a magazine object and call the method `getInfo`, print the result to console
    // TODO: call the inherited method `getAge` of the magazine object and print the result to console
}
// TODO: compile and run the code
excercise9();
