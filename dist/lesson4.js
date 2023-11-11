"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lesson4() {
    // Readonly modifier
    function readonlyModifier() {
        const person = {
            name: "John",
            age: 18,
        };
        // const in JS is not immutable, it prohibits reassignment
        // person = { name: 'John', age: 19 }; // error
        // but you can change the properties of the object
        person.age = 19; // no error
        const person2 = {
            name: "John",
            age: 18,
        };
        // person2.age = 19; // error
        // readonly arrays and tuples
        const arr = [1, 2, 3];
        // arr.push(4); // error
        // arr[0] = 0; // error
        const tuple = [1, "2"];
        // tuple[0] = 0; // error
    }
    // Optional properties
    // Optional modifier
    function optionalModifier() {
        const person = {
            name: "John",
            age: 18,
            email: "",
            phone: undefined, // optional modifier allows to omit the property when creating the object
        };
        const person2 = {
            name: "John",
            age: 18,
            email: "",
            phone: "1231231231", // optional modifier allows to omit the property when creating the object
        };
        const person3 = {
            name: "John",
            age: 18,
            email: "",
        };
        // classes example
        class Point {
            x;
            y;
        }
        const point = new Point();
        point.x = 1;
        point.y = 2;
        // point.x = null; // null is not optional type member
    }
    optionalModifier();
    // Union types
    function unionTypes() {
        function formatCommandLine(command) {
            if (typeof command === "string") {
                return command.trim();
            }
            else if (Array.isArray(command)) {
                return command.map((arg) => arg.trim()).join(" ");
            }
            return "";
        }
        console.log(formatCommandLine("  git status  ")); // git status
        console.log(formatCommandLine(["git ", " status "])); // git status
        // can pass any value to the function, with no type check errors
        console.log(formatCommandLine(123)); // ''
        // to fix the problem, use union types
        function formatCommandLineV2(command) {
            if (typeof command === "string") {
                return command.trim();
            }
            // it must be an array if it is not a string
            return command.map((arg) => arg.trim()).join(" ");
        }
        console.log(formatCommandLineV2("  git status  ")); // git status
        console.log(formatCommandLineV2(["git ", " status "])); // git status
        // will break if you pass a number
        // console.log(formatCommandLineV2(123)); // error
        // console.log(formatCommandLineV2([123])); // error
        function repeat(value, times) {
            if (typeof value === "string") {
                return value.repeat(times);
            }
            else if (typeof value === "number") {
                return value * times;
            }
            throw new Error("value must be string or number");
        }
        const result = repeat("abc", 3);
        const result2 = repeat(false, 3); // no type check error, but will throw an error at runtime
        function repeat2(value, times) {
            if (typeof value === "string") {
                return value.repeat(times);
            }
            else if (typeof value === "number") {
                return (value * times);
            }
            throw new Error("value must be string or number");
        }
        console.log(repeat2("abc", 3)); // abcabcabc
        console.log(repeat2(123, 3)); // 369
        // let x = repeat2(123, 3); // x is number?? no string | number
        // TODO: fix this example
        // function repeat3<T extends string | number>(value: T, times: number): T {
        //   if (typeof value === "string") {
        //     return value.repeat(times) as T;
        //   } else if (typeof value === "number") {
        //     return (value * times) as T;
        //   }
        //   throw new Error("value must be string or number");
        // }
        // let n = 123;
        // let x2 = repeat3<number>(123, 3); // x is number?? no string | number
        // will trigger compile time error if you pass a boolean
        // console.log(repeat2(false, 3)); // error is thrown
        // examples of union types
        let val;
        val = "abc";
        val = 123;
        let val2;
        val2 = "abc";
        val2 = 123;
    }
    // Literal Types
    function literalTypes() {
        // typescript allows to use any string as a type literal
        // type literals are used to restrict the values of the variable
        // example
        let upDirection; // the only value that can be assigned to the variable is 'up'
        // any other value will trigger compile time error
        upDirection = "up";
        // upDirection = 'down'; // error
        // single literal type is not very useful, but we can combine it with union types
        let direction;
        direction = "down";
        direction = "left";
        direction = "right";
        // direction = 'upward'; // compile time error
        direction.trim(); // string methods are available
        direction.toUpperCase(); // string methods are available
        let direction2;
        function move(point, direction) {
            if (direction === "up") {
                return { x: point.x, y: point.y + 1 };
            }
            if (direction === "down") {
                return { x: point.x, y: point.y - 1 };
            }
            if (direction === "left") {
                return { x: point.x - 1, y: point.y };
            }
            if (direction === "right") {
                return { x: point.x + 1, y: point.y };
            }
            throw new Error("invalid direction");
        }
        const point = { x: 0, y: 0 };
        const point2 = move(point, "up"); // { x: 0, y: 1 }
        const point3 = move(point2, "right"); // { x: 1, y: 1 }
        console.log("point", point);
        console.log("point2", point2);
        console.log("point3", point3);
        function printRating(rating) {
            // print number of stars based on the rating
            console.log("".padStart(rating, "⭐"));
        }
        printRating(3); // ⭐⭐⭐
        printRating(5); // ⭐⭐⭐⭐⭐
        // printRating(6); // error
    }
    literalTypes();
    // Intersection types
    function intersectionTypes() {
        let tx = { x: 1, y: 2 };
        tx = { x: 1, y: 2, z: 3 };
        let point3d = { x: 1, y: 2, z: 3 };
        // type intersection is used to combine multiple types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function sendMessage(data) {
            console.log(`dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`);
        }
        const data = {
            name: "John",
            email: "test@jhn.com",
            phone: "123-456-7890",
        };
        sendMessage(data);
        function sendMessageV2(data) {
            console.log(`dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`);
        }
        sendMessageV2(data);
        function sendMessageV3(data) {
            console.log(`dear ${data.name}, your email is ${data.email}, your phone is ${data.phone}`);
        }
        sendMessageV3({
            name: "John",
            email: "asdf@asdf.com",
            phone: "123-456-7890", // if omitted, will trigger compile time error
        });
    }
    intersectionTypes();
    // async/await
    async function assyncAwait() {
        // async await is a syntactic sugar for promises
        // - is used to write asynchronous code in synchronous style
        // - is used to avoid callback hell
        // - is used to avoid promise chaining
        // - is used to avoid promise error handling
        // example
        function printMessagesWithTimeout() {
            setTimeout(() => {
                console.log("1");
                setTimeout(() => {
                    console.log("2");
                    setTimeout(() => {
                        console.log("3");
                    }, 1000);
                }, 1000);
            }, 1000);
        }
        printMessagesWithTimeout();
        // the problem with the code above is that it is hard to read and maintain
        // it is hard to add more messages, change the order of the messages
        // it is hard to add error handling
        // example with async await
        async function printMessagesWithTimeoutV2() {
            await later(1000);
            console.log("1");
            await later(1000);
            console.log("2");
            await later(1000);
            console.log("3");
        }
        // const arrowAsync = async () => {}; // async arrow function syntax example
        const later = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        printMessagesWithTimeoutV2();
        // async await can be used to do asyncronous loops
        function calculateLargeSum() {
            let sum = 0;
            for (let i = 0; i < 10000000000; i++) {
                // this loop is blocking the main thread
                // UI is not responsive
                sum += i;
            }
            return sum;
        }
        calculateLargeSum();
        // async await can be used to do asyncronous loops
        async function calculateLargeSumAsync() {
            let sum = 0;
            for (let i = 0; i < 10000000000; i++) {
                if (i % 10000000 === 0) {
                    await later(1);
                }
                sum += i;
            }
            return sum;
        }
        console.log("1");
        calculateLargeSumAsync().then((sum) => console.log(sum)); //
        console.log("2");
        let sum = await calculateLargeSumAsync();
        console.log(sum);
        console.log("3");
    }
    assyncAwait();
}
// Type Narrowing
function typeNarrowing() {
    function repeat(value, times) {
        if (typeof value === "string") {
            return value.repeat(times);
        }
        else if (typeof value === "number") {
            return value * times;
        }
        throw new Error("value must be string or number");
    }
    // in this funciton we are using typeof operator to narrow the type of the value - number or string
    // this is called type narrowing
    // within the if statement, the type of the value is narrowed to string or number
    // and we can see its type if hovering over the value
    // and we can use type-specific methods on the value
    // typeof operator is one of the ways to narrow the the union type to one of the types in the union
    // since typeof operator returns 'object' for any object, it is not very useful for narrowing object types
    // instanceof operator is another way to narrow the type of the object
    class Human {
        name;
        age;
        driverLicenseId;
        constructor(name, age, driverLicenseId) {
            this.name = name;
            this.age = age;
            this.driverLicenseId = driverLicenseId;
        }
    }
    class Animal {
        name;
        age;
        species;
        constructor(name, age, species) {
            this.name = name;
            this.age = age;
            this.species = species;
        }
    }
    function printPassangerInfoV2(passanger) {
        console.log(passanger.name);
        console.log(passanger.age);
        // passanger.__proto__ === Human.prototype; // error
        if (passanger instanceof Human) {
            console.log(passanger.driverLicenseId);
        }
        if (passanger instanceof Animal) {
            console.log(passanger.species);
        }
    }
    const human2 = new Human("John", 18, "123");
    const animal2 = new Animal("Daisy", 2, "Cat");
    printPassangerInfoV2(human2);
    printPassangerInfoV2(animal2);
    function printShapeArea(shape) {
        if ("size" in shape) {
            console.log(shape.size * shape.size);
        }
        if ("width" in shape) {
            console.log(shape.width * shape.height);
        }
    }
    const square = {
        size: 10,
    };
    const rectangle = {
        width: 10,
        height: 20,
    };
    printShapeArea(square);
    printShapeArea(rectangle);
}
typeNarrowing();
// Q. setTimeout(() => {}, 0)
// Q. Genric return type
exports.default = {};
