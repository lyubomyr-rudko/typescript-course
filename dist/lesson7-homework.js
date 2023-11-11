"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// Use double assertion
function exercise35() {
    let user = { name: 'John', title: 'Marketing', email: 'john123@gmail.com' };
    let product = { title: 'Book', price: 100, quality: 'high' };
    // TODO: fix the error by adding double assertion
    product = user;
}
exercise35();
// Use this parameter type annotation to fix the error in this code
function exercise36() {
    // Note: this object does not have a name property
    // but the toString function expects it to be there, and there is no type check
    const data = {
        name: "Joe",
        lastName: "Doe",
        age: 30,
        role: "Developer",
    };
    function toString() {
        // TODO: remove the following line
        // return "";
        // TODO: uncomment the following line
        return `${this.name}, ${this.age}, ${this.role}`;
    }
    data.toString = toString;
    // TODO: run the code and observe the error
    console.log(data + "");
    console.log(data.toString());
    console.log(toString.call(data));
    // TODO: add required properties to the data object, fixing the error
}
exercise36();
// Use generic constraints
function exercise37() {
    // TODO: add generic constraints to enforce type checking, add return type annotation
    function addGreeting(obj) {
        // TODO: implement the method sayHello that returns a greeting string
        // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
        // TODO: make sure the obj is not modified, and new object is returned
        const fullName = `${obj.firstName} ${obj.lastName}`;
        const newObj = {
            ...obj,
            sayHello: () => `Hello ${fullName}`,
        };
        return newObj;
    }
    const person = addGreeting({
        firstName: "Joe",
        lastName: "Smith",
        age: 30,
        email: "john@sample.com",
    });
    // TODO: uncomment the following line and fix the error
    console.log(person.sayHello());
}
exercise37();
// Use experimental decorators
function exercise38() {
    // TODO: implement decorator to print call count of the function
    function count(target, propertyKey, descriptor) {
        // add params here
        let callCount = 0;
        // TODO: implement decorator
        // TODO: before calling the function increment callCount
        // TODO: after calling the function print callCount
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            callCount++;
            console.log(`Function ${propertyKey} has been called ${callCount} times.`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    }
    // TODO: implement decorator to print execution time of the function
    function time(target, propertyKey, descriptor) {
        // add params here
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // TODO: before calling the function get current time
            const start = performance.now(); // Get start time
            const result = originalMethod.apply(this, args);
            // TODO: after calling the function get current time
            const end = performance.now(); // Get end time
            // TODO: print the difference between the two times after calling the function
            console.log(`Function ${propertyKey} took ${end - start} milliseconds to execute.`);
            return result;
        };
        return descriptor;
    }
    let Calculation = (() => {
        let _staticExtraInitializers = [];
        let _static_add_decorators;
        return class Calculation {
            static {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _static_add_decorators = [count, time];
                __esDecorate(this, null, _static_add_decorators, { kind: "method", name: "add", static: true, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _staticExtraInitializers);
                if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                __runInitializers(this, _staticExtraInitializers);
            }
            // TODO: add both decorators to the following method
            static add(a, b) {
                return a + b;
            }
        };
    })();
    // TODO: create instance of Calculation class and call add method
    const calc = new Calculation();
    calc.add(5, 10);
}
exercise38();
// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
    // TODO: implement decorator to print call count of the function
    function count(originalMethod, _context) {
        let callCount = 0;
        function replacementMethod(...args) {
            callCount++;
            console.log(`Function has been called ${callCount} times.`);
            return originalMethod.call(this, ...args);
        }
        return replacementMethod;
    }
    // TODO: implement decorator to print execution time of the function
    function time(originalMethod, _context) {
        function replacementMethod(...args) {
            const start = performance.now();
            const result = originalMethod.call(this, ...args);
            const end = performance.now();
            console.log(`Function took ${end - start} milliseconds to execute.`);
            return result;
        }
        return replacementMethod;
    }
    let Calculation = (() => {
        let _staticExtraInitializers = [];
        let _static_add_decorators;
        return class Calculation {
            static {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _static_add_decorators = [count, time];
                __esDecorate(this, null, _static_add_decorators, { kind: "method", name: "add", static: true, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _staticExtraInitializers);
                if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                __runInitializers(this, _staticExtraInitializers);
            }
            // TODO: add both decorators to the following method
            static add(a, b) {
                return a + b;
            }
        };
    })();
    // TODO: create instance of Calculation class and call add method
    const calc = new Calculation();
    calc.add(5, 10);
}
exercise39();
