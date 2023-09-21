// Use double assertion
function exercise35() {
  console.log("\n-----Exercise 35 start-----\n")
  // TODO:Create two types: TUser and TProduct
  interface IUser {
    /* TODO: add definition for user name, title and email */
    name:string,
    title:string,
    email:string
  }
  interface IProduct {
    /* TODO: add definition for product title, price and quantity */
    title:string
    price:number
    quantity:number
  }

  let user: IUser = {
    name:"Steeve",
    title:"Hello",
    email:"steeveMaster3000@proton.me"
  };
  
  let product: IProduct = {
    title:"ProductTitle",
    price:99.99,
    quantity: 2
  };

  // TODO: fix the error by adding double assertion
  product = (user as unknown) as IProduct;

  console.log("Product after double assertion: ", product)

  console.log("\n-----Exercise 35 end-----\n")
}
exercise35();

// Use this parameter type annotation to fix the error in this code
function exercise36() {
  console.log("\n-----Exercise 36 start-----\n")
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

  function toString(this:TPerson):string {
    // TODO: remove the following line
    // TODO: uncomment the following line
    return `${this.name}, ${this.age}, ${this.role}`;
  }
  data.toString = toString;
  // TODO: run the code and observe the error
  //у меня результат был "{ undefined, 30, Developer }", но error'a или краша программы небыло  
  console.log(data + "");
  console.log(data.toString());
  // TODO: add required properties to the data object, fixing the error
  console.log("\n-----Exercise 36 end-----\n")
}
exercise36();

// Use generic constraints
function exercise37() {
  console.log("\n-----Exercise 37 start-----\n")
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  // TODO: add generic constraints to enforce type checking, add return type annotation
  function addGreeting<T extends IPerson>(obj: T): T & { greeting:string } {
    // TODO: implement the method sayHello that returns a greeting string
    function sayHello():string{
      return `Hello ${obj.firstName} ${obj.lastName}`
    }
    // TODO: use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
    // TODO: make sure the obj is not modified, and new object is returned
    return { greeting: sayHello(), ...obj }
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  });

  // TODO: uncomment the following line and fix the error
  console.log(person.greeting);
  console.log("\n-----Exercise 37 end-----\n")
}
exercise37();

// Use experimental decorators
function exercise38() {
  console.log("\n-----Exercise 38 start-----\n")
  // TODO: implement decorator to print call count of the function
  function count(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
    // add params here
    let callCount = 0;
    const originalMethod = descriptor.value
    // TODO: implement decorator
    // TODO: before calling the function increment callCount
    // TODO: after calling the function print callCount
    descriptor.value = function(...args:any[]){
      callCount++
      const result = originalMethod.apply(this, args)
      console.log("decorated function called")
      console.log("CallCount: ", callCount)
      return result
    }
    return descriptor
  }
  // TODO: implement decorator to print execution time of the function
  function time(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
    // add params here
    const originalMethod = descriptor.value
    // TODO: before calling the function get current time
    // TODO: after calling the function get current time
    // TODO: print the difference between the two times after calling the function
    
    descriptor.value = function(...args:any[]){
      const startTime = performance.now()
      const result = originalMethod.apply(this, args)
      const endTime = performance.now()

      console.log(`Method Execution Time: ${(endTime-startTime).toFixed(4)} milliseconds`)
      return result
    }

    return descriptor
  }

  class Calculation {
    // TODO: add both decorators to the following method
    // @count
    // @time
    static add(a: number, b: number) {
      return a + b;
    }
  }

  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(5,5))
  console.log(Calculation.add(5,6))
  console.log(Calculation.add(5,7))
  console.log(Calculation.add(5,8))
  console.log(Calculation.add(5,9))

  console.log("\n-----Exercise 38 end-----\n")
}
exercise38();

// Use 2023 decorators (Stage 3 decorator)
function exercise39() {
  console.log("\n-----Exercise 39 start-----\n")
  // TODO: implement decorator to print call count of the function
  function call(originalMethod: any, _context: any){
    let callCount = 0
    
    return function(this:any, ...args:any[]){
      callCount++
      const result = originalMethod.call(this, ...args)
      console.log("decorated function called")
      console.log("CallCount: ", callCount)
      return result
    }
  }
  // TODO: implement decorator to print execution time of the function
  function time(originalMethod: any, _context:any){
    return function(this:any, ...args:any[]){
      const startTime = performance.now()
      const result = originalMethod.call(this, ...args)
      const endTime = performance.now()

      console.log(`Method Execution Time: ${(endTime-startTime).toFixed(4)} milliseconds`)
      return result
    }
  }
  class Calculation {
    // TODO: add both decorators to the following method
    @time
    @call
    static add(a: number, b: number) {
      return a + b;
    }
  }
  // TODO: create instance of Calculation class and call add method
  console.log(Calculation.add(5,10))
  console.log(Calculation.add(5,11))
  console.log(Calculation.add(5,12))
  console.log(Calculation.add(5,13))
  console.log(Calculation.add(5,14))

  console.log("\n-----Exercise 39 end-----\n")
}
exercise39();
