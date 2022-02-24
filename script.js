// A quick overview of new JavaScript features in ES2015, ES2016, ES2017, ES2018 and beyond.

// 01. let & const
// let The let keyword was introduced in ES6 (2015). Variables defined with let cannot be Redeclared. It must be Declared before use. Its have a Block Scope.

let a = 3;
if (true) {
  let a = 5;
  console.log(a); // prints 5
}
console.log(a); // prints 3

// const Constants work just like let, but can’t be reassigned.
const a = 50;
a = 20; // throws an error

// 02. Template string and Multiline string:
// Template string use back-ticks (``) rather than the quotes ("") to define a string. Its allows multiline, expressions and interpolate variables in strings.
const name = "Nazmul";
let price = 10;
let VAT = 0.25;

const str = ` 
hello
world
`; // Use multiline
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // Use expressions
const message = `Hello ${name}`; // Use Interpolation

// 03. Destructuring
// array
let [a, b] = [20, 27];
console.log(a); // 20
console.log(b); // 27
// Object
const obj = { a: 20, b: 27 };
const { a, b } = obj;
// Nested Objects
const person = {
  name: "John Snow",
  age: 29,
  sex: "male",
  materialStatus: "single",
  address: {
    country: "Westeros",
    state: "The Crownlands",
    city: "Kings Landing",
    pinCode: "500014",
  },
};

const {
  address: { state, pinCode },
  name,
} = person;

console.log(name, state, pinCode); // John Snow The Crownlands 500014
console.log(city); // ReferenceError

// 04. Optional chaining
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
const dogName = adventurer.dog?.name;
console.log(dogName); // expected output: undefined
console.log(adventurer.someNonExistentMethod?.()); // expected output: undefined

// 5. object property & function assignement
// property assignement
const a = 2;
const b = 5;
const obj = { a, b };
console.log(obj); // expected output: { a: 2, b: 5 }

// function assignement
const obj = {
  a: 10,
  b() {
    console.log("b");
  },
};
obj.b(); // expected output: "b"

// 06. spread & Rest operator

// #Array
let colors = ["red", "green", "blue"];
let rgb = [...colors];
console.log(rgb); // expected output: [ 'red', 'green', 'blue' ]

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // expected output: 6

// #Object
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
// add members obj1 and obj2  to obj3
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {x: 1, y: 2, z: 3}

// Rest
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

let func = function (...args) {
  console.log(args);
};
func(3); // [3]
func(4, 5, 6); // [4, 5, 6]

// 7. Exponent operator

const byte = 2 ** 4;
// Same as: Math.pow(2, 4)

// 08. Default Value & parameter

// Value
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores; // math === 22, sci === 33, arts === 50

// parameter
function print(a = 5) {
  console.log(a);
}
print(); // prints 5
print(22); // prints 22

// 09. arrow Function
// Implicit return
const sum = (a, b) => a + b;
console.log(sum(2, 6)); // prints 8

// no arguments
const birthday = () => "Happy Birthday";

// With one arguments
const birthday = (name) => {
  return "Happy Birthday," + name + "!";
};

// 10 Method:
