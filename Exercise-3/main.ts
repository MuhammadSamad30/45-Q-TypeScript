// Name Cases: Store a person’s name in a variable, and then print that person’s name in 
//lowercase, uppercase, and titlecase.

let famousPerson: string = "Albert Einstein";
console.log(famousPerson.toLowerCase());     //output: albert einstein

console.log(famousPerson.toUpperCase());     //output: ALBERT EINSTEIN

console.log(famousPerson.charAt(0).toUpperCase()+famousPerson.slice(1).toLowerCase());   // output: Albert einstein