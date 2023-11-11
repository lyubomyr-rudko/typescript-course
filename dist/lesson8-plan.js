"use strict";
// ********* Lesson 8 *********
// Temporal uncertainty
function temporalUncertainty() {
    let greetingsText = "Hello";
    if (greetingsText !== null) {
        greetingsText.toUpperCase(); // OK
        const list = Array(5)
            .fill(null)
            .map(() => {
            // return greetingsText.split('').join('-');
            return greetingsText?.split("").join("-");
        });
        // map might execute asyncronously - same as setTimeout
        // setTimeout(() => {
        //   // error is expected here
        //   console.log(greetingsText.split('').join('-'));
        // }, 1000);
        console.log(list);
    }
    // greetingsText = null;
    if (greetingsText !== null) {
        greetingsText.toUpperCase(); // OK
        const localGreetingsText = greetingsText;
        const list = Array(5)
            .fill(null)
            .map(() => {
            return localGreetingsText.split("").join("-");
        });
        console.log(list);
        setTimeout(() => {
            // OK
            console.log(localGreetingsText.split("").join("-"));
        }, 1000);
    }
    greetingsText = null;
}
// Typeof type operator
function typeofTypeOperator() {
    // JavaScript already has a typeof operator you can use in an expression context:
    // Prints "string"
    console.log(typeof "Hello world");
    let s = "hello";
    let n = typeof s;
    // TypeofS is alias to type "string" and has no value - it is a type, removed during compilation
    const person5 = {
        firstName: "Joe",
        lastName: "Smith",
        age: 30,
    };
    const person6 = {
        firstName: "Joe",
        lastName: "Smith",
        age: 30, // if this is omitted - error
    };
    // b.
    const apiResponse = {
        data: {
            firstName: "Joe",
            lastName: "Smith",
            age: 30,
        },
        status: 200,
    };
    // can be used to define a return type of a function
    function getPerson() {
        return apiResponse.data;
    }
}
typeofTypeOperator();
// Lookup types
function lookupTypes() {
    const usersList = [
        {
            id: 1,
            firstName: "Terry",
            lastName: "Medhurst",
            maidenName: "Smitham",
            age: 50,
            gender: "male",
            email: "atuny0@sohu.com",
            phone: "+63 791 675 8914",
            username: "atuny0",
            password: "9uQFF1Lh",
            birthDate: "2000-12-25",
            image: "https://robohash.org/hicveldicta.png",
            bloodGroup: "A−",
            height: 189,
            weight: 75.4,
            eyeColor: "Green",
            hair: {
                color: "Black",
                type: "Strands",
            },
            domain: "slashdot.org",
            ip: "117.29.86.254",
            address: {
                address: "1745 T Street Southeast",
                city: "Washington",
                coordinates: {
                    lat: 38.867033,
                    lng: -76.979235,
                },
                postalCode: "20020",
                state: "DC",
            },
            macAddress: "13:69:BA:56:A3:74",
            university: "Capitol University",
            bank: {
                cardExpire: "06/22",
                cardNumbers: ["50380955204220685", "6762303175774717"],
                cardType: "maestro",
                currency: "Peso",
                iban: "NO17 0695 2754 967",
            },
            company: {
                address: {
                    address: "629 Debbie Drive",
                    city: "Nashville",
                    coordinates: {
                        lat: 36.208114,
                        lng: -86.58621199999999,
                    },
                    postalCode: "37076",
                    state: "TN",
                },
                department: "Marketing",
                name: "Blanda-O'Keefe",
                title: "Help Desk Operator",
            },
            ein: "20-9487066",
            ssn: "661-64-2976",
            userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
        },
    ];
    // no type safety here
    function printUserAddress(address) {
        console.log(address.address, address.city, address.state);
    }
    // for large interfaces it is possible to use lookup types
    function printUserAddressV2(address) {
        // lookup type
        console.log(address.address, address.city, address.state);
    }
    // lookup type requires square brackets syntax around the property name
    // this does not work
    // function printUserAddressV3(address: IUser.address) {
    //   console.log(address.address, address.city, address.state);
    // }
    // lookup type allows to access nested properties
    function navigateToCoordinates(workCoordinates) {
        console.log(workCoordinates.lat, workCoordinates.lng);
    }
    // lookup type allows to access array elements
    function getUserCardNumber(user) {
        return user.bank.cardNumbers[0];
    }
    const cardNumber = getUserCardNumber(usersList[0]);
    //   let x = "name"
    // type PY = Person[x]; // error - x is not a type
}
lookupTypes();
// keyof type operator
function keyofTypeOperator() {
    const person7 = {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Nashville",
        },
    };
    function getProperty(obj, key) {
        console.log("getProperty", obj[key]);
        return obj[key];
    }
    // problem - any allows to pass any argument, and no type safety is enforced
    const peronName = getProperty(person7, "name"); // John - but any type is returned, no type safety
    const personAge = getProperty(person7, "age"); // 30
    const personAddress = getProperty(person7, "adres"); // undefined - typo, but no error
    function getPropertyV2(obj, key) {
        console.log("getPropertyV2", obj[key]);
        return obj[key];
    }
    // getPropertyV2(person7, 'adres'); // good - error for typo
    // but can code duplication ('name' | 'age' | 'address') be avoided?
    function getPropertyV3(obj, key) {
        console.log("getPropertyV2", obj[key]);
        return obj[key];
    }
    function getPropertyV4(obj, key) {
        console.log("getPropertyV2", obj[key]);
        return obj[key];
    }
    function getPropertyV5(obj, key) {
        console.log("getPropertyV2", obj[key]);
        return obj[key];
    }
    function getPropertyV6(obj, key) {
        console.log("getPropertyV2", obj[key]);
        return obj[key];
    }
    const peronName2 = getPropertyV5(person7, "name"); // John
    const personAge2 = getPropertyV5(person7, "age"); // 30
}
keyofTypeOperator();
// Conditional types
function conditionalTypes() {
    // ternary operator in js
    let x = 10;
    let y = x > 5 ? "yes" : "no"; // y is string
    const isNumber = (value) => {
        return typeof value === "number" ? "number" : "not number";
    };
    const result = isNumber(123); // number
    function getTypeName(value) {
        return typeof value;
    }
    const str = getTypeName("abc"); // 'string' - string value is returned, of literal type 'string'
    const num = getTypeName(123); // 'number' - string value is returned, of literal type 'number'
    const bool = getTypeName(true); // 'boolean'
    const undef = getTypeName(undefined); // 'undefined'
    const func = getTypeName(() => { }); // 'function'
    const sym = getTypeName(Symbol("abc")); // 'symbol'
    const big = getTypeName(BigInt(123)); // 'bigint'
    const obj = getTypeName({}); // 'object'
    // same as TypeName<string> | TypeName<number>
}
conditionalTypes();
// Conditional Types with Unions and never
function coditionalTypesWithUnionsAndNever() {
    // In terms of sets, we can think of the never type as an empty set.
    // An empty set contains no elements, and the never type similarly represents
    // a set of values that cannot exist. Any expression that evaluates to never
    // is considered to be unreachable, meaning that it can never be executed
    // during the runtime of a program. For example, consider the following function
    // that takes an argument of type string and returns a value of type never:
    function throwError(message) {
        throw new Error(message);
    }
    let impossible = throwError("error message");
    // never type - variable is expected to never be assigned,
    // this line is expected to never be executed
    // impossible = 'abc'; // error - type 'string' is not assignable to type 'never'
    // type 'string' is not assignable to variable of type 'never', declared implicitly
    // const nverGreeting: never = 'Hello';
    // but never can be assigned to any type
    let impossible2 = throwError("error message"); // never
    // since impossible2 is of blank type, and contains "vacuum" - it can be assigned to any variable
    // it is part of any set
    let x = impossible2;
    console.log(impossible2);
    // if utility generic conditional type returns never for some type in the union,
    // it is removed from the union
}
coditionalTypesWithUnionsAndNever();
// Infer keyword and `ReturnType<T>`
function inferKeywordAndReturnTypeUtility() {
    // types can be inferred from other types - sort of 'type variables'
    const value1 = "abc";
    const value2 = ["abc", "def"];
    function getFirstElement(arr) {
        return Array.isArray(arr) ? arr[0] : arr;
    }
    const example1 = getFirstElement(["abc", "def"]); // string
    const example2 = getFirstElement("asdf"); // string
    // b. ReturnType<T>
    function createUser(firstName, lastName, age) {
        const id = (Math.random() * 100000).toString();
        return {
            firstName,
            lastName,
            age,
            id,
        };
    }
    function printUserInfo(user) {
        console.log(`User ${user.firstName} ${user.lastName} is ${user.age} years old`);
    }
    // ReturnType<T> is a utility type, defined in lib.es5.d.ts
    function printUserInfoV2(user) {
        console.log(`User ${user.firstName} ${user.lastName} is ${user.age} years old`);
    }
    const params = ["John", "Doe", 30];
    const user = createUser(...params);
}
inferKeywordAndReturnTypeUtility();
