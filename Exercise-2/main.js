//                                 // Name: Muhammad samad
//                                 // Date: 20/03/2024
//                                 // This is Governor's Initiative Program 45 Assignment
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// //* question number 1 *//
console.log("\n\tQuestion Number 1\n");
var personName = "Eric";
console.log("Hello, ".concat(personName, " would you like Python today"));
//* question number 2 *//
console.log("\n\tQuestion Number 2\n");
var famousPerson = "Albert Einstein";
console.log(famousPerson.toLowerCase()); //output: albert einstein
console.log(famousPerson.toUpperCase()); //output: ALBERT EINSTEIN
console.log(famousPerson.charAt(0).toUpperCase() + famousPerson.slice(1).toLowerCase()); // output: Albert einstein
//* question number 3 *//
console.log("\n\tQuestion Number 3\n");
var author = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//* question number 4 *//
console.log("\n\tQuestion Number 4\n");
var famous_person = "Albert Einstein";
var qoute = "A person who never made a mistake never tried anything new.";
var message = "".concat(famous_person, " once said, \"").concat(qoute, "\"");
console.log(message);
//* question number 5 *//
console.log("\n\tQuestion Number 5\n");
var myName = "\t\n Muhammad samad \t\n";
console.log("Name with whitespace:", myName);
var strippedName = myName.trim();
console.log("Stripped name:", strippedName);
//* question number 6 *//
console.log("\n\tQuestion Number 6\n");
// Addition
console.log("Addition", 5 + 3);
// Subtraction
console.log("Subtraction", 20 - 14);
// Division
console.log("Division", 15 * 5);
// Multiplication
console.log("Multiplication", 10 / 5);
//* question number 7 *//
console.log("\n\tQuestion Number 7\n");
var favourite_number = 4;
var myNumber = "My favourite number is ".concat(favourite_number);
console.log(myNumber);
//* question number 8 *
console.log("\n\tQuestion Number 8\n");
var people = ["Muhammad", "Ali", "Jinnah"];
people.forEach(function (names) {
    console.log(names);
});
// * question number 9 *//
console.log("\n\tQuestion Number 9\n");
var names = ["Samad", "Romaan", "Ahsan"];
names.forEach(function (name) {
    console.log("hello,".concat(name, "! Have a great day"));
});
// * question number 10 *//
console.log("\n\tQuestion Number 10\n");
var transportationMode = ["Kawasaki Z900", "Toyota Hilux", "Haval H6 Hev"];
transportationMode.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode));
});
//* question number 11 *//
console.log("\n\tQuestion Number 11\n");
var invitePerson = ["Mrbeast", "Elon Musk", "Bill Gates"];
invitePerson.forEach(function (person) {
    console.log("".concat(person, " I invite you to Dinner with me"));
});
// * question number 12 *//
console.log("\n\tQuestion Number 12\n");
var invitePersonTwo = ["Mrbeast", "Elon Musk", "Bill Gates"];
invitePersonTwo.forEach(function (person) {
    console.log("".concat(person, " I invite you to Dinner with me"));
});
console.log("Unfortunately, Bill Gates can't make it dinner.");
invitePersonTwo[invitePersonTwo.indexOf("Bill Gates")] = "Sam Altman";
invitePersonTwo.forEach(function (person) {
    console.log("".concat(person, " I invite you to Dinner with me"));
});
//* question number 13 *//
console.log("\n\tQuestion Number 13\n");
var invitePersonThree = ["Mrbeast", "Elon Musk", "Sam Altman"];
invitePersonThree.forEach(function (person) {
    console.log("".concat(person, " I invite you to Dinner with me"));
});
console.log("Good News! We found a bigger dinner table! Now we have enough space for all of us.");
invitePersonThree.unshift("Bill gates");
invitePersonThree.splice(Math.floor(invitePersonThree.length / 2), 0, "Ronaldo");
invitePersonThree.push("Mark Zuckerberg");
invitePersonThree.forEach(function (person) {
    console.log("".concat(person, " I invite you to Dinner with me"));
});
// * question number 14 *//
console.log("\n\tQuestion Number 14\n");
var invitePersonFour = ["Mrbeast", "Elon Musk", "Sam Altman", "Ronaldo", "Mark Zuckerberg", "Bill Gates"];
invitePersonFour.forEach(function (person) {
    console.log("".concat(person, ", you are invited to dinner with me."));
});
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
while (invitePersonFour.length > 2) {
    var removedGuest = invitePersonFour.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
invitePersonFour.forEach(function (person) {
    console.log("Dear ".concat(person, ", you're still invited to dinner."));
});
console.log("The final invited guests are: ".concat(invitePersonFour.join(", "), "."));
//*  Question Number 15 *//
console.log("\n\tQuestion Number 15\n");
var placeToVisit = ["Dubai", "America", "California", "Balochistan", "England"];
function printArray(label, array) {
    console.log("".concat(label, ":"));
    console.log(array.join(', '));
    console.log();
}
printArray("Original Order", placeToVisit);
var AlphabeticalOrder = __spreadArray([], placeToVisit, true).sort();
printArray("Alphabetical Order ", AlphabeticalOrder);
printArray("Original order after sorting ", placeToVisit);
var ReverseAlphabetical = __spreadArray([], placeToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
printArray("Reverse alphabetical order ", ReverseAlphabetical);
printArray("Original order after reverse sorting ", placeToVisit);
var ReverseOrder = __spreadArray([], placeToVisit, true).reverse();
printArray("Reversed order ", ReverseOrder);
printArray("Original order after reversing again ", placeToVisit);
var sortedAlphabeticalOrder = __spreadArray([], placeToVisit, true).sort();
printArray("Sorted in alphabetical order ", sortedAlphabeticalOrder);
printArray("Original order after alphabetical order ", placeToVisit);
var sortedReverseAlphabetical = __spreadArray([], placeToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
printArray("Sorted in reverse alphabetical order ", sortedReverseAlphabetical);
printArray("Original order after reverse alphabetical order ", placeToVisit);
//*  Question Number 16 *//
console.log("\n\tQuestion Number 16\n");
var guestList = ["Elon Mask", "Mr beast", "Jeff bejoz",];
console.log("We are inviting ".concat(guestList.length, " people on dinner"));
// *  Question Number 17 *//
console.log("\n\tQuestion Number 17\n");
var favouriteThings = [
    "mount everest",
    "indus river",
    "pakistan",
    "karachi",
    "urdu",
    "biryani",
    "bike riding",
];
favouriteThings.forEach(function (things) { return console.log("my favourite things are: " + things); });
// *  Question Number 18 *//
console.log("\n\tQuestion Number 18\n");
var favoriteThings = {
    "mountain": "Mount Everest",
    "river": "Indus River",
    "country": "Pakistan",
    "city": "Karachi",
    "language": "Urdu",
    "food": "Biryani",
    "sport": "bike riding"
};
console.log("My favorite things are:");
for (var category in favoriteThings) {
    console.log("".concat(category, ": ").concat(favoriteThings[category]));
}
;
//*  Question Number 19 *//
console.log("\n\tQuestion Number 19\n");
var myInfo = {
    name: "Muhammad samad",
    age: 17,
    profession: "Certified cloud applied generative ai engineer",
};
var myInstitute = {
    title: "Governor House Karachi",
    author: "Kamran tessori",
    learning: "Typescript",
};
var myProduct = {
    name: "Laptop",
    price: 63000,
    category: "Electronics",
};
console.log("");
console.log("My Information is: \n".concat(myInfo.name, " \n").concat(myInfo.age, " \n").concat(myInfo.profession));
console.log("");
console.log("My Institute is: \n".concat(myInstitute.title, " \n").concat(myInstitute.author, " \n").concat(myInstitute.learning));
console.log("");
console.log("My Product is: \n".concat(myProduct.name, " \n").concat(myProduct.price, " \n").concat(myProduct.category));
console.log("");
//* Question Number 20 *//
console.log("\n\tQuestion Number 20\n");
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray[11]); // creating Error
console.log(myArray[6]); // solved Error
//* Question Number 21 *//
console.log("\n\tQuestion Number 21\n");
var myCar = 'subaru';
// Tests 1 
console.log("Is car == 'subaru'? I predict True.");
console.log(myCar == 'subaru');
// Tests 2
console.log("Is car != 'toyota'? I predict True.");
console.log(myCar != 'toyota');
// Tests 3
console.log("Is car == 'Subaru'? I predict False.");
console.log(myCar == 'Subaru');
// Tests 4
console.log("Is car != 'subaru'? I predict False.");
console.log(myCar != 'subaru');
// Tests 5
console.log("Is the length of car > 5? I predict False.");
console.log(myCar.length > 5);
// Tests 6
console.log("Is the length of car <= 7? I predict True.");
console.log(myCar.length <= 7);
// Tests 7
console.log("Does car include the letter 'a'? I predict True.");
console.log(myCar.indexOf('a') !== -1);
// Tests 8
console.log("Does car include the letter 'x'? I predict False.");
console.log(myCar.indexOf('x') !== -1);
// Tests 9
console.log("Is car includes 'baru'? I predict True.");
console.log(myCar.indexOf('baru') !== -1);
// Tests 10
console.log("Is car ends with 'ru'! I predict true.");
console.log(myCar.indexOf('ru') !== -1);
//* Question Number 22 *//
console.log("\n\tQuestion Number 22\n");
var car = 'subaru';
// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
// Tests using the lower case function
console.log("Is car in lowercase equal to 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 10;
console.log("Is number equal to 10? I predict True.");
console.log(number === 10);
console.log("Is number less than 20? I predict True.");
console.log(number < 20);
console.log("Is number greater than or equal to 10? I predict True.");
console.log(number >= 10);
console.log("Is number not equal to 5? I predict True.");
console.log(number !== 5);
// Tests using "and" and "or" operators
console.log("Is number greater than 5 and less than 15? I predict True.");
console.log(number > 5 && number < 15);
console.log("Is number less than 5 or greater than 15? I predict False.");
console.log(number < 5 || number > 15);
// Test whether an item is in an array
var bikes = ['mountain', 'road', 'hybrid'];
var isMountainInBikes = bikes.indexOf('mountain') !== -1;
console.log("Is 'mountain' in the bikes array? I predict True.");
console.log(isMountainInBikes);
// Test whether an item is not in an array
var isElectricNotInBikes = bikes.indexOf('electric') === -1;
console.log("Is 'electric' not in the bikes array? I predict True.");
console.log(isElectricNotInBikes);
//* Question Number 23 *//
console.log("\n\tQuestion Number 23\n");
var alien_color = "green";
console.log(alien_color);
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
;
//* Question Number 24 *//
console.log("\n\tQuestion Number 24\n");
var alien_colorOne = 'green';
if (alien_colorOne === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
;
//* Question Number 25 *//
console.log("\n\tQuestion Number 25\n");
var alien_colorTwo = "green";
console.log(alien_colorTwo);
if (alien_colorTwo === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_colorTwo === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_colorTwo === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
;
//* Question Number 26 *//
console.log("\n\tQuestion Number 26\n");
var age = 17;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//* Question Number 27 *//
console.log("\n\tQuestion Number 27\n");
console.log("\tUncommit Question Number 27");
// let favourite_fruits: Array<any> = ["mango", "watermelon", "orange"];
// if (favourite_fruits.includes("mango")){
//    console.log("You really like mangoes");
// }
// if (favourite_fruits.includes("watermelon")){
//     console.log("You really like watermelons");
// }
// if (favourite_fruits.includes("orange")){
//     console.log("You really like oranges");
// }
// if (favourite_fruits.includes("apple")){
//     console.log("You really like apples");
// }
// if (favourite_fruits.includes("kiwi")){
//     console.log("You really like kiwi");
// }
//* Question Number 28 *//
console.log("\n\tQuestion Number 28\n");
var userName = ["admin", "user1", "user2", "user3", "user4", "user5"];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var userNames = userName_1[_i];
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
}
//* Question Number 29 *//
console.log("\n\tQuestion Number 29\n");
var user_Name = [];
if (user_Name.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, user_Name_1 = user_Name; _a < user_Name_1.length; _a++) {
        var user_Names = user_Name_1[_a];
        if (user_Names === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user_Names, ", thank you for logging in again."));
        }
    }
}
//* Question Number 30 *//
console.log("\n\tQuestion Number 30\n");
var current_users = ["admin", "user1", "user2", "user3", "user4", "user5"];
var new_users = ["user6", "user7", "Admin", "user8", "user9"];
var _loop_1 = function (new_user) {
    var lowercase_new_user = new_user.toLowerCase();
    var username_taken = current_users.map(function (user) { return user.toLowerCase().includes(lowercase_new_user); });
    if (username_taken.includes(true)) {
        console.log("Sorry '".concat(new_user, "' this username is taken."));
    }
    else {
        console.log("Great, ".concat(new_user, " is still available."));
    }
};
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    _loop_1(new_user);
}
