"use strict";
// Home work ------------------------------------------------------------------
// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
const exercise1 = () => {
    let greeting;
    greeting = 'Hello World';
    console.log(greeting);
};
exercise1();
// TODO: run typescript in watch mode
// TODO: compare with javascript generated by typescript
//Done -------------------------------------------------------------------------
// 2. loop which prints string to console n times
const exercise2 = () => {
    // declare two varaibles - one of string, one of type number
    // assign string var value 'Hello'
    // assign number var value 3
    // create a while loop which prints string variable to console 3 times
    // try to assign number variable to string variable - observe the error
    const greet = "Hello";
    let n = 3;
    while (n) {
        n -= 1;
        console.log(greet);
    }
};
exercise2();
//Done -------------------------------------------------------------------------
// 3. code that generates array of numbers - from n to m
const exercise3 = () => {
    // TODO: declare varaibles n and m of type number
    // TODO: declare varaible result of type array of numbers
    // TODO: assign n and m some values - n = 1, m = 10
    // TODO: create a for loop which adds numbers from n to m to result array
    // TODO: support case where m > n (reverse the order)
    const n = 1;
    const m = 10;
    // const n: number = 10
    // const m: number = 1
    const result = [];
    if (m > n) {
        for (let i = n; i <= m; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = n; i >= m; i--) {
            result.push(i);
        }
    }
    console.log(result);
};
exercise3();
// TODO: compile and run the code
//Done -------------------------------------------------------------------------
