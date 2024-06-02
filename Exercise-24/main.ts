/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


// Tests for equality and inequality with strings
let string1: string = "hello";
let string2: string = "world";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
let lowercaseString1: string = "hello";
let lowercaseString2: string = "HELLO";

console.log(lowercaseString1.toLowerCase() === lowercaseString2.toLowerCase()); // True
console.log(lowercaseString1.toLowerCase() !== lowercaseString2.toLowerCase()); // False

// Numerical tests
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log(x < y && y < z); // True (Both conditions are true)
console.log(x < y || y > z); // True (one condition is true)

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];

console.log(fruits.includes("apple")); // True
console.log(fruits.includes("grape")); // False

// Test whether an item is not in an array
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("apple")); // False
