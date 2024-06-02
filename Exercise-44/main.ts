/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one 
parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that
is being ordered. Call the function three times, using a different number of arguments each time. */

function make_sandwich(...items: string[]): void{
    console.log("Making a sandwich with these items:");
    items.forEach(item => console.log(`- ${item}`))
    console.log("Here is your sandwich!\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("bread", "cheese", "tomato", "lettuce")
make_sandwich("Turkey", "Bacon", "Avocado")
make_sandwich("Peanut Butter", "Jelly")