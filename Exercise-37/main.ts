/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different 
message. */

function make_shirt(size: string, message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}

// Call the function with example inputs
make_shirt("Large");
make_shirt("Medium", "TypeScript Rocks!");
make_shirt("Small", "Keep Calm and Code On");
