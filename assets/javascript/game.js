var values = {
    crystalValues: {
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0
    },
    numberFirstClicked: 0,
    numberSecondClicked: 0,
    numberThirdClicked: 0,
    numberFourthClicked: 0,
    sumOfClicked: (firstCrystal * numberFirstClicked + secondCrystal * numberSecondClicked + (thirdCrystal * numberThirdClicked) + (fourthCrystal * numberFourthClicked)),
    randomTotal: 0,
    totalsList: [7, 8, 10, 12, 13,],
    crystalLists: {
        7: [],
        8: [],
        10: [],
        12: [],
        13: [],
        
        }
}
var gameFinished = 1

var gameStart = function () {
    if (gameFinished == 1) {
        gameFinished = 0
        // Resetting otherwise untouched variables to default values
        values.numberFirstClicked = 0
        values.numberSecondClicked = 0
        values.numberThirdClicked = 0
        values.numberFourthClicked = 0
        // Producing a random value to determine and assign which randomTotal will be used
        values.randomTotal = values.totalsList[Math.floor(Math.random() * values.totalsList.length)]
        // Produce a set of values from a list that is paired to randomTotal

    }
}
gameStart()