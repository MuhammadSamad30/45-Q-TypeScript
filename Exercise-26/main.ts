/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */


// create a variable
let alien_color2: string = "green";

// test if the alien color is green
if(alien_color2 === "green"){
    console.log("You just earned 5 points for shooting the alien.")
}else{
    console.log("You just earned 10 points.")
}

console.log("False condition");
// then create a false condition
let alien_color3: string = "yellow";

if(alien_color3 === "green"){
    console.log("You just earned 5 points for shooting the alien.")
}else{
    console.log("You just earned 10 points.")
}