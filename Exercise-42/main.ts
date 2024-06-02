/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the 
list has actually been modified. */

let Magicians1: string[] = ["Samad", "Arman", "Ahsan", "Saddam"];

function show_magicians(Magicians1: string[]): void{
    Magicians1.forEach(magician1 => 
        console.log(magician1)
        
    )
}

function make_great(Magicians1: string[]): void{
    for(let i = 0; i < Magicians1.length; i++ ){
        Magicians1[i] = "The Great " + Magicians1[i]
    }
}

// Call make_great() to modify Array of magician
make_great(Magicians1)

//Call show_magicians() to see that the list has been modified
show_magicians(Magicians1)


