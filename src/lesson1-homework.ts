function excercise1() {
  let greeting: string;
  greeting = "Hello World";
  console.log(greeting);
}
excercise1();

///////////////////////////////////////////

function excercise2() {
  let str: string;
  let numb: number;

  str = "Hello";
  numb = 3;

  let count = 0;

  while (count < numb) {
    count++;
    console.log(str);
  }
}
excercise2();

//////////////////////////////////////////////

function excercise3() {
  let n: number;
  let m: number;

  let result: Array<number> = [];

  n = 1;
  m = 10;

  if (m < n) {
    for (let i = m; i <= n; i++) {
      result.push(i);
    }
  } else {
    for (let i = n; i <= m; i++) {
      result.push(i);
    }
  }
  console.log(result);
}
excercise3();

///////////////////////////////////////////////////

function exercise4() {
  let one: [number, number] = [1, 1];
  let two: [number, number] = [4, 5];

  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  const res = distance(one, two);

  console.log(res);
}
exercise4();

/////////////////////////////////////////////////////////////////////

function exercise5() {
  type TPoint = { x: number; y: number };

  const one: TPoint = { x: 1, y: 1 };
  const two: TPoint = { x: 4, y: 5 };

  function distance(p1: TPoint, p2: TPoint): number {
    const { x: x1, y: y1 } = p1; // Destructuring assignment for point 1
    const { x: x2, y: y2 } = p2; // Destructuring assignment for point 2

    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  const result = distance(one, two);
  console.log(result);
}
excercise5();
