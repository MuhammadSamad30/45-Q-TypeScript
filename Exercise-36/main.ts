/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on 
the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call 
the function. */

function make_shirt(size:string, message:string): void{
    console.log(`I have a ${size} shirt with ${message} printed on it`);
}


// calling the function
make_shirt("Large", "I love TypeScript!");
make_shirt("Medium", "TypeScript Rocks!");
make_shirt("Small", "Keep Calm and Code On!");