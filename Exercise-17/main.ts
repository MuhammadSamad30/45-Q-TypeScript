/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you 
have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
have an empty list at the end of your program. */

let guests: string[] = ["Bill gates", "Mr beast", "Ronaldo", "Elon musk", "Mark zuckerberg", "Imran khan"]; 

console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

while(guests.length > 2){
    let removedGuest: string | undefined = guests.pop();
    if(removedGuest !== undefined){
        console.log(`Sorry, ${removedGuest} you can't come to dinner.`);
    }
}

guests.forEach(person => {
    console.log(`Dear ${person}, you're still invited to dinner.`);
});

// Removes last two names from the list
guests.splice(0,guests.length);

//print updated empty list
console.log(`Updated list of guests: ${guests}`);


