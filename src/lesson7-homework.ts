// Use double assertion
function exercise35() {
  // +TODO:Create two types: TUser and TProduct
  interface IUser {
    name: string;
    title: string;
    email: string;
    /* +TODO: add definition for user name, title and email */
  }
  interface IProduct {
    title: string;
    price: number;
    quantity: number;
    /* + TODO: add definition for product title, price and quantity */
  }

  let user: IUser = { name: 'aaa', title: 'bbb', email: 'aa@aa.com' };
  let product: IProduct = { title: 'aaa', price: 4, quantity: 5 };

  // + TODO: fix the error by adding double assertion
  product = user as unknown as IProduct;
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  // Note: this object does not have a name property
  // but the toString function expects it to be there, and there is no type check

  interface IData {
    firstName: string,
    lastName: string,
    age: number,
    role: string,
    name: string
  }

  const data: IData = {
    firstName: "Joe",
    lastName: "Doe",
    age: 30,
    role: "Developer",
    name: "Sehii"
  };

  // + TODO: add this param annotation, to enforce that this function
  // can only be called on an object with name, age and role properties
  function toString(this: IData): string {
    // TODO: remove the following line
    // TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;

  }
  data.toString = toString;
  // +TODO: run the code and observe the error
  console.log(data + "");
  console.log(data.toString());
  // +TODO: add required properties to the data object, fixing the error
  console.log(toString.call(data));
}
exercise36();

// Use generic constraints
function exercise37() {
  interface IPerson {
    firstName: string;
    lastName: string;
  }
  // TODO: + add generic constraints to enforce type checking, add return type annotation

  function addGreeting<T extends IPerson>(obj: T) {
    function sayHello() {
      const fullName = `${(obj as T).firstName} ${(obj as T).lastName}`;
      return `Hello ${fullName}`;
    }
    return { sayHello, ...obj }
    // TODO: +implement the method sayHello that returns a greeting string
    // TODO: +use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: +make sure the obj is not modified, and new object is returned
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  });
  // TODO: +uncomment the following line and fix the error

  console.log(person.sayHello());
}
exercise37();

// Use experimental decorators
function exercise38() {
  // TODO: implement decorator to print call count of the function
  function Сount(target: Object, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor) {
    // +add params here
    let callCount = 0;
    let originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      callCount++;
      console.log(`Function called ${callCount} times.`);
      return originalMethod.apply(this, args);
    }
    return propertyDescriptor;
    // TODO: +implement decorator
    // TODO: +before calling the function increment callCount
    // TODO: +after calling the function print callCount
  }
  // TODO: +implement decorator to print execution time of the function
  function Time(target: Object, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor) {
    let originalMethod = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
      const before: number = Date.now();
      const result = originalMethod.call(this, ...args);
      const after: number = Date.now();
      const diff = after - before;
      console.log('Time dif', diff);
      return result;
    }
    return propertyDescriptor;
    // add params here
    // TODO: +before calling the function get current time
    // TODO: after calling the function get current time
    // TODO: +print the difference between the two times after calling the function
  }

  class Calculation {
    // +TODO: add both decorators to the following method
    @Сount
    @Time
    public add(a: number, b: number) {
      console.log('Inside func')
      return a + b;
    }
  }
  const calculation = new Calculation();
  console.log(calculation.add(1, 2))
  console.log(calculation.add(2, 2))
  console.log(calculation.add(2, 3))
  // +TODO: create instance of Calculation class and call add method
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  // TODO: + implement decorator to print call count of the function
  function Count(value: Function, _context: ClassMethodDecoratorContext) {
    let callCount = 0;
    return function (this: any, ...args: number[]) {
      callCount++;
      const result = value.apply(this, args);
      console.log(`Function called ${callCount} times.`);
      return result;
    };
  }

  function Time(value: Function, _context: ClassMethodDecoratorContext) {

    return function (this: any, ...args: number[]) {
      const before: number = Date.now();
      const result = value.apply(this, args);
      const after: number = Date.now();
      const diff = after - before;
      console.log('Time dif', diff);
      return result;
    }

  }
  // TODO: +implement decorator to print execution time of the function
  class Calculation {
    // TODO: +add both decorators to the following method
    @Count
    @Time
    public add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: + create instance of Calculation class and call add method
  const calculation = new Calculation();
  console.log(calculation.add(1, 0));
  console.log(calculation.add(1, 1));
  console.log(calculation.add(1, 2));
  console.log(calculation.add(2, 2));
}
exercise39();
