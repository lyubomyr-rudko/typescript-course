function excercise1() {
    let greeting: string;
    greeting = "Hello World";
    console.log(greeting);
  }
  excercise1();
  
  function excercise2() {
    let greeting: string = "Hello";
    let number: number = 3;
    let count: number = 0;
    while (count < number) {
      console.log(greeting);
      count++;
    }
    //   number = greeting;
  }
  excercise2();
  
  function excercise3() {
    let n, m: number;
    n = 1;
    m = 10;
    //   n = 10;
    //   m = 1;
    let result: number[] = [];
    if (m > n) {
      for (let i = n; i <= m; i++) {
        result.push(i);
      }
    } else {
      for (let i = n; i >= m; i--) {
        result.push(i);
      }
    }
    console.log(result);
  }
  excercise3();
  
