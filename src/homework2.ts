// Create a function which uses tuple type to calculate the distance between two points in 2D space

function excercise4() {
    let point1:[number, number] = [1, 1]
    let point2:[number, number] = [4, 5]

    function distance(p1:[number, number], p2:[number, number]): number {
        const x1 = p1[0];
        const y1 = p1[1];
        const x2 = p2[0];
        const y2 = p2[1];

        const d:number = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        return d;
    }
    console.log(`Excercise4: distance = ${distance(point1, point2)}`);
}
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D 
// space - points are objects with x and y properties

function excercise5() {
    type TPoint = {
        x: number;
        y: number;
    }

    let point1:TPoint = {x:1, y:1};
    let point2:TPoint = {x:4, y:5};

    function distance(p1: TPoint, p2: TPoint): number {
        const x1 = p1.x;
        const y1 = p1.y;
        const x2 = p2.x;
        const y2 = p2.y;

        const d:number = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        return d;
    }
    console.log(`Excercise5: distance = ${distance(point1, point2)}`);
}
excercise5();

// Create functions that use const declarations
function excercise6() {
    const PI = 3.14;
    function circleArea(radius:number): number {
        const s:number = PI * (radius**2);
        return s;
    }
    console.log(`Excercise6: circle area = ${circleArea(10)}`);
    const person = {
        name: 'Bob',
        age: 18
    }
    function ageIncrease(pers:{name:string, age:number}) {
        pers.age ++;
    }
    ageIncrease(person);
    console.log(`Excercise6: Person name - ${person.name}, Persone age - ${person.age}`);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number
// and returns a new array with the results of function called on each element of the array

function excercise7() {
    function map(arr:number[], fn: (x:number) => number): number[] {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = fn(arr[i]);
        }
        return arr;
    }
    const myArray:number[] = [1, 2, 3];
    function doubles(x:number):number {
        return x * 2;
    }

    console.log(`Excercise7: my array = ${map(myArray, doubles)}`);
}
excercise7();

// declare a function which takes a user and prints greeting to console

function excercise8() {
    type TUser = {
        name: string;
    }
    const printGreeting = (user:any) => console.log(`Excercise8: Hello, ${user.name}!`);
    

    type TProduct = {
        name:string;
        price:number;
    }
    const product:TProduct = {
        name: 'productName', 
        price: 100
    }
    printGreeting(product)
    printGreeting({name:'someName'})
    printGreeting({name:'someName', age: 20})
}
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
    class Book {
        title:string;
        protected year:number;

        constructor (title:string, year:number) {
            this.title = title;
            this.year = year;
        }

        getInfo():string {
            return `Book: "${this.title}", year of publication: ${this.year}`;
        }
        
        getAge():string {
            const currentYear:number = new Date().getFullYear();
            return `The age of the book:  ${currentYear - this.year}`;
        }

        revise (newYear:number) {
            if (newYear <= new Date().getFullYear() && newYear >= this.year) {
                this.year = newYear;
            } else return 'Incorrect value!';
            return this.year;
        }
    }
    const myBook:Book = new Book('Big short', 2010);
    console.log(myBook.getInfo());
    //myBook.year = 2015;
    console.log(myBook.getInfo());
    console.log(myBook.getAge());
    console.log(`New year of the book: ${myBook.revise(2020)}`);
    console.log(`New year of the book: ${myBook.revise(2025)}`);
    console.log(`New year of the book: ${myBook.revise(2000)}`);
    
    class Magazine extends Book {
        month:string;
        day:number;

        constructor (title:string, year:number, month:string, day:number) {
            super(title, year);
            this.month = month;
            this.day = day;
        }

        getInfo(): string {
            return super.getInfo() + `, ${this.month}, ${this.day}`
        }
    }

    const magazine:Magazine = new Magazine('Forbs', 2022, 'June', 30)
    console.log(magazine.getInfo())
    console.log(magazine.getAge())
}
excercise9();