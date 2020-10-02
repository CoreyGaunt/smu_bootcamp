// The Stages of JavaScript
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
var names = princesses.map(function(princess) {
  return princess.name;
});

var ages = princesses.map(function(princess) {
  return princess.age;
});

var forEachPrincesses = princesses.map(function(names, ages) {
  return `Name: ${name}, Age: ${age}`;
});
// Create an array of just the names from the princesses array
var mapSimpleArray = theStagesOfJS.map(function(item) {
  return item;
});

console.log(forEachPrincesses)