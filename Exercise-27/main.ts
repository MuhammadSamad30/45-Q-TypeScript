/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */


// 1st version
let alien_color4: string = "green";

if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}else if (alien_color4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}else if (alien_color4=== 'red') {
    console.log("Congratulations! You just earned 15 points.");
};


// 2nd version
let alien_color5: string = "yellow";

if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}else if (alien_color5=== 'red') {
    console.log("Congratulations! You just earned 15 points.");
};


// 3rd version
let alien_color6: string = "red";

if (alien_color6 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}else if (alien_color6 === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}else if (alien_color6=== 'red') {
    console.log("Congratulations! You just earned 15 points.");
};