// creating a function that prints Hello
function printHello() {
    console.log('Hello');
}

// calling the function
printHello();

// creating an addition function
function addition(a,b) {
    return a + b;
}

// using the function
console.log(addition(1,6));

// loops through an array and prints the array's contents
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

// creating a userlist
var friends = ['corey','hunter','aaron','michael']

// using the function
listLoop(friends);

// creating double addition function
function double_addition(a,b) {
    return (a + b) * 2;
}

