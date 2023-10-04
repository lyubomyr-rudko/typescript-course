// string manipulation utilities type
function exercise52() {
  // TODO: write a utility type that for given object type T
  // will create a new type with all properties plus methods to get and set properties
  // plus methods to validate each of the property
  type TObjectWitName = {
    name: string
  };
  // TODO: declare utility type TGettersSettersValidators (intersection of TGetters, TSetters, TValidators)
  // hint: TGetters for each of the property generates getXxxx method that returns property value
  type TGetters<T> = {
    [K in keyof T as `get${Capitalize<string&K>}`]:()=>T[K]
  }
  // hint: TSetters for each of the property generates setXxxx method that sets property value
  type TSetters<T> = {
    [K in keyof T as `set${Capitalize<string&K>}`]:(value:T[K])=>void
  }
  // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
  type TValidators<T> = {
    [K in keyof T as `validate${Capitalize<string&K>}`]:()=>boolean
  }

  const obj = {
    name: "point",
  };

  // TODO: generate this type from TGettersSettersValidators using utility type
  type TGettersSettersValidators<T> = TGetters<T> & TSetters<T> & TValidators<T>
  type TObjectMethods = TGettersSettersValidators<typeof obj>;
  // TODO: remove this declaration below and replace it with the one above
  // type TObjectMethods = {
  //   getName(): string;
  //   setName(name: string): void;
  //   validateName(): boolean;
  // };

  const object: TObjectWitName & TObjectMethods = {
    name: "point",
    getName():string {
      return this.name
    },
    setName() {
      this.name = "name";
    },
    validateName():boolean {
      return this.name.length > 0;
    },
  };

  // TODO: add property age to object and check if you get type check errors
}
exercise52();

// enums
function exercise53() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assign Red: 1, Green: 2, Blue: 4
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
  }


  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  function getColor(color: number): string {
    let result = "";
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if(color & Color.Red){
      result += (result == "" ? "Red" : ", Red")
    }
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if(color & Color.Green){
      result += (result == "" ? "Green" : ", Green")
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if(color & Color.Blue){
      result += (result == "" ? "Blue" : ", Blue")
    }
    // TODO: explain how bitmask works
    // Мы сравниваем 2 числа в бинарной системе и возвращаем значение где единицы совпали. Пример:
    // 1      = 0001
    // 15     = 1111
    // 1 & 15 = 0001 (результат равен 1)

    console.log("result: ", result)
    return result ? result : "(empty string, no color)"
  }

  // TODO: add test assertions using this table
  console.log(getColor(0) === "(empty string, no color)") //, bitmask ( 0 0 0 )
  console.log(getColor(1) === "Red") // bitmask ( 0 0 1 )
  console.log(getColor(2) === "Green") // bitmask ( 0 1 0 )
  console.log(getColor(3) === "Red, Green") // bitmask ( 0 1 1 )
  console.log(getColor(4) === "Blue") //bitmask ( 1 0 0 )
  console.log(getColor(5) === "Red, Blue") // bitmask ( 1 0 1 )
  console.log(getColor(6) === "Green, Blue") // bitmask   ( 1 1 0 )
  console.log(getColor(7) === "Red, Green, Blue") // bitmask ( 1 1 1 )
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra1() {
  // TODO: create a function to determine if two strings are an anagram
  // HINT: A word is an anagram of another if you can rearrange its characters to produce the second word.
  type TCharsDictionary = {
    [key:string]:number
  }
  

  function getCharsDictionary(str: string): TCharsDictionary {
    const preparedString = str.toLocaleLowerCase()
    const charsDictionary:TCharsDictionary = {}

    for(let i = 0; i<preparedString.length; i++){
      if(!charsDictionary[preparedString[i]]){
        charsDictionary[preparedString[i]] = 1
      } else{
        charsDictionary[preparedString[i]]++
      }
    }

    return charsDictionary;
  }

  function areAnagrams(s1: string, s2: string): boolean {
    const charDict1:TCharsDictionary = getCharsDictionary(s1)
    const charDict2:TCharsDictionary = getCharsDictionary(s2)

    console.log(charDict1)
    console.log(charDict2)

    if(Object.keys(charDict1).length !== Object.keys(charDict2).length){
      return false
    }
    
    for(let key1 in charDict1){
      const value1 = charDict1[key1]
      const value2 = charDict2[key1]

      if(value1 !== value2){
        return false
      }
    }

    return true;
  }
  console.assert(areAnagrams("listen", "silent") === true);
  console.assert(areAnagrams("abc", "cba") === true);
  console.assert(areAnagrams("abc", "cbd") === false);

  // HINT: consider exercise33 for code reuse ideas
}
exerciseExtra1();


// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra2() {
  /**
   * Write a program that prints the integers from 1 to 100 (inclusive).
   * But:
   *  - for multiples of three, print Fizz (instead of the number)
   *  - for multiples of five, print Buzz (instead of the number)
   *  - for multiples of both three and five, print FizzBuzz (instead of the number)
   */

  function fizzBuzz() { 
    // TODO: add your code here
    const iterations = 100

    for(let i = 1; i < iterations+1; i++){
      let result = ""

      if(i%3 === 0){
        result += "Fizz"
      }
      
      if(i % 5 === 0){
        result += "Buzz"
      } 

      console.log(result ? result : i)
    }

  }
  fizzBuzz();
  /**
   * 1
   * 2
   * Fizz
   * 4
   * Buzz
   * ...
   */

  // TODO: convert fizzBuzz function to return a string output instead of printing to console
  function fizzBuzzToString():string {
    // TODO: add your code here
    const iterations = 100
    let result = ""

    for(let i = 1; i < iterations+1; i++){

      if(i%3 === 0){
        result += "Fizz"
      }
      
      if(i % 5 === 0){
        result += "Buzz"
      } 

      if(i%3 !== 0 && i%5 !== 0){
        result += i
      }
      result +="\n"
    }

    return result
  }
  console.log(fizzBuzzToString());
  // TODO: write a test to validate fizzBuzz output using console.assert
  const correctAnswer = `1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
  16
  17
  Fizz
  19
  Buzz
  Fizz
  22
  23
  Fizz
  Buzz
  26
  Fizz
  28
  29
  FizzBuzz
  31
  32
  Fizz
  34
  Buzz
  Fizz
  37
  38
  Fizz
  Buzz
  41
  Fizz
  43
  44
  FizzBuzz
  46
  47
  Fizz
  49
  Buzz
  Fizz
  52
  53
  Fizz
  Buzz
  56
  Fizz
  58
  59
  FizzBuzz
  61
  62
  Fizz
  64
  Buzz
  Fizz
  67
  68
  Fizz
  Buzz
  71
  Fizz
  73
  74
  FizzBuzz
  76
  77
  Fizz
  79
  Buzz
  Fizz
  82
  83
  Fizz
  Buzz
  86
  Fizz
  88
  89
  FizzBuzz
  91
  92
  Fizz
  94
  Buzz
  Fizz
  97
  98
  Fizz
  Buzz
  `

  
  console.assert(fizzBuzzToString().trim === correctAnswer.trim);
}
exerciseExtra2();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
  function convertStringArrToIntArr(arr:string[]|number[]):number[]{
    return arr.map((item)=>{return Number(item)})
  }
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  function mergeSortedArrays<T extends string[] | number[]>(arr1: T, arr2: T): number[] {
    const result:number[] = []


    const arr1Copy:number[] = [...convertStringArrToIntArr(arr1)]
    const arr2Copy:number[] = [...convertStringArrToIntArr(arr2)]

    while(arr1Copy.length>0 || arr2Copy.length > 0){
      const minNumberArr1 = Math.min(...arr1Copy)
      const minNumberArr2 = Math.min(...arr2Copy)
      
      if(minNumberArr1 <= minNumberArr2){
        const extractedNumberIndex:number = arr1Copy.findIndex((num)=>{ return num === minNumberArr1})
        const extractedNumber:number = arr1Copy.splice(extractedNumberIndex, extractedNumberIndex+1)[0]

        console.log(extractedNumber)
        result.push(extractedNumber)
      } else if(minNumberArr1 >= minNumberArr2){
        const extractedNumberIndex:number = arr2Copy.findIndex((num)=>{ return num === minNumberArr2})
        const extractedNumber:number = arr2Copy.splice(extractedNumberIndex, extractedNumberIndex+1)[0]
        
        console.log(extractedNumber)
        result.push(extractedNumber)
      }
    }

    return result
  }
  console.log(mergeSortedArrays([3, 4, 5], [4, 5, 6]))
  console.log(mergeSortedArrays(["4", "5", "5"], ["4", "1", "6"]))
  console.assert(
    mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
      [1, 2, 3, 4, 5, 6].toString()
  );

  console.assert(
    mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6].toString()
  );
  console.assert(
    mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
  );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtra3();