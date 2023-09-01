"use strict";
function exercise4() {
    let one = [1, 1];
    let two = [4, 5];
    function distance(p1, p2) {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    const res = distance(one, two);
}
exercise4();
function exercise5() {
    const one = { x: 1, y: 1 };
    const two = { x: 4, y: 5 };
    function distance(p1, p2) {
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
    const result = distance(one, two);
}
exercise5();
function excercise6() {
    const PI = 3.14;
    const circleArea = (radius) => {
        const area = PI * radius ** 2;
        return area;
    };
    console.log(circleArea(5), typeof PI);
    const person = {
        name: "Danylo",
        age: 20,
    };
    const incr = (man) => {
        return person.age++;
    };
    incr(person);
    console.log(person);
}
excercise6();
function excercise7() {
    function map(arr, fn) {
        const doubled = [];
        for (let i = 0; i < arr.length; i++) {
            doubled.push(fn(arr[i]));
        }
        return console.log(doubled);
    }
    const array = [1, 2, 3, 4, 5];
    const makeDouble = (numb) => {
        return numb * 2;
    };
    map(array, makeDouble);
}
excercise7();
function excercise8() {
    const printGreeting = (user) => {
        console.log(`Hello, ${user.name}`);
    };
    const product = {
        name: "apple",
        price: 25,
    };
    printGreeting(product);
    printGreeting({ name: "Danylo" });
    printGreeting({ name: "Danylo", age: 20 });
}
excercise8();
function excercise9() {
    class Book {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getInfo() {
            return `${this.title} ${this.year}`;
        }
    }
    const paper = new Book("Tom Sawyer", 1876);
    console.log(paper.getInfo());
    paper.year = 2000;
    console.log(paper.getInfo());
    paper.getAge = function () {
        const today = new Date().getFullYear();
        return today - paper.year;
    };
    console.log(paper.getAge());
    paper.revise = (newYear) => {
        if (newYear < paper.year) {
            return console.log("year can not be less than prev year");
        }
        const today = new Date().getFullYear();
        if (today < newYear) {
            return console.log("year can not be in the future");
        }
        return (paper.year = newYear);
    };
    paper.revise(2025);
    paper.revise(1999);
    paper.revise(2013);
    class Magazine extends Book {
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        getInfo() {
            const bookInfo = super.getInfo();
            return `${bookInfo} ${this.month} ${this.day}`;
        }
    }
    const mag = new Magazine("My Magazine", 2023, "March", 27);
    console.log(mag.getInfo());
}
excercise9();
