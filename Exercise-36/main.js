/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on
the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call
the function. */
function make_shirt(size, message) {
    console.log("I have a ".concat(size, " shirt with ").concat(message, " printed on it"));
}
make_shirt("Large", "I love TypeScript!");
make_shirt("Medium", "TypeScript Rocks!");
make_shirt("Small", "Keep Calm and Code On");
