/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified. */
var Magicians1 = ["Samad", "Arman", "Ahsan", "Saddam"];
function show_magicians(Magicians1) {
    Magicians1.forEach(function (magician1) {
        return console.log(magician1);
    });
}
function make_great(Magicians1) {
    for (var i = 0; i < Magicians1.length; i++) {
        Magicians1[i] = "The Great " + Magicians1[i];
    }
}
make_great(Magicians1);
show_magicians(Magicians1);
