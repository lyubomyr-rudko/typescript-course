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

  const user: TUser = {
    name: 'Maximus',
    title: 'engenear',
    email: 'test@tets.com',
  };
  let product: TProduct = {
    title: 'Becon',
    price: 10,
    quantity: 10,
  };

  // TODO: fix the error by adding double assertion
  product = user as unknown as TProduct;
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check
  const data = {
    name: 'Joe',
    lastName: 'Doe',
    age: 30,
    role: 'Developer',
  };
  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: { name: string; age: number; role: string }): string {
    // TODO: remove the following line
    //return '';
    // TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;

  console.log(toString.call(data)); // error
  console.log(data + '');
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }
  interface IPersonPowerful {
    age: number;
    email: string;
    sayHello: (this: IPerson) => string;
  }
  // // TODO: add generic constraints to enforce type checking, add return type annotation
  // function addGreeting<T>(obj: T) {
  //   // TODO: implement the method sayHello that returns a greeting string
  //   // TODO: in the function generate variable fullName = `${obj.firstName} ${obj.lastName}`;
  //   // TODO: use fullName variable to generate a greeting string, for example: "Hello Joe Smith"
  //   // TODO: make sure the obj is not modified, and new object is returned
  // }
  const sayHello = function (this: IPerson) {
    return `Hello ${this.firstName} ${this.lastName}`;
  };

  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(obj: T): T & IPersonPowerful {
    // TODO: implement the method sayHello that returns a greeting string
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned

    const preparedObj = {
      age: 10,
      email: 'test@test.com',
      ...obj,
      sayHello: sayHello.bind(obj),
    };
    return preparedObj;
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

//Use experimental decorators
function exercise38() {
  // TODO: implement decorator to print call count of the function
  function count() {
    let callCount = 0;
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        ++callCount;
        const res = originalMethod.apply(this, args);
        console.log(callCount);
        return res;
      };
    };
    // add params here

    // TODO: implement decorator
  }
  // TODO: before calling the function increment callCount
  // TODO: after calling the function print callCount

  // TODO: implement decorator to print execution time of the function
  function time() {
    // add params here
    // TODO: before calling the function get current time
    // TODO: after calling the function get current time
    // TODO: print the difference between the two times after calling the function
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        const before: number = new Date().getTime();
        const res = originalMethod.apply(this, args);
        const after: number = new Date().getTime();
        console.log('Time dif', after - before, 'ms');
        return res;
      };
    };
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @time()
    @count()
    static add(a: number, b: number) {
      let counter = 0;
      let res = 0;
      while (counter < 10000000) {
        res = res + a + b;
        ++counter;
      }
      return res;
    }
  }
  //const calculator = new Calculation();
  console.log(Calculation.add(10, 20));
  console.log(Calculation.add(10, 20));
  // TODO: create instance of Calculation class and call add method
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  function count(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext,
  ) {
    let callCount = 0;
    return function (this: any, ...args: number[]) {
      ++callCount;
      const result = originalMethod.call(this, ...args);
      console.log(callCount);
      return result;
    };
    console.log(callCount);
  }

  function time(
    originalMethod: Function,
    _context: ClassMethodDecoratorContext,
  ) {
    return function (this: any, ...args: number[]) {
      const before: number = new Date().getTime();
      const result = originalMethod.call(this, ...args);
      const after: number = new Date().getTime();
      console.log('Time dif', after - before, 'ms');
      return result;
    };
  }

  class Calculation {
    // TODO: add both decorators to the following method
    @time
    @count
    static add(a: number, b: number) {
      let counter = 0;
      let res = 0;
      while (counter < 10000000) {
        res = res + a + b;
        ++counter;
      }
      return res;
    }
  }
  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(10, 20));
  console.log(Calculation.add(10, 20));
}
exercise39();
