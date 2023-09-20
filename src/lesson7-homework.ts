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
    name: "Oleg",
    title: "Capitan",
    email: "zadrot@com.ua",
  };
  let product: TProduct = {
    title: "Gadjet",
    price: 250,
    quantity: 2,
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
    firstName: "Joe",
    lastName: "Doe",
    age: 30,
    role: "Developer",
    name: "",
  };
  // TODO: add this param annotation, to enforce that this function
  type TPerson = {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
    name: string;
  };
  // can only be called on an object with name, age and role properties
  function toString(this: TPerson) {
    this.name = `${this.firstName} ${this.lastName}`;
    // TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  // TODO: run the code and observe the error
  console.log(data + "");
  console.log(data.toString());
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
  function addGreeting<T extends IPerson>(obj: T): T & { sayHello(): string } {
    // TODO: implement the method sayHello that returns a greeting string
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned
    return {
      ...obj,
      sayHello() {
        return `Hello ${obj.firstName} ${obj.lastName}! You are welcome here!`;
      },
    };
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  });

  // TODO: uncomment the following line and fix the error
  console.log(person);
  console.log(person.sayHello());
}
exercise37();

// Use experimental decorators
function exercise38() {
  // TODO: implement decorator to print call count of the function
  function count(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // add params here
    let callCount = 0;
    // TODO: implement decorator
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      // TODO: before calling the function increment callCount
      callCount++;
      const result = originalMethod.apply(this, args);
      // TODO: after calling the function print callCount
      console.log("Method called times:", callCount);
      return result;
    };
  }
  // TODO: implement decorator to print execution time of the function
  function time(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // add params here
    // TODO: before calling the function get current time
    let currentTimeBefore = Date.now();
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
      const result = originalMethod.apply(this, args);
      // TODO: after calling the function get current time
      let currentTimeAfter = Date.now();
      // TODO: print the difference between the two times after calling the function
      console.log(`This function took: ${currentTimeAfter - currentTimeBefore} milliseconds`);
      return result;
    };
  }
  class Calculation {
    // TODO: add both decorators to the following method
    // @time
    // @count
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  // const calculation = new Calculation();
  console.log(Calculation.add(11343423, 234442352));
  console.log(Calculation.add(1354432432, 24345545656));
  console.log(Calculation.add(22325544324, 4445546576756));
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // TODO: implement decorator to print call count of the function
  function count(originalMethod: Function, _context: ClassMethodDecoratorContext) {
    // add params here
    let callCount = 0;
    function replacementCount(this: any, ...args: number[]) {
      callCount++;
      const result = originalMethod.apply(this, args);
      console.log("Method called times:", callCount);
      return result;
    }
    return replacementCount;
  }
  // TODO: implement decorator to print execution time of the function
  function time(originalMethod: Function, _context: ClassMethodDecoratorContext) {
    let currentTimeBefore = Date.now();
    function replacementTime(this: any, ...args: number[]) {
      const result = originalMethod.apply(this, args);
      let currentTimeAfter = Date.now();
      console.log(`This function took: ${currentTimeAfter - currentTimeBefore} milliseconds`);
      return result;
    }
    return replacementTime;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @count
    @time
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(11343423, 234442352));
  console.log(Calculation.add(1354432432, 24345545656));
  console.log(Calculation.add(22325544324, 4445546576756));
}
exercise39();
