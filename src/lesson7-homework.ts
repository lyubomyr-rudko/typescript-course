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
    quality: string;
  }

  let user: TUser = {name: 'John', title: 'Marketing', email: 'john123@gmail.com'};
  let product: TProduct = {title: 'Book', price: 100, quality: 'high'};

  // TODO: fix the error by adding double assertion
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
  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  type TPerson = {
      name: string;
      age: number;
      role: string;
  };

  function toString(this: TPerson) {
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
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(obj: T): T & { sayHello: () => string  }{
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
  function count(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // add params here
    let callCount = 0;
    // TODO: implement decorator
    // TODO: before calling the function increment callCount
    // TODO: after calling the function print callCount
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      callCount++;
      console.log(`Function ${propertyKey} has been called ${callCount} times.`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }

  // TODO: implement decorator to print execution time of the function
  function time(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // add params here
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
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

  class Calculation {
    // TODO: add both decorators to the following method
    @count
    @time
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calc = new Calculation();

  calc.add(5, 10);
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // TODO: implement decorator to print call count of the function
  function count(
      originalMethod: Function,
      _context: ClassMethodDecoratorContext
    ) {
    let callCount = 0;
    function replacementMethod(this: any, ...args: any[]) {
      callCount++;
      console.log(`Function has been called ${callCount} times.`);
      return originalMethod.call(this, ...args);
    }
      return replacementMethod;
    }
  // TODO: implement decorator to print execution time of the function
  function time(
      originalMethod: Function,
      _context: ClassMethodDecoratorContext
    ) {
    function replacementMethod(this: any, ...args: any[]) {
      const start = performance.now(); 
      const result = originalMethod.call(this, ...args);
      const end = performance.now(); 
      console.log(`Function took ${end - start} milliseconds to execute.`);
      return result;
    }
    return replacementMethod;
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
  const calc = new Calculation();
  calc.add(5, 10);
}
exercise39();
