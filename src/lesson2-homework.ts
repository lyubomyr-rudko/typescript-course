// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type CustomTuple = [number, number]
  let point1:CustomTuple
  let point2:CustomTuple

  point1 = [1,1]
  point2 = [4,5]

  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0] 
    const y1 = p1[1] 
    const x2 = p2[0] 
    const y2 = p2[1] 

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  console.log(`Exercise4 - Distance between point1[x:${point1[0]},y:${point1[1]}] and point2[x:${point2[0]},y:${point2[1]}] = ${distance(point1, point2)}\n`)
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = {x:number, y:number}
  const point1:TPoint = {x:1, y:1}
  const point2:TPoint = {x:4, y:5}

  function distance(p1: TPoint, p2: TPoint): number {
    const { x:x1, y:y1 } = p1
    const { x:x2, y:y2 } = p2

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }
  
  console.log(`Exercise5 - Distance between point1[x:${point1.x},y:${point1.y}] and point2[x:${point2.x},y:${point2.y}] = ${distance(point1, point2)}\n`)
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  // TODO: call the function and print the result to console
  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  // TODO: call the function and print the person object to console

  const PI = 3.14
  function calculateCircleArea(radius:number):number{
      return PI * Math.pow(radius, 2)
  }

  const customRadiusMM = 6
  console.log(`Exercise6 - circle area with radius of ${customRadiusMM} ${calculateCircleArea(customRadiusMM)}`)

  // TODO: check the type of PI variable
  // it's 3.14

  type TPerson = {name:string, age:number}
  const customPerson:TPerson = {name:"John", age:23}
  function makePersonOlder(person:TPerson){
      person.age++
  }
  makePersonOlder(customPerson)
  console.log("Exercise6 - customPerson result: ", customPerson)
  console.log("")
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  // function map(arr, fn) {
  // TODO: add logic here
  // TODO: use regular for loop
  // return [];
  // }
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console

  type TChangeNumber = (x:number)=>number
  function customMap(numbersArray:number[], func:(x:number)=>number):number[]{
      for(let index = 0; index < numbersArray.length; index++){
          numbersArray[index] = func(numbersArray[index])
      }

      return numbersArray
  }

  const customArray:number[] = [1,2,3,4,5,6,7,8,9]
  const doubleNumber:TChangeNumber = (x)=>x*2
  const newNumbersArray:number[] = customMap(customArray, doubleNumber) 
  
  console.log("Exercise7 - resulted array: ", newNumbersArray)
  console.log("")
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  // TODO: create a type for product, with name property and price property
  // TODO: create a product object, asign it some object literal
  // TODO: call the function with product as a parameter
  // TODO: call the function with object literal as a parameter
  // TODO: try adding extra property to the object literal - observe the error
  // TODO: fix the error with type assertion

  console.log("Exercise8")
    type TPerson = {name:string}

    function printGreeting(person:TPerson):void{
        console.log(`Hello ${person.name}`)
    }

    type TProduct = {name:string, price:number}
    const customProduct:TProduct = {name: "CD disk", price:10}
    printGreeting(customProduct)
    printGreeting({name:"Mayor"})
    //object literal may only specify known params
    printGreeting({name:"Mayor", role:"Town Power"} as TPerson)

    console.log("")
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // TODO: constructor should take three parameters - title and year of publication
  // TODO: method `getInfo` should return the book title and year as a string
  // TODO: create a book object and call the method `getInfo`, print the result to console
  // TODO: assign a new value to the year property
  // TODO: call the method `getInfo` again
  // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // TODO: call the method `getAge` and print the result to console
  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // TODO: call the method `revise` and pass a new year as a parameter
  // TODO: add private modifier to the year property
  // TODO: try to access the year property from outside of the class - observe the error
  // TODO: change protected modifier to the year property, remove private modifier
  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log("Exercise9")
  class Book{
    public title:string
    pubYear:number

    constructor(title:string, pubYear:number){
        this.title = title
        this.pubYear = pubYear
    }

    public getInfo():string{
        return `title: ${this.title}, pubYear: ${this.pubYear}`
    }

    public getAge(){
        return new Date().getFullYear() - this.pubYear
    }

    public revise(newPubYear:number){
        const currentYear = new Date().getFullYear()

        if(currentYear-1 >= newPubYear){
            this.pubYear = newPubYear
        } else{
            console.log("Invalid Year: ", newPubYear)
        }
    }
  }

  const fantasyBook = new Book("Fantasy", 1994)
  console.log(`Books info - ${fantasyBook.getInfo()}`)

  fantasyBook.revise(2021)

  console.log(`Books info - ${fantasyBook.getInfo()}`)

  console.log(`Books age - ${fantasyBook.getAge()}`)

  fantasyBook.revise(2022)

  class Magazine extends Book{
    public month: string
    public day: number

    constructor(title:string, pubYear:number, month:string, day:number){
        super(title, pubYear)

        this.month = month,
        this.day = day
    }

    public getInfo(): string {
        return super.getInfo() +`, month: ${this.month}, day: ${this.day}`
    }
  }
  
  const horrorMagazine = new Magazine("Horror", 2020, "random month", 5)
  console.log(`Magazine info - ${horrorMagazine.getInfo()}`)
}
// TODO: compile and run the code
excercise9();
