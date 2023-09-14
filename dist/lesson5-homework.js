"use strict";
// use type narrowing to print the passanger info
function exercise23() {
    // annotate the function to accept TPassanger type
    function printPassangerInfo(passanger) {
        // TODO: use type narrowing to print the passanger info
        console.log(passanger.name);
        console.log(passanger.age);
        // TODO: print driverLicenseId if passanger is human
        if ("driverLicenseId" in passanger) {
            console.log(passanger.driverLicenseId);
        }
        // TODO: print species if passanger is animal
        if ("species" in passanger) {
            console.log(passanger.species);
        }
    }
    // TODO: add missing properties to human and animal objects
    const human = {
        name: "John",
        age: 23,
        driverLicenseId: 'id2323'
    };
    const animal = {
        name: "Prince",
        age: 2,
        species: "cat"
    };
    printPassangerInfo(human);
    printPassangerInfo(animal);
    // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
    // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
}
// TODO: compile and run the code
exercise23();
// use discriminated union to narrow the type of the object
function exercise24() {
    function printBlogPost(post) {
        // TODO: use discriminated union to narrow the type of the object
        if (post.type === 'comment') {
            console.log("comment: ", post.text);
        }
        if (post.type === 'image') {
            console.log("image: ", post.url);
        }
        if (post.type === 'message') {
            console.log("message: ", post.text);
        }
    }
    // TODO: add missing type property to the objects
    printBlogPost({ type: 'message', text: "abc" });
    printBlogPost({ type: 'image', url: "abc" });
    printBlogPost({ type: 'comment', text: "abc", messageId: "123" });
}
// TODO: compile and run the code
exercise24();
// use non-null assertion operator
function exercise25() {
    function sendEmail(email) {
        console.log("sending email to", email);
    }
    function ensureContactable(person) {
        // TODO: add check for null and undefined - throw error if person.email is null or undefined
        if (!person.email) {
            throw new Error("person is  null or undefined");
        }
    }
    function contact(person) {
        ensureContactable(person);
        // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
        sendEmail(person.email);
    }
    function contact2(person) {
        // Add inline check for null and undefined - throw error if person.email is null or undefined
        if (person.email == null || person.email == undefined) {
            throw new Error("person is  null or undefined");
        }
        // TODO: uncomment code below and check that it compiles
        sendEmail(person.email);
    }
    const person1 = {
        name: "John",
        email: "asdf@asdf.com",
    };
    const person2 = {
        name: "John",
        email: null,
    };
    contact(person1);
    contact2(person1);
    contact(person2);
    // TODO: print the result to console
}
// TODO: compile and run the code
exercise25();
// Create an assertion function
function exercise26() {
    // TODO: add your code to make the following function assert correctly
    function asserWidget(value) {
        if (!(value && typeof value === 'object' && 'name' in value)) {
            throw new Error('Assertion failed: Not a TWidget');
        }
    }
    // TODO: add your code to make the following function assert correctly
    function asserGadget(value) {
        if (!(value && typeof value === 'object' && 'os' in value)) {
            throw new Error('Assertion failed: Not a TGadget');
        }
    }
    const thing1 = { name: "widget" };
    const thing2 = { os: "ubuntu" };
    asserWidget(thing1);
    // TODO: uncomment the following lines after assertion is added
    thing1.name = 'weather widget';
    console.log(thing1.name);
    // TODO: uncomment the following lines after assertion is added
    asserGadget(thing2);
    thing2.os = 'android';
    console.log(thing2.os);
}
exercise26();
// use interface and compare with type alias
function exercise27() {
    // TODO: uncomment the code below and check that it compiles
    const person = {
        name: 'John',
        age: 18,
        phone: '123-456-7890',
    };
    console.log('person data: ', person.name, person.age, person.phone);
    // TODO: uncomment the code below and check that it compiles
    const person2 = {
        name: 'John',
        age: 18,
        phone: '123-456-7890',
    };
    console.log('person data: ', person2.name, person2.age, person2.phone);
}
// TODO: compile and run the code
exercise27();
// use implements keyword to implement interface
function exercise28() {
    // TODO: declare class Widget which implements IWidget
    class Widget {
        name;
        constructor(name) {
            this.name = name;
        }
        toString() {
            return `Widget(name: ${this.name})`;
        }
    }
    // TODO: declare class WidgetWithSize which implements IWidgetWithSize
    class WidgetWithSize {
        name;
        width;
        height;
        color;
        constructor(name, width, height, color) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        toString() {
            return `Widget With Size(name: ${this.name}, width: ${this.width}, height: ${this.height}, color: ${this.color})`;
        }
    }
    // TODO: declare class DesktopWidget which implements IDesktopWidget
    class DesktopWidget {
        name;
        width;
        height;
        color;
        os;
        constructor(name, width, height, color, os) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        open() {
            console.log("Opening desktop widget");
        }
        toString() {
            return `Desktop Widget(name: ${this.name}, width: ${this.width}, height: ${this.height}, color: ${this.color}, os: ${this.os})`;
        }
    }
    // TODO: declare class MobileWidget which implements IMobileWidget
    class MobileWidget {
        name;
        width;
        height;
        color;
        space;
        constructor(name, width, height, color, space) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.space = space;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        install() {
            console.log("Installing mobile widget");
        }
        toString() {
            return `Mobile Widget(name: ${this.name}, width: ${this.width}, height: ${this.height}, color: ${this.color}, space: ${this.space})`;
        }
    }
    // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
    class DesktopAndMobileWidget {
        name;
        width;
        height;
        color;
        os;
        space;
        constructor(name, width, height, color, os, space) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
            this.space = space;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        open() {
            console.log("Opening desktop and mobile widget");
        }
        install() {
            console.log("Installing desktop and mobile widget");
        }
        toString() {
            return `Desktop And Mobile Widget(name: ${this.name}, width: ${this.width}, height: ${this.height}, color: ${this.color}, os: ${this.os}, space: ${this.space})`;
        }
    }
    // TODO: add IWidgetPrintable to each of the classes above
    // implementation returns class name and all properties
    // TODO: create instance of each class
    const widget = new Widget("Simple Widget");
    const widgetWithSize = new WidgetWithSize("Resizable Widget", 100, 100, "Blue");
    const desktopWidget = new DesktopWidget("Desktop Widget", 200, 200, "Gray", "Windows");
    const mobileWidget = new MobileWidget("Mobile Widget", 50, 50, "Green", 500);
    const desktopAndMobileWidget = new DesktopAndMobileWidget("Desktop and Mobile Widget", 150, 150, "Red", "Android", 300);
    // TODO: print each instance to console
    console.log(widget.toString());
    console.log(widgetWithSize.toString());
    console.log(desktopWidget.toString());
    console.log(mobileWidget.toString());
    console.log(desktopAndMobileWidget.toString());
}
// TODO: compile and run the code
exercise28();
