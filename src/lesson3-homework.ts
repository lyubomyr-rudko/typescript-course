// try different target compiler options
function excercise10() {
  // TODO: declare a Rectangle class, with width and height properties
  // TODO: add a constructor which takes width and height as parameters
  // TODO: add a method `getArea` which returns the area of the rectangle
  // TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
  // TODO: create an instance of the Rectangle class, with width 10 and height 20
  // TODO: call the method `getArea` and print the result to console
  // TODO: call the method `getPerimeter` and print the result to console
  // TODO: compile and run the code
  // TODO: change compiler target to ES5, complile and see the compiled code
  // TODO: change width and height properties to private, recomplile and
  // TODO: change compiler target to ES2015, complile and see the compiled code
  // TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
  // TODO: change compiler target to ESNext, complile and see the compiled code
  // TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
  console.log("\n---Exercise 10 start---\n")

  class Rectangle{
    #width:number
    #height:number

    constructor(width:number, height:number){
      this.#width = width
      this.#height = height
    }

    getArea():number{
      return this.#width * this.#height
    }

    getPerimeter():number{
      return (this.#width + this.#height) * 2
    }
  }

  const customRectangle = new Rectangle(10, 20)
  console.log("Area of the rectangle: ", customRectangle.getArea())
  console.log("Perimeter of the rectangle: ", customRectangle.getPerimeter())
  
  console.log("\n---Exercise 10 end---\n")
}
// TODO: compile and run the code
excercise10();

// create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
function excercise11() {
  // TODO: create a generic Stack class
  // TODO: add a private data property of type array of T
  // TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
  // TODO: add a pop method which removes and returns the item from the top of the stack
  // TODO: create an instance of the Stack class with number type
  // TODO: push two numbers to the stack
  // TODO: pop an item from the stack and print it to console, calling toFixed method on it
  // TODO: create an instance of the Stack class with string type
  // TODO: push two strings to the stack
  // TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
  console.log("\n---Exercise 11 start---\n")

  class Stack<T>{
    private data:T[]

    constructor(){
      this.data = []
    }

    push(element:T){
      this.data.unshift(element)
    }
    
    pop():T | undefined{
      return this.data.shift()
    }
  }

  const customNumbersStack = new Stack<number>()
  customNumbersStack.push(1)
  customNumbersStack.push(2)

  console.log("Resulted numbers stack object: ", customNumbersStack)
  console.log(`Pop top element from the stack. Result: ${customNumbersStack.pop()?.toFixed()}`)

  console.log("")

  const customStringsStack = new Stack<string>()
  customStringsStack.push("1Codo")
  customStringsStack.push("2Rodo")

  console.log("Resulted strings stack object: ", customStringsStack)
  console.log(`Pop top element from the stack. Result: ${customStringsStack.pop()?.toUpperCase()}`)

  console.log("\n---Exercise 11 end---\n")
}
// TODO: compile and run the code
excercise11();

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise12() {
  // TODO: create a function that takes an array of numbers and returns a random number from the array
  // TODO: create a function that takes an array of strings and returns a random string from the array
  // TODO: create a function that takes an array of objects and returns a random object from the array
  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array

  console.log("\n---Exercise 12 start---\n")
  //no, i won't create 3 similar functions :)
  function returnRandomItem<T>(data:T[]):T|undefined{
    if(data.length === 0) { return undefined }
    
    const targetIndex = Math.floor(Math.random() * data.length)
    return data[targetIndex]
  }

  const randomObjects:{name:string}[] = [{name:"Codo"}, {name:"Dodo"}, {name:"Rodo"}]
  const randomNumbers:number[] = [1,2,3]
  const randomStrings:string[] = ["Codo", "Dodo", "Rodo"]

  console.log("Random object: ", returnRandomItem(randomObjects))
  console.log("Random number: ", returnRandomItem(randomNumbers))
  console.log("Random string: ", returnRandomItem(randomStrings))

  console.log("\n---Exercise 12 start---\n")
}
// TODO: compile and run the code
excercise12();

// add type assertion to the code
function excercise13() {
  // NOTE: do not change this function
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge();
  // TODO: uncomment the following code and add type assertion to fix the error
  console.log(userAge as number + 1);
}
// TODO: compile and run the code
excercise13();

// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise14() {
  function fetchUserAge() {

    const responseText = '{"name": "John", "age": "9"}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge() as number;
  console.log(typeof userAge)
  // TODO: run the code below and observe the result, explain why it is happening,
  // TODO: add type casting to the function above, to fix the error
  if (userAge === 16) {
    console.log("Time to get your driver license");
  } else if (userAge > 16) {
    console.log("You are old enough to drive");
  } else {
    console.log("You are not old enough to drive");
  }
}
// TODO: compile and run the code
excercise14();

// add type safety to the code which uses any
function excercise15() {
  // TODO: declare a type for user object, which has a name property of type string
  type TUser = { name:string }
  // TODO: fix the fetchUsers function to return an array of users, not any type
  function fetchUsers():TUser[] {
    // TODO: add type safety to the data variable, annotate it with the type of users
    const data: TUser[] = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}'
    )?.users;

    // TODO: add check for the data type to contain list of users

    if(data?.length > 0 
      && typeof data === "object" 
      && Array.isArray(data) 
      && typeof data[0]?.name === "string" ){
      console.log("passed data validation in excercise15")
      return data
    } else{
      console.log("Unknown data in excercise15")
      return []
    }
  }
  // TODO: fix typings of the users variable (currently it is of type any)
  const users:TUser[] = fetchUsers()
  // TODO: add type safety to the code to print the names of the users to console
  users.forEach((user) => {
    if(typeof user?.name === "string"){
      console.log(user?.name)
    } else{
      console.log("printed data is not of TUser type: ", user?.name)
    }
  });
}
// TODO: compile and run the code
excercise15();

// use type declarations to fix the comments in the code
function excercise16() {
  // TODO: add code which uses process.env.NODE_ENV variable,
  // TODO: try to compile and see the error
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  // TODO: remove global.d.ts file, copile and see the error again
  // TODO: install type declarations from error message -  @types/node
  // NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
}
// TODO: compile and run the code
excercise16();
