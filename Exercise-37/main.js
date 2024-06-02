/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love
TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
message. */
function make_shirt(size, message) {
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Call the function with example inputs
make_shirt("Large");
make_shirt("Medium", "TypeScript Rocks!");
make_shirt("Small", "Keep Calm and Code On");
