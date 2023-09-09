"use strict";
// use type narrowing to print the passanger info
function exercise23() {
    // annotate the function to accept TPassanger type
    function printPassangerInfo(passanger) {
        // TODO: use type narrowing to print the passanger info
        console.log(passanger.name);
        console.log(passanger.age);
        // TODO: print driverLicenseId if passanger is human
        console.log(passanger.driverLicenseId);
        // TODO: print species if passanger is animal
        console.log(passanger.species);
    }
    // TODO: add missing properties to human and animal objects
    const human = {};
    const animal = {};
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
        if ("messageId" in post) {
            console.log("comment: ", post.text);
        }
        if ("url" in post) {
            console.log("image: ", post.url);
        }
        if ("text" in post) {
            console.log("message: ", post.text);
        }
    }
    // TODO: add missing type property to the objects
    printBlogPost({ text: "abc" });
    printBlogPost({ url: "abc" });
    printBlogPost({ text: "abc", messageId: "123" });
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
    }
    function contact(person) {
        ensureContactable(person);
        // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
        // sendEmail(person.email);
    }
    function contact2(person) {
        // Add inline check for null and undefined - throw error if person.email is null or undefined
        // TODO: uncomment code below and check that it compiles
        // sendEmail(person.email);
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
    function asserWidget(value) { }
    // TODO: add your code to make the following function assert correctly
    function asserGadget(value) { }
    const thing1 = { name: "widget" };
    const thing2 = { os: "ubuntu" };
    asserWidget(thing1);
    // TODO: uncomment the following lines after assertion is added
    // thing1.name = 'weather widget';
    // console.log(thing1.name);
    // TODO: uncomment the following lines after assertion is added
    asserGadget(thing2);
    // thing2.os = 'android';
    // console.log(thing2.os);
}
exercise26();
// use interface and compare with type alias
function exercise27() {
    // TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
    // interface IPersonWithPhone = ...
    // phone is string
    // TODO: uncomment the code below and check that it compiles
    // const person2: IPersonWithPhone = {
    //   name: 'John',
    //   age: 18,
    //   phone: '123-456-7890',
    // };
    // console.log('person data: ', person2.name, person2.age, person2.phone);
}
// TODO: compile and run the code
exercise27();
// use implements keyword to implement interface
function exercise28() {
    // TODO: declare class Widget which implements IWidget
    class Widget {
    }
    // TODO: declare class WidgetWithSize which implements IWidgetWithSize
    class WidgetWithSize {
    }
    // TODO: declare class DesktopWidget which implements IDesktopWidget
    class DesktopWidget {
    }
    // TODO: declare class MobileWidget which implements IMobileWidget
    // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
    class DesktopAndMobileWidget {
    }
    // TODO: add IWidgetPrintable to each of the classes above
    // implementation returns class name and all properties
    // TODO: create instance of each class
    // TODO: print each instance to console
}
// TODO: compile and run the code
exercise28();
