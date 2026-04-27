"use strict";
function pow(value, exponent = 0) {
    return Math.pow(value, exponent);
}
console.log(pow(10));
function printHello() {
    console.log('Hello!');
}
printHello();
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
function add1(a, b) {
    return a + b;
}
console.log(add1(1, 2));
const add2 = (c, d) => {
    return c + d;
};
console.log(add2(1, 2));
console.log(AddFunction(1, 2));
//# sourceMappingURL=main.js.map