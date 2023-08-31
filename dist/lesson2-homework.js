"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
function excercise4() {
    var coordinates1;
    var coordinates2;
    coordinates1 = [1, 1];
    coordinates2 = [4, 5];
    function distance(p1, p2) {
        var x1 = p1[0];
        var y1 = p1[1];
        var x2 = p2[0];
        var y2 = p2[1];
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
    console.log(distance(coordinates1, coordinates2));
}
excercise4();
function excercise5() {
    var coordinates1 = { x: 1, y: 1 };
    var coordinates2 = { x: 4, y: 5 };
    function distance(p1, p2) {
        var x1 = p1.x;
        var y1 = p1.y;
        var x2 = p2.x;
        var y2 = p2.y;
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
    console.log(distance(coordinates1, coordinates2));
}
excercise5();
function excercise6() {
    var PI = 3.14;
    function calculateCircleArea(radius) {
        return PI * Math.pow(radius, 2);
    }
    console.log(calculateCircleArea(14));
    var user = {
        name: 'Serhii',
        age: 32,
    };
    function incrementAge(person) {
        person.age++;
    }
    incrementAge(user);
    console.log(user);
}
excercise6();
function excercise7() {
    var map;
    var doubleNumber;
    map = function (arr, fn) {
        var newArr = [];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var number = numbers_1[_i];
            newArr.push(number * 2);
        }
        return newArr;
    };
    var numbers = [1, 2, 3, 4, 5, 6, 7];
    doubleNumber = function (num) { return num * 2; };
    var result = map(numbers, doubleNumber);
    console.log(result);
}
excercise7();
function excercise8() {
    function printGreeting(user) {
        console.log("Hello ".concat(user.name));
    }
    var product = {
        name: 'Keychron K6 Pro QMK/VIA Wireless Custom Mechanical Keyboard',
        price: 99,
    };
    printGreeting(product);
    printGreeting({ name: 'Serhii' });
    printGreeting({ name: 'Serhii', age: 30 });
}
excercise8();
function excercise9() {
    var Book = (function () {
        function Book(title, year) {
            this.title = title;
            this.year = year;
        }
        Book.prototype.getInfo = function () {
            return "Title: \"".concat(this.title, "\", Year: ").concat(this.year);
        };
        Book.prototype.getAge = function () {
            return new Date().getFullYear() - this.year;
        };
        Book.prototype.revise = function (newYear) {
            if (newYear > new Date().getFullYear()) {
                console.log('Invalid year for revision.');
                return;
            }
            this.year = newYear;
        };
        return Book;
    }());
    var Magazine = (function (_super) {
        __extends(Magazine, _super);
        function Magazine(title, year, month, day) {
            var _this = _super.call(this, title, year) || this;
            _this.month = month;
            _this.day = day;
            return _this;
        }
        Magazine.prototype.getInfo = function () {
            var parentInfo = _super.prototype.getInfo.call(this);
            return "".concat(parentInfo, ", Month: ").concat(this.month, ", Day: ").concat(this.day);
        };
        return Magazine;
    }(Book));
    var book = new Book('Grokking Algorithms', 2016);
    console.log(book.getInfo());
    console.log(book.getAge());
    book.revise(2017);
    console.log(book.getInfo());
    var magazine = new Magazine('Ultimate TypeScript Handbook', 2023, 'July', 18);
    console.log(magazine.getInfo());
}
excercise9();
function excercise10() {
    var _Rectangle2_width, _Rectangle2_height;
    var Rectangle = (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        Rectangle.prototype.getPerimeter = function () {
            return this.width + this.height;
        };
        return Rectangle;
    }());
    var rectangle = new Rectangle(10, 20);
    console.log(rectangle.getArea());
    console.log(rectangle.getPerimeter());
    var Rectangle2 = (function () {
        function Rectangle2(width, height) {
            _Rectangle2_width.set(this, void 0);
            _Rectangle2_height.set(this, void 0);
            __classPrivateFieldSet(this, _Rectangle2_width, width, "f");
            __classPrivateFieldSet(this, _Rectangle2_height, height, "f");
        }
        Rectangle2.prototype.getArea = function () {
            return __classPrivateFieldGet(this, _Rectangle2_width, "f") * __classPrivateFieldGet(this, _Rectangle2_height, "f");
        };
        Rectangle2.prototype.getPerimeter = function () {
            return __classPrivateFieldGet(this, _Rectangle2_width, "f") + __classPrivateFieldGet(this, _Rectangle2_height, "f");
        };
        return Rectangle2;
    }());
    _Rectangle2_width = new WeakMap(), _Rectangle2_height = new WeakMap();
    var rectangle2 = new Rectangle(10, 20);
    console.log(rectangle2.getArea());
    console.log(rectangle2.getPerimeter());
}
excercise10();
