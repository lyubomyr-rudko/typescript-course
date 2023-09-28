"use strict";
// ********* Lesson 10 *********
// Utility This type
function utilityThisType() { }
utilityThisType();
// String Manipulation Utilities
function stringManipulationUtilities() {
    // Capitalize
    // Uncapitalize
    // Uppercase
    // Lowercase
    const a = "Small-red";
}
stringManipulationUtilities();
// Mapped Types as Clauses
function mappedTypesAsClauses() {
    //
}
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
    // type Pro
}
utilityTypesDeepDive();
