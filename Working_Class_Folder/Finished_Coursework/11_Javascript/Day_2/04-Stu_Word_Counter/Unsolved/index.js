function WordCounter (user_String) {
    var stringArray = user_String.split(" ");
    var wordFrequency = {};
    for (var i = 0; i < stringArray.length; i++) {
        var currentWord = stringArray[i];
        if (currentWord in wordFrequency) {
            wordFrequency[currentWord] += 1;
    }
    else {
        // Set the counter at 1
        wordFrequency[currentWord] = 1;
      }
    }
    console.log(wordFrequency);
  return wordFrequency;
}

WordCounter("I yam what I yam and always will be what I yam");