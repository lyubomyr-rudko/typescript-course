// Use double assertion
function exercise35() {
    // TODO:Create two types: TUser and TProduct
    interface TUser {
        /* TODO: add definition for user name, title and email */
        name: string;
        title: string;
        email: string;
    }
    interface TProduct {
        /* TODO: add definition for product title, price and quantity */
        title: string;
        price: number;
        quantity: number;
    }

    let user: TUser = {
        name: 'Serhii',
        title: 'Serhii',
        email: 'serhii@gmail.com',
    };
    let product: TProduct = { title: 'paper', price: 1, quantity: 1000000 };

    // TODO: fix the error by adding double assertion
    product = user as any as TProduct;
    console.log('product: ', product);
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
    // Note: this object does not have a name property
    // but the toString function expects it to be there, and there is no type check
    const data: TPerson = {
        name: 'Joe',
        age: 30,
        role: 'Developer',
    };
    // TODO: add this param annotation, to enforce that this function
    type TPerson = { name: string; age: number; role: string };
    // can only be called on an object with name, age and role properties
    function toString(this: TPerson): string {
        // TODO: remove the following line
        // TODO: uncomment the following line
        return `${this.name}, ${this.age}, ${this.role}`;
    }
    // data.toString = toString;
    // TODO: run the code and observe the error
    // console.log(data + '');
    // console.log(data.toString());
    console.log(toString.call(data));

    // TODO: add required properties to the data object, fixing the error
}
exercise36();

// Use generic constraints
function exercise37() {
    interface IPerson {
        firstName: string;
        lastName: string;
    }

    // TODO: add generic constraints to enforce type checking, add return type annotation
    function addGreeting<T extends IPerson>(obj: T) {
        return {
            ...obj,
            sayHello() {
                return `Hello ${(obj as T).firstName} ${(obj as T).lastName}`;
            },
        };
        // TODO: implement the method sayHello that returns a greeting string
        // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
        // TODO: make sure the obj is not modified, and new object is returned
    }

    const person = addGreeting({
        firstName: 'Joe',
        lastName: 'Smith',
        age: 30,
        email: 'john@sample.com',
    });

    // TODO: uncomment the following line and fix the error
    console.log(person.sayHello());
}
exercise37();

// Use experimental decorators
function exercise38() {
    // TODO: implement decorator to print call count of the function
    function count(
        target: any,
        methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        let callCount = 0;
        return ((
            target: any,
            methodName: string,
            descriptor: PropertyDescriptor
        ): PropertyDescriptor => {
            // TODO: implement decorator
            // TODO: before calling the function increment callCount
            // TODO: after calling the function print callCount
            let originalMethod = descriptor.value;

            descriptor.value = function (...args: any[]) {
                callCount++;
                console.log(`Function has been called ${callCount} times.`);
                return originalMethod.apply(this, args);
            };

            return descriptor;
        })(target, methodName, descriptor);
    }
    // TODO: implement decorator to print execution time of the function
    function time(
        target: any,
        methodName: string,
        descriptor: PropertyDescriptor
    ) {
        let originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.time();
            let result = originalMethod.apply(this, args);
            console.timeEnd();
            return result;
        };

        return descriptor;
        // TODO: before calling the function get current time
        // TODO: after calling the function get current time
        // TODO: print the difference between the two times after calling the function
    }

    class Calculation {
        // TODO: add both decorators to the following method
        @count
        @time
        public add(a: number, b: number) {
            return a + b;
        }
    }
    // TODO: create instance of Calculation class and call add method
    const calculation = new Calculation();
    console.log(calculation.add(1, 2));
    console.log(calculation.add(2, 2));
    console.log(calculation.add(2, 3));
    console.log(calculation.add(3, 3));
    console.log(calculation.add(3, 4));
    console.log(calculation.add(4, 4));
    console.log(calculation.add(4, 5));
    // calculation.add(1, 2);
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
    // TODO: implement decorator to print call count of the function
    function count(value: Function, _context: ClassMethodDecoratorContext) {
        let callCount = 0;
        return function (this: any, ...args: number[]) {
            ++callCount;
            const result = value.apply(this, args);
            console.log(`Function has been called ${callCount} times.`);
            return result;
        };
        console.log(callCount);
    }

    // TODO: implement decorator to print execution time of the function
    function time(value: Function, _context: ClassMethodDecoratorContext) {
        return function (this: any, ...args: number[]) {
            console.time();
            let result = value.apply(this, args);
            console.timeEnd();
            return result;
        };
    }

    class Calculation {
        // TODO: add both decorators to the following method
        @count
        @time
        public add(a: number, b: number) {
            return a + b;
        }
    }
    // TODO: create instance of Calculation class and call add method
    const calculation = new Calculation();
    console.log(calculation.add(1, 2));
    console.log(calculation.add(2, 2));
    console.log(calculation.add(2, 3));
    console.log(calculation.add(3, 3));
    console.log(calculation.add(3, 4));
    console.log(calculation.add(4, 4));
    console.log(calculation.add(4, 5));
}
exercise39();
