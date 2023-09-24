// Use double assertion
function exercise35() {
  // TODO:Create two types: TUser and TProduct
  interface TUser {
    /* TODO: add definition for user name, title and email */
    name: string
    title: string
    email: string
  }
  interface TProduct {
    /* TODO: add definition for product title, price and quantity */
    title: string
    price: number
    quantity: number
  }

  let user: TUser = {
    name: 'John',
    title: 'junior',
    email: 'abc@gmail.com'
  };
  let product: TProduct = {
    title: 'Phone',
    price: 40,
    quantity: 100
  };

  // TODO: fix the error by adding double assertion
  product = user as unknown as TProduct
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check
  const data = {
    firstName: "Joe",
    lastName: "Doe",
    name: 'John',
    age: 30,
    role: "Developer",
  };
  // TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: {name: string, age: number, role: string}): string {
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
  function addGreeting<T extends IPerson>(obj: T): T & {sayHello(): string} {
    // TODO: implement the method sayHello that returns a greeting string
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned
   return {
     ...obj,
     sayHello(): string {
       return `Hello ${obj.firstName} ${obj .lastName}`
     }
   }
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
  function Count(
      target: any,
      methodName: string,
      descriptor: PropertyDescriptor
  ) {
    // add params here
    let callCount = 0;
    // TODO: implement decorator
    // TODO: before calling the function increment callCount
    // TODO: after calling the function print callCount
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any) {
      callCount += 1;
      const result = originalMethod.apply(this, args)
      console.log(callCount)
      return result
    }
  }
  // TODO: implement decorator to print execution time of the function
  function Time(
      target: any,
      methodName: string,
      descriptor: PropertyDescriptor
  ) {
    // add params here
    // TODO: before calling the function get current time
    // TODO: after calling the function get current time
    // TODO: print the difference between the two times after calling the function
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any) {
      const timeBeforeExecution = Date.now()
      const result = originalMethod.apply(this, args)
      const timeAfterExecution = Date.now()
      const timeDifference = timeAfterExecution - timeBeforeExecution
      console.log(timeDifference)
      return result
    }
  }

  class Calculation {
    // TODO: add both decorators to the following method
    // @Count
    // @Time
    add(a: number, b: number): number {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  const calc = new Calculation()

  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // TODO: implement decorator to print call count of the function
  // TODO: implement decorator to print execution time of the function
  function Count(
      originalMethod: Function,
      _context: ClassMemberDecoratorContext
  ) {
    let countCall: number = 0
    function decoratedMethod(this: any, ...args: any[]) {
      const result = originalMethod.apply(this, args)
      countCall += 1;
      console.log(countCall)
      return result
    }
    return decoratedMethod;
  }
  function Time(
      originalMethod: Function,
      _context: ClassMemberDecoratorContext
  ) {
    function decoratedMethod(this: any, ...args: any[]) {
      const timeBeforeExecution = Date.now()
      const result = originalMethod.apply(this, args)
      const timeAfterExecution = Date.now()
      const timeDifference = timeAfterExecution - timeBeforeExecution
      console.log(timeDifference)
      return result
    }
    return decoratedMethod;
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @Count
    @Time
    add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method

  const calc = new Calculation()
  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
  console.log(calc.add(2,2))
}
exercise39();
