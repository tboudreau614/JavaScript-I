// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => { 
    
}
console.log("Function was invoked!");

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (param) => {
    return param;
};
console.log(anotherFunction (2), anotherFunction (8))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (param1, param2) => {
    return param1 + param2;
};

console.log(add(25,15))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (param1, param2) => {
    return param1 - param2;
};

console.log (subtract(20,10))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);