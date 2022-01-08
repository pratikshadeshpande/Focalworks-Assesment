function calculatePoints(words) {
    var totalPoints = 0;

    for (var i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > 0) {
            if (!isNaN(word)) {
                totalPoints = totalPoints + 4
            } else if (word.length > 7) {
                totalPoints = totalPoints + 3
            } else if (word.length >= 5) {
                totalPoints = totalPoints + 1
            }
        }
    }
    return totalPoints;
}

function compareTwoStrings(correctAnswer, response) {

    // var correctArray = correctAnswer.split(/[\s,. ]+/).map(v => v.toLowerCase());
    var correctArray = correctAnswer.split(',').join(' ').split('.').join(' ').split(' ').map(v => v.toLowerCase());

    maxPossibleScore = calculatePoints(correctArray);
    console.log(`Maximum Possible Score is : ${maxPossibleScore}`)

    var responseArray = response.split(',').join(' ').split('.').join(' ').split(' ').map(v => v.toLowerCase());

    var commonWords = [];
    for (var i = 0; i < correctArray.length; i++) {
        var word = correctArray[i];

        if (word.length > 0) {
            var index = responseArray.indexOf(word);
            if (index !== -1) {
                commonWords.push(word);
                delete responseArray[index]
            }
        }
    }
    var pointScored = calculatePoints(commonWords);
    console.log(`Points Scored: ${pointScored}`)

    return (pointScored / maxPossibleScore) * 100;
}

var correctAns = 'There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year. ';
var response = 'There are Twenty-Four hours in a day. A year has 14 months year.';

console.log('Correct String: ' + correctAns)
console.log('Student Response: ' + response)
var percent = compareTwoStrings(correctAns, response)
console.log('The percentage score is ' + percent);