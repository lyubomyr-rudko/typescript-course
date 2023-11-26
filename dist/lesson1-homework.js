"use strict";
// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
function excercise1() {
    let greeting;
    greeting = "Hello World";
    console.log(greeting);
}
excercise1();
function excercise2({ myNumber, myString }) {
    for (let i = 0; i < myNumber; i++) {
        console.log(myString);
    }
    // declare two varaibles - one of string, one of type number
    // assign string var value 'Hello'
    // assign number var value 3
    // create a while loop which prints string variable to console 3 times
    // try to assign number variable to string variable - observe the error
}
excercise2({ myNumber: 3, myString: 'Hello' });
function excercise3({ n, m }) {
    // TODO: declare varaibles n and m of type number
    // TODO: declare varaible result of type array of numbers
    // TODO: assign n and m some values - n = 1, m = 10
    // TODO: create a for loop which adds numbers from n to m to result array
    // TODO: support case where m > n (reverse the order)
    let result = [];
    if (n <= m) {
        for (let i = n; i <= m; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = n; i >= m; i--) {
            result.push(i);
        }
        console.log(result);
    }
}
excercise3({ n: 1, m: 10 });
// TODO: compile and run the code
