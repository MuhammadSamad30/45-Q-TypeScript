/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
var friendNames = ["Samad", "Ahsan", "Shayan", "Arman"];
if (friendNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    friendNames.forEach(function (friendName) {
        console.log("Hello ".concat(friendName, "!"));
    });
}
// Remove all names
var friend_Names = [];
// Check after removing names
if (friend_Names.length === 0) {
    console.log("We need to find some users!");
}
else {
    friend_Names.forEach(function (friend_Name) {
        console.log("Hello! ".concat(friend_Name));
    });
}
