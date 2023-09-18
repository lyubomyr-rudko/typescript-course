"use strict";
// Compiler options
function lesson3() {
    class Book {
        #title;
        #year;
        constructor(title, year) {
            this.#title = title;
            this.#year = year;
        }
        getInfo() {
            return `${this.#title} - ${this.#year}`;
        }
        getAge() {
            return new Date().getFullYear() - this.#year;
        }
    }
    // Generics classes and functions
    class QueueOfStrings {
        data = [];
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class QueueOfNumbers {
        data = [];
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class QueueOfUsers {
        data = [];
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class Queue {
        data = [];
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    const q = new Queue();
    q.push({ name: "Igor", age: 34 });
    let x = q.pop();
    function cloneShallow(arg) {
        if (typeof arg === "object") {
            return { ...arg };
        }
        return arg;
    }
    const obj = {
        name: "Igor",
        age: 34,
    };
    const res = cloneShallow(obj);
    function getFirstElement(arr) {
        return arr[0];
    }
    const arr = [1, 2, 3];
    const res2 = getFirstElement(arr);
    function findLargest(arr) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        let largest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }
    const o1 = { name: "bob", valueOf: () => 10 };
    const o2 = { name: "Joe", valueOf: () => 20 };
    const res3 = findLargest([o1, o2]);
    function largest(a, b) {
        return a > b ? a : b;
    }
    function largestString(a, b) {
        return a > b ? a : b;
    }
    // Special Types: any and unknown
    function foo(arg) {
        if (typeof arg === "number") {
            console.log(arg.toFixed(2));
        }
    }
    // Type Assertions, Type Casting
    function fetchUser() {
        const response = '{"name": "John", "age": 18}';
        return JSON.parse(response);
    }
    const user1 = fetchUser();
    const user2 = fetchUser(); // as { name: string; age: number }
    if (typeof user2 === "object" &&
        user2 !== null &&
        "name" in user2 &&
        "age" in user2) {
        console.log(user2.name);
        console.log(user2.age);
    }
    function getSomething() {
        return 1;
    }
    const x1 = getSomething();
    if (typeof x1 === "number") {
        console.log(x1.toFixed(2));
    }
    // if (typeof x1 !== "number") {
    //   throw new Error("Something went wrong");
    // }
    // console.log(x1.toFixed(2));
    let x2 = x1;
    if (typeof x1 === "string" || typeof x1 === "boolean") {
        let x3 = +x1;
    }
    console.log(process.env.NODE_ENV);
    // const x2 = <number>getSomething();
    // Type Declarations, d.ts files
    // Npm package publishing
    // async/await
}
