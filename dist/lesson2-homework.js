"use strict";
function excercise4() {
    const p1 = [1, 1];
    const p2 = [4, 5];
    function distance(p1, p2) {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    }
    console.log(distance(p1, p2));
}
excercise4();
function excercise5() {
    const p1 = { x: 1, y: 1 };
    const p2 = { x: 4, y: 5 };
    function distance(p1, p2) {
        const x1 = p1.x;
        const y1 = p1.y;
        const x2 = p2.x;
        const y2 = p2.y;
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return result;
    }
    console.log(distance(p1, p2));
}
excercise5();
function excercise6() {
    const PI = 3.14;
    function circleArea(radius) {
        return PI * radius ** 2;
    }
    console.log('circleArea', circleArea(2));
    const person = { name: 'Serhii', age: 32 };
    function incAge(person) {
        person.age++;
    }
    incAge(person);
    console.log('person', person);
}
excercise6();
function excercise7() {
    const map = (arr, fn) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i]));
        }
        return newArr;
    };
    const numbers = [1, 2, 3, 4];
    const dublesNumber = (num) => num * 2;
    const result = map(numbers, dublesNumber);
    console.log(result);
}
excercise7();
function excercise8() {
    const printGreeting = (user) => {
        console.log(user);
    };
    const product = { name: 'some product', price: 333 };
    printGreeting(product);
    printGreeting({ name: 'aaaaa' });
    printGreeting({ name: 'aaaaa', age: 222 });
}
excercise8();
function excercise9() {
    class Book {
        constructor(title, year) {
            this.title = title;
            this.year = year;
        }
        getInfo() {
            return `${this.title} - ${this.year}`;
        }
        getAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
        revise(newYear) {
            const currentYear = new Date().getFullYear();
            if (currentYear > newYear && this.year < newYear) {
                this.year = newYear;
            }
            else {
                console.log('wrong new Year');
            }
        }
    }
    const book = new Book('potter', 1993);
    console.log(book.getInfo());
    // book.year = 2005;  // Error becouse add protected modifier
    console.log(book.getInfo());
    console.log(book.getAge());
    book.revise(2025);
    class Magazine extends Book {
        constructor(title, year, month, day) {
            super(title, year);
            this.month = month;
            this.day = day;
        }
        getInfo() {
            const getInfoBook = super.getInfo();
            return `${getInfoBook} month: ${this.month} day: ${this.day}`;
        }
    }
    const magazine = new Magazine('Serhii', 2000, 12, 18);
    console.log(magazine.getInfo());
    console.log(magazine.getAge());
}
excercise9();
