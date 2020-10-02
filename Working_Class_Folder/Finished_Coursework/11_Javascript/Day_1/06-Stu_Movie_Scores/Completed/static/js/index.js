// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];
var scores = 0;

for (var c = 0; c < movieScores.length; c++) {
  if (movieScores[c] > 7.0) {
    goodMovieScores.push(movieScores[c]);
  }
  else if (movieScores[c] >= 5.0 && movieScores[c] <= 7.0) {
    okMovieScores.push(movieScores[c]);
  }
  else {
    badMovieScores.push(movieScores[c]);
  }
}

//print out average rating of movies
for (var i = 0; i < movieScores.length; i++) {
  scores += movieScores[i];
}
var average_score = Math.round(scores / movieScores.length);

console.log(`${goodMovieScores.length}`)

console.log(`${okMovieScores.length}`)

console.log(`${badMovieScores.length}`)