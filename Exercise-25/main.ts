/* Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a
value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just 
earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will 
have no output.) */

// create a variable
let alien_color: string = "green";

// test if the alien color is green
if (alien_color === "green") {
    console.log("You just earned 5 points!");
}

// then create a false condition
let alien_color1: string = "red";

// test if the alien color is green
if (alien_color1 === "green") {
    console.log("You're failed");
}    