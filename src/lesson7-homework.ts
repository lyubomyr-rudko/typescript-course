// Use double assertion
function exercise35() {
  // + TODO:Create two types: TUser and TProduct
  interface TUser {
    /* + TODO: add definition for user name, title and email */
    userName: string;
    title: string;
    email: string;
  }
  interface TProduct {
    /* + TODO: add definition for product title, price and quantity */
    title: string;
    price: number;
    quantity: number;
  }

  let user: TUser = {} as TUser;
  let product: TProduct = {} as TProduct;

  // + TODO: fix the error by adding double assertion
  product = user as unknown as TProduct;
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check
  const data = {
    name: 'Joe Doe',
    age: 30,
    role: 'Developer',
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
  console.log(data + '');
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

  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(obj: T): T & { sayHello: string } {
    // + TODO: implement the method sayHello that returns a greeting string
    // + TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned
    return { ...obj, sayHello: `Hello ${obj.firstName} ${obj.lastName}` };
  }

  const person = addGreeting({
    firstName: 'Joe',
    lastName: 'Smith',
    age: 30,
    email: 'john@sample.com',
  });

  // + TODO: uncomment the following line and fix the error
  console.log(person.sayHello);
}
exercise37();

// Use experimental decorators
function exercise38() {
  // + TODO: implement decorator to print call count of the function
  function count(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    // + add params here
    // + TODO: implement decorator
    // + TODO: before calling the function increment callCount
    // + TODO: after calling the function print callCount
    let callCount = 0;
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      ++callCount;
      const result = originalMethod.apply(this, args);
      console.log(callCount);
      return result;
    };
  }
  // + TODO: implement decorator to print execution time of the function
  function time(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    // add params here
    // + TODO: before calling the function get current time
    // + TODO: after calling the function get current time
    // + TODO: print the difference between the two times after calling the function
    const current = Date.now();
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const afterCall = Date.now();
      console.log(afterCall - current);
      const result = originalMethod.apply(this, args);
      return result;
    };
  }

  class Calculation {
    // + TODO: add both decorators to the following method
    @count
    @time
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // + TODO: create instance of Calculation class and call add method
  const calc = new Calculation();
  console.log(Calculation.add(3, 2));
  console.log(Calculation.add(3, 2));
  console.log(Calculation.add(3, 2));
}
// exercise38(); // it is commented because causes mistake, when I use stage 3 decorators

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // + TODO: implement decorator to print call count of the function
  // + TODO: implement decorator to print execution time of the function
  function call(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext
  ) {
    let count = 0;
    function innerCallCount(this: any, ...args: any[]) {
      ++count;
      console.log(count);
      const result = originalMethod.call(this, ...args);
      return result;
    }
    return innerCallCount;
  }
  function time(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext
  ) {
    const currentTime = Date.now();
    function innerTime(this: any, ...args: any[]) {
      const result = originalMethod.call(this, ...args);
      const timeAfter = Date.now();
      console.log(timeAfter - currentTime);
      return result;
    }
    return innerTime;
  }
  class Calculation {
    // + TODO: add both decorators to the following method
    @call
    @time
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // + TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(2, 4));
  console.log(Calculation.add(2, 4));
}
exercise39();
