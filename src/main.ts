function pow(value: number, exponent: number = 0) {
  return value ** exponent;
}

console.log(pow(10));

function printHello(): void {
  console.log('Hello!');
}

printHello();

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

function add1(a:number, b:number):number {
    return a + b
}
console.log(add1(1,2))

const add2 = (c:number, d:number):number => {
    return c+d
}
console.log(add2(1,2))

type AddFunction = (a: number, b: number) => number;
console.log(AddFunction(1,2))