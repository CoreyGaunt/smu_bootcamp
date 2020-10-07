// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.
lotto = []

// Create a for loop to generate 5 random numbers between 1 and 59.
for (var i = 0; i < 5; i++) {
    lotto.push(Math.floor(((Math.random() * 59) + 1)));
}

//  Check your numbers.
console.log(lotto);

//Bonus: Add a 6th number to the array between 1 and 35.
lotto.push(Math.floor(((Math.random() * 35) + 1)));

//  Check your numbers.
console.log(lotto);


//  Additional bonus.
// How would you generate the random numbers using python?
lotto_numbers = np.random.randint(1,59,1)