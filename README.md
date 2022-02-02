# JavaScript Short Note

- ### Variable

- ### Variable Data Types: Number, String, Boolean, Null and Undefined.

- ### Type Conversion

  - #### Number Conversion: Number().

    - Number(" 123 "); // 123
    - Number("123z"); // NaN (error reading a number at "z")
    - Number(true); // 1
    - Number(false) ); // 0
    - Number(undefined) // NaN
    - Number(null) // 0
    - Decimal Number to Integer Number: parseInt()
    - Integer Number to Decimal Number: parseFloat()

  - #### String Conversion: String() or toString()

    - String(true); // now true is a string "true"
    - String(x) // returns a string from a number variable x
    - String(123) // returns a string from a number literal 123
    - String(100 + 23) // returns a string from a number from an expression

  - #### Boolean Conversion: Boolean()

    - Boolean(1)); // true
    - Boolean(0); // false
    - Boolean("0"); // true
    - Boolean("hello"); // true
    - Boolean(""); // false
    - Boolean(" "); // spaces, also true (any non-empty string is true)

- ### False Values “”, 0, null, undefined, NaN.

- ### JavaScript Operators

> Assignment operators, Comparison operators, Arithmetic operators, Logical operators, Bitwise operators, String operators, Conditional (ternary) operators, Comma operators, Unary operators, Relational operators.

1. Assignment Operators : =, +=, -=, \_=, /=, %=, \*\*=, <<=, >>=, >>>=, &=, ^=, |=, &&=, ||=, ??=
1. Comparison Operators: ==, !=, ===, !==, >, >=, <, <=.
1. Arithmetic Operators %, ++, --, -, +, \*\*.
1. Conditional & Logical Operators: if, else, else if, switch, &&, ||, !.
1. Bitwise operators: &, |, ^, ~, <<, >>, >>>.
1. String operators:
1. Conditional (ternary) operators: condition ? val1 : val2
1. Comma operators: ,
1. Unary operators: delete.
1. Relational operators: in.

- ### Statements: Block, break, continue, Empty, if...else, switch, throw, try...catch.
- ### Declarations: var, let, const.
- ### Functions and classes: function, function\*, async function, return, class.
- ### Iterations: for, for...in, for..of, for await...of, while, do...while.
- ### Work with Math:
  > Math.abs(n), Math.floor(n), Math.ceil(n), Math.round(n), Math.max(), Math.min(), Math.pow(2, 3), Math.sqrt(9), Math.random(),Math.round()
- ### Work with Date:
  > new Date(), date.toDateString(), date.toTimeString(), date.toLocaleString(), date.toLocaleDateString(), date.toLocaleTimeString(), date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()
- ### Comments: Single line comment, Multi-line comment.

- ### Work with String:

  > String Literals, String Constructor, Escape Notation, String Comparison, string Conversion, Concat string (concat()), slice a string (substr()), get value of string index (charAt()), check start string (startsWith("")), check end string(endsWith("")), Upper case(toUpperCase()), Lower case(toLowerCase()), ignore unnecessary space(trim()), split and create array(split(" ")), str.length.

- ### Work with Array:

  > array literal, Array Constructor, Accessing Array Elements width (.) notation or array notation, Change array Elements, Check length, add elements in ending position, add elements in starting position, add elements in specific position, Remove elements from ending position, Remove elements from starting position, Remove elements in specific position, reverse array, array traversing.

- ### Array Method:

  > join(), fill(), concat(), Array.isArray(), Array.from().

- ### Work with Object:

  > Object Literal, Object Constructor, Accessing Object Properties width (.) notation or array notation, update/Change object value, add object property, Remove/Delete Object Properties, Comparing Two Objects by converting, Iterate Object Properties(‘x’ in obj), for in loop.

- ### Objects Method:

  > Objects.keys(), Objects.values(), Objects.entries(), Objects.assign({}, obj),. > Function: Input-Output-Processing, define a Function, Invoke/Call a function, Arguments, parameters, sum of array, use of arguments Objects, Return, function expression, inner function, Function Scope.

- ### Functional Programming:
  > Pure Function, First Class Function, Higher Order Function, Callback Function, forEach, map, Filter, reduce, find, findIndex, Sort, Some, Every, return, Recursive , Currying.

## JavaScript ES6

- Arrow function, Default parameters, Let scope, Const, Multiline string, Template strings, String includes (), String starts With (), String repeat (), Destructuring array, Destructuring object, Object property assignment, Object function assignment, Object. Assign (), Object. Entries (), Spread & Rest operator, Destructuring Nested Objects, Exponent operator, For of loop, Set & Map, Set Methods, Map Methods,

#### CheckList:

1.  Get the total, largest, smallest, odd & even number.
2.  get the total, largest, smallest, odd & even number with a loop.
3.  Array traversing with for, while & forEach loop.
4.  get total, largest, smallest, odd & even of array elements.
5.  get total, largest, smallest, odd & even of objects elements.
6.  Create a new array with many arrays, 08. Create & Traversing Multidimensional array.

# [Problem Solving Question & Solution](https://github.com/dev-nazmulislam/javaScript-problem-solving)

1. Print in Console numbers from 1 to 10
2. Print in Console the odd numbers less than 100
3. Print in Console the multiplication table with 7
4. Calculate the sum of numbers from 1 to 10
5. Calculate 10!
6. Calculate the sum of odd numbers greater than 10 and less than 30
7. Calculate the sum of numbers in an array of numbers
8. Calculate the average of the numbers in an array of numbers
9. Find the maximum number in an array of numbers
10. Create a function that receives an array of numbers and returns an array containing only the positive numbers
11. Print in Console all the multiplication tables with numbers from 1 to 10
12. Create a function that will convert from Celsius to Fahrenheit
13. Create a function that will convert from Fahrenheit to Celsius
14. Print in Console the first 10 Fibonacci numbers without recursion
15. Create a function that will find the nth Fibonacci number using recursion
16. Check Leap Year Using if...else?
17. Create a function that accepts an array and returns the last item in the array.
18. Calculate the sum of digits of a positive integer number
19. Print in Console the first 100 prime numbers
20. Check Odd or Even Number with Arguments Objects
21. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
22. Rotate an array to the left 1 position
23. Reverse an array with createed function, don`t Change orginal array #24: Reverse an array with JavaScript Builtin Method
24. Reverse a string with JavaScript Builtin Method
25. Reverse a string with createed function, don`t Change orginal string
26. Create a function that takes an array and returns the types of values (data types) in a new array.
27. Create a function that will return in an array. becarefull function parameter and array length is same in count.
28. Create a function that takes the age in years and returns the age in days.
29. Create a function that takes voltage and current and returns the calculated power.
30. Given two numbers, return true if the sum of both numbers is less than 50. Otherwise return false.
31. Write a function that takes minutes and converts it to seconds.
32. Write a function that converts hours into seconds.
33. Create a function that takes an array containing only numbers and return the first element.
34. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
35. Write a function that takes the base and height of a triangle and return its area.
36. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
37. Create a function that takes a base number and an exponent number and returns the calculation.
38. Create a function that takes two numbers as arguments and return their sum.
39. Create a function that will merge two arrays and return the result as a new array
40. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
