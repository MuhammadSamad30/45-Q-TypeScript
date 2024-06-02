/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new 
set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the
 guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are 
inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


let guests: string[] = ["Mr beast", "Elon musk", "Bill gates"];

console.log(`Dear ${guests[0]}, you are invited to dinner.`);
console.log(`Dear ${guests[1]}, you are invited to dinner.`);
console.log(`Dear ${guests[2]}, you are invited to dinner.`);

// The guest who can't make it.
console.log(`\nUnfortunately, ${guests[2]} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest.
guests[2] = "Mark zuckerberg";

// Print the new set of invitation messages.
console.log(`\nDear ${guests[0]}, you are invited to dinner.`);
console.log(`\nDear ${guests[1]}, you are invited to dinner.`);
console.log(`\nDear ${guests[2]}, you are invited to dinner.`);