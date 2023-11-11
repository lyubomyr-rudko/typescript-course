"use strict";
// ********* Lesson 10 *********
// Utility This type
function utilityThisType() {
    // ThisType is a built-in utility type that allows you to specify the type of this inside an object literal, or inside a class declaration.
    const math = {
        double() {
            this.value *= 2;
        },
        half() {
            this.value *= 0.5;
        },
        pow(n) {
            this.value **= n;
        },
    };
    const obj = {
        value: 2,
        ...math,
    };
    obj.double();
    const math2 = {
        double() {
            this.value *= 2;
        },
        half() {
            this.value *= 0.5;
        },
        pow(n) {
            this.value **= n;
        },
    };
    const obj2 = {
        value: 2,
        ...math2,
    };
    obj2.double();
    function createState(desc) {
        return {
            ...desc.data,
            ...desc.methods,
        };
    }
    const state = createState({
        data: {
            name: "John",
            age: 20,
        },
        methods: {
            getBirthYear() {
                return new Date().getFullYear() - this.age;
            },
        },
    });
    console.log("birthYear ", state.getBirthYear());
    console.log("name ", state.age);
    console.log("name ", state.name);
}
utilityThisType();
// String Manipulation Utilities
function stringManipulationUtilities() {
    // Uppercase
    // Lowercase
    // Capitalize
    // Uncapitalize
    const a = "SMALL-red";
    const pointGetter = {
        x: 1,
        y: 2,
        z: 3,
        name: "point",
        getX() {
            return this.x;
        },
        getY() {
            return this.y;
        },
        getZ() {
            return this.z;
        },
        getName() {
            return this.name;
        },
    };
}
stringManipulationUtilities();
// Awaited<T> Utility
async function awaitedUtilityType() {
    const first = new Promise((resolve, reject) => resolve("Superman"));
    const second = new Promise((resolve, reject) => resolve(new Promise((resolve, reject) => resolve("Batman"))));
    const third = new Promise((resolve, reject) => resolve(new Promise((resolve, reject) => resolve(new Promise((resolve, reject) => resolve("Spiderman"))))));
    const firstResult = await first;
    // const secondResult = await (await second);
    // const thirdResult = await (await (await third));
    const secondResult = await second;
    const thirdResult = await third;
    // third.then((thirdResult) => console.log(thirdResult));
}
awaitedUtilityType();
// Utility types deep dive - Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, InstanceType
function utilityTypesDeepDive() {
    function sum(a, b) {
        return a + b;
    }
    // InstanceType
    //   type InstanceType<T extends abstract new (...args: any) => any> =
    //     T extends abstract new (...args: any) => infer R ? R : any;
    class Point {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const pointTupple = [1, 2];
    const point = pointTupple;
}
utilityTypesDeepDive();
// Enums
function enums() {
    let FileAccess;
    (function (FileAccess) {
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["Execute"] = 8] = "Execute";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    })(FileAccess || (FileAccess = {}));
    function checkAccess(access) {
        if (access & FileAccess.Read) {
            console.log("Read");
        }
        if (access & FileAccess.Write) {
            console.log("Write");
        }
        if (access & FileAccess.Execute) {
            console.log("Execute");
        }
    }
    checkAccess(1);
    checkAccess(2);
    checkAccess(3);
    checkAccess(4);
    checkAccess(5);
}
enums();
