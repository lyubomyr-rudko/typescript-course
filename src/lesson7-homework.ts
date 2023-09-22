// Use double assertion
function exercise35() {
  // + TODO:Create two types: TUser and TProduct
  interface TUser {
    /* + TODO: add definition for user name, title and email */
    name: string;
    title: string;
    email: string;
  }
  interface TProduct {
    /* + TODO: add definition for product title, price and quantity */
    title: string;
    price: number;
    quantity: number;
  }

  let user: TUser = {
    name: "Danylo",
    title: "dds",
    email: "epumbar@gmail.com",
  };
  let product: TProduct = {
    title: "React",
    price: 0,
    quantity: 1,
  };

  // + TODO: fix the error by adding double assertion
  product = user as unknown as TProduct;
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
  // + TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: { name: string; age: number; role: string }) {
    // + TODO: remove the following line
    // + TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  // + TODO: run the code and observe the error
  console.log(data + "");
  console.log(data.toString());
  // + TODO: add required properties to the data object, fixing the error
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  // + TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(obj: T): T & { sayHello(): string } {
    // + TODO: implement the method sayHello that returns a greeting string
    // + TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // + TODO: make sure the obj is not modified, and new object is returned
    const newObj = {
      ...obj,
      sayHello(): string {
        return `Hello ${(obj as T).firstName} ${(obj as T).lastName}`;
      },
    };

    return newObj;
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  });

  // + TODO: uncomment the following line and fix the error
  console.log(person.sayHello());
}
exercise37();

// Use experimental decorators
function exercise38() {
  // + TODO: implement decorator to print call count of the function
  function Count(target: any, method: string, descriptor: PropertyDescriptor) {
    // add params here
    let callCount = 0;
    // + TODO: implement decorator
    // + TODO: before calling the function increment callCount
    // + TODO: after calling the function print callCount
    return ((
      target: any,
      method: string,
      descriptor: PropertyDescriptor
    ): PropertyDescriptor => {
      const defaultMethod = descriptor.value;

      descriptor.value = function (...args: any[]) {
        callCount++;
        console.log(callCount);
        return defaultMethod.apply(this, args);
      };

      return descriptor;
    })(target, method, descriptor);
    // Value of type '(target: any, method: string, descriptor: PropertyDescriptor) => PropertyDescriptor' has no properties in common with type 'PropertyDescriptor'. Did you mean to call it?ts(2560)
  }
  // + TODO: implement decorator to print execution time of the function
  function Time(target: any, method: string, descriptor: PropertyDescriptor) {
    // add params here
    // + TODO: before calling the function get current time
    // + TODO: after calling the function get current time
    // + TODO: print the difference between the two times after calling the function
    let defaultMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.time();
      let result = defaultMethod.apply(this, args);
      console.timeEnd();
      return result;
    };

    return descriptor;
  }

  class Calculation {
    // TODO: add both decorators to the following method ????
    //     Unable to resolve signature of method decorator when called as an expression.
    //   The runtime will invoke the decorator with 2 arguments, but the decorator expects 3.ts(1241)
    // lesson7-homework.ts(98, 5): An argument for 'descriptor' was not provided.
    // Decorator function return type 'PropertyDescriptor' is not assignable to type 'void | ((a: number, b: number) => number)'.ts(1270)
    // ?????????
    // @Time
    // @Count
    public add(a: number, b: number) {
      return a + b;
    }
  }
  // + TODO: create instance of Calculation class and call add method
  const calculation = new Calculation();
  console.log(calculation.add(1, 2));
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // + TODO: implement decorator to print call count of the function
  // + TODO: implement decorator to print execution time of the function

  function Count(value: Function, _context: ClassMethodDecoratorContext) {
    let callCount = 0;
    return function (this: any, ...args: number[]) {
      ++callCount;
      const result = value.apply(this, args);
      console.log(callCount);
      return result;
    };
  }

  function Time(value: Function, _context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: number[]) {
      console.time();
      let result = value.apply(this, args);
      console.timeEnd();
      return result;
    };
  }

  class Calculation {
    // + TODO: add both decorators to the following method
    // here working without any problems. but not in 38 task
    @Count
    @Time
    public add(a: number, b: number) {
      return a + b;
    }
  }
  // + TODO: create instance of Calculation class and call add method
  const calculation = new Calculation();
  console.log(calculation.add(1, 2));
}
exercise39();
