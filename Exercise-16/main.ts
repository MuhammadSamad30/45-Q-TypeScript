/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list. */



let guests: string[] = ["Mr beast", "Elon musk", "Bill gates"];

console.log(`Dear ${guests[0]}, you are invited to dinner.`);
console.log(`Dear ${guests[1]}, you are invited to dinner.`);
console.log(`Dear ${guests[2]}, you are invited to dinner.`);

// The guest who can't make it.
console.log(`\nUnfortunately, ${guests[2]} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest.
guests[2] = "Mark zuckerberg";

console.log(`\nGood news! We found a bigger dinner table, so now we can invite more guests.`);

// Add one new guest to the beginning of the array.

guests.unshift("Bill gates");

// Add one new guest to the middle of the array.

guests.splice(2, 0, "Ronaldo");

// Append one new guest to the end of the list.

guests.push("Imran khan");

// New set of invitation messages.

console.log(`\nDear ${guests[0]}, you are invited to dinner.`)
console.log(`Dear ${guests[1]}, you are invited to dinner.`)
console.log(`Dear ${guests[2]}, you are invited to dinner.`)
console.log(`Dear ${guests[3]}, you are invited to dinner.`)
console.log(`Dear ${guests[4]}, you are invited to dinner.`)
console.log(`Dear ${guests[5]}, you are invited to dinner.`)

