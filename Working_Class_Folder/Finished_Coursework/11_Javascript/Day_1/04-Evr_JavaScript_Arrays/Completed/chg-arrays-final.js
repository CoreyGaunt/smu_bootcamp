// creating arrays

var lettersArray = ['a','b','c','d'];

// creating objects with individual strings from our arrays assigned to them
var first_letter = lettersArray[0];

var second_letter = lettersArray[1];

var third_letter = lettersArray[2];

// this adds items to your existing array
lettersArray.push('e','f','g')

// this line creates a new array from a slice from our lettersArray
var slicedArray = lettersArray.slice(0,3);

// joining letters into an array so, [a, b, c, d] turns into 'a, b, c, d'
var joinedArray = lettersArray.join(", ");

// leveraging the string as if it was an array of characters
var soundOfMusic = "The hills are alive with the sound of music"

soundOfMusic[0]

// turns our string from above into an array that looks like
// ["The", "hills", "are", "alive", "with", "the", "sound", "of", "music"]
var soundArray = soundOfMusic.split(" ");

for (var j = 0; j < lettersArray.length; j++) {
    console.log(lettersArray[j]);
}