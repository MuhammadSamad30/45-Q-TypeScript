/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the 
Great added to each magician’s name. */

let magicians: string[] = ["Samad", "Arman", "Ahsan", "Saddam"];

function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => console.log(magician));
}

function make_great(magicians: string[]): string[] {
  let greatMagicians = [...magicians]; // Create a copy of array
  for (let i = 0; i < greatMagicians.length; i++) {
    greatMagicians[i] = "The Great " + greatMagicians[i];
  }
  return greatMagicians; // Return the modified copy
}

let greatMagicians = make_great(magicians);

// Show original array
console.log("Original Magicians:");
show_magicians(magicians);

// Show modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
