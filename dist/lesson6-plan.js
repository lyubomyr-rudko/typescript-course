"use strict";
// ********* Lesson 6 *********
// User-Defined Type Guards
function userDefinedTypeGuards() {
    function isSquare(shape) {
        return shape.size !== undefined;
    }
    function area(shape) {
        if (isSquare(shape)) {
            return shape.size * shape.size;
        }
        return shape.width * shape.height;
    }
}
userDefinedTypeGuards();
// Function overloading
function functionOverloading() {
    // a. revert array/string example
    function reverse(stringOrStringArray) {
        if (typeof stringOrStringArray === "string") {
            return stringOrStringArray.split("").reverse().join("");
        }
        else {
            return stringOrStringArray.slice().reverse();
        }
    }
    const hello = reverse("hello"); // 'olleh'
    const abcd = reverse(["a", "b", "c", "d"]); // ['d', 'c', 'b', 'a']
    function reverseV2(stringOrStringArray) {
        if (typeof stringOrStringArray === "string") {
            return stringOrStringArray.split("").reverse().join("");
        }
        else {
            return stringOrStringArray.slice().reverse();
        }
    }
    const hello2 = reverseV2("hello"); // 'olleh'
    const abcd2 = reverseV2(["a", "b", "c", "d"]); // ['d', 'c', 'b', 'a']
    // b. makeDate example
    function makeDate(timestampOrYear, month, day) {
        if (month !== undefined && day !== undefined) {
            return new Date(timestampOrYear, month, day);
        }
        else {
            return new Date(timestampOrYear);
        }
    }
    const d1 = makeDate(12345678); // 1970-01-01T00:00:12.345Z
    const d2 = makeDate(2020, 11, 11);
    const d3 = makeDate(2020, 11); // Error: Expected 2 arguments, but got 3.
    function makeDate2(timestampOrYear, month, day) {
        if (month !== undefined && day !== undefined) {
            return new Date(timestampOrYear, month, day);
        }
        else {
            return new Date(timestampOrYear);
        }
    }
    // Typescript will cause an error if the function is called with the wrong number of arguments
    // const d4 = makeDate2(2020, 11);
    const d5 = makeDate(2020, 11, 11);
    const d6 = makeDate(12345678);
    // implementation signature for the author of the function - to be used in the function body
    // call signature for the caller of the function - to be used in the function call
}
functionOverloading();
