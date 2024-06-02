/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let friendNames: string[] = ["Samad", "Ahsan", "Shayan", "Arman"];

if(friendNames.length === 0){
    console.log("We need to find some users!")
}else{
    friendNames.forEach(friendName => {
        console.log(`Hello ${friendName}!`);
    });
}

// Remove all names

let friend_Names: string[] = [];

// Check after removing names
if(friend_Names.length === 0){
    console.log("We need to find some users!")
}else{
    friend_Names.forEach(friend_Name => {
        console.log(`Hello! ${friend_Name}`);
    });
}