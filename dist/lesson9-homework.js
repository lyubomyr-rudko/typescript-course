"use strict";
// Use mappping types
function exercise47() {
    const point = {
        x: 1,
        y: 2,
        z: 3,
    };
}
exercise47();
// Use mappping types modifiers
function exercise48() {
    const p1 = { x: 10 };
    const p2 = { x: 10, y: null };
}
exercise48();
// Template Literal Type
function exercise49() {
    // TODO: create a function that takes a size and a color and returns a Tshirt size and color
    // TOOD: make sure you annotate the params and return type of the function
    function createTshirt(size, color) {
        return `${size}-${color}`;
    }
    const tshirt = createTshirt("S", "red");
    console.log(tshirt);
}
exercise49();
// Fix autocoplete problem for literal union types
function exercise50() {
    function createCar(brand) {
        return `${brand} car`;
    }
    // TODO: check if autocomplete works before and after the fix
    const car = createCar("BMW");
    console.log(car);
}
exercise50();
// Use satisfies constraint
function exercise51() {
    const shapes = {
        circle: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        square: [
            [1, 2, 3],
            [4, 5, 6],
        ],
    };
    // TODO: create a function that takes a list points and prints them into console
    function drawShape(points) {
        console.log(points);
    }
    drawShape(shapes.circle123); // TOOD: uncomment and fix this to have compile check error, using satisfies constraint
}
exercise51();
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra2() {
    /**
     * Write a program that prints the integers from 1 to 100 (inclusive).
     * But:
     *  - for multiples of three, print Fizz (instead of the number)
     *  - for multiples of five, print Buzz (instead of the number)
     *  - for multiples of both three and five, print FizzBuzz (instead of the number)
     */
    function fizzBuzz() {
        // TODO: add your code here
    }
    fizzBuzz();
    /**
     * 1
     * 2
     * Fizz
     * 4
     * Buzz
     * ...
     */
    // TODO: convert fizzBuzz function to return a string output instead of printing to console
    function fizzBuzzToString() {
        // TODO: add your code here
    }
    fizzBuzzToString();
    // TODO: write a test to validate fizzBuzz output using console.assert
    // console.assert( ... );
}
exerciseExtra2();
