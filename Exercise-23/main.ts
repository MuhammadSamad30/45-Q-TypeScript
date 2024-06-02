/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let myCar: string = 'subaru';

// Tests 1 
console.log("Is car == 'subaru'? I predict True.");
console.log(myCar == 'subaru');

// Tests 2
console.log("Is car != 'toyota'? I predict True.");
console.log(myCar != 'toyota');

// Tests 3
console.log("Is car == 'Subaru'? I predict False.");
console.log(myCar == 'Subaru');

// Tests 4
console.log("Is car != 'subaru'? I predict False.");
console.log(myCar != 'subaru');

// Tests 5
console.log("Is the length of car > 5? I predict False.");
console.log(myCar.length > 5);

// Tests 6
console.log("Is the length of car <= 7? I predict True.");
console.log(myCar.length <= 7);

// Tests 7
console.log("Does car include the letter 'a'? I predict True.");
console.log(myCar.indexOf('a') !== -1);

// Tests 8
console.log("Does car include the letter 'x'? I predict False.");
console.log(myCar.indexOf('x') !== -1);

// Tests 9
console.log("Is car includes 'baru'? I predict True.");
console.log(myCar.indexOf('baru') !== -1);

// Tests 10
console.log("Is car ends with 'ru'! I predict true.");
console.log(myCar.indexOf('ru') !== -1);