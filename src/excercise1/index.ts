// 1. Heloo World task
function excercise1() {
  let greeting: string;
  greeting = "Hello World";
  console.log(greeting);
}
excercise1();

// 2. loop which prints string to console n times
function excercise2() {
    let stringVar: string = 'Hello';
    let numberVar: number = 3;
    
    let i = 0;
    while (i < 3) {
        console.log(stringVar);
        i++
    }
}
excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
    let n: number;
    let m: number;
    let result: number[] = [];
    n = 1;
    m = 10;
    for (let i = 1; i <= 10; i++) {
        if (m < n) {
            result.unshift(i)
        } else {
            result.push(i);
        }
    }
    return result;
}
excercise3();
