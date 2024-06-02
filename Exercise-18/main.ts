/* Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */


let placeToVisit: string[] = ["Dubai", "America", "California", "Balochistan", "England"];

function printArray(label: string, array: string[]) {
    console.log(`${label}:`);
    console.log(array.join(', '));
    console.log();
}

printArray("Original Order", placeToVisit);

let AlphabeticalOrder = [...placeToVisit].sort();
printArray("Alphabetical Order ",  AlphabeticalOrder);
printArray("Original order after sorting ", placeToVisit);

let ReverseAlphabetical = [...placeToVisit].sort((a, b) => b.localeCompare(a));
printArray("Reverse alphabetical order ", ReverseAlphabetical);
printArray("Original order after reverse sorting ", placeToVisit);

let ReverseOrder = [...placeToVisit].reverse();
printArray("Reversed order ", ReverseOrder);
printArray("Original order after reversing again ", placeToVisit);

let sortedAlphabeticalOrder = [...placeToVisit].sort();
printArray("Sorted in alphabetical order ", sortedAlphabeticalOrder);
printArray("Original order after alphabetical order ", placeToVisit);

let sortedReverseAlphabetical = [...placeToVisit].sort((a, b) => b.localeCompare(a));
printArray("Sorted in reverse alphabetical order ", sortedReverseAlphabetical);
printArray("Original order after reverse alphabetical order ", placeToVisit);