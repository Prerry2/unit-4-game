var crystalValues = {
    firstCrystal: 0,
    secondCrystal: 0,
    thirdCrystal: 0,
    fourthCrystal: 0,
    sumOfClicked: (Number(firstCrystal) + Number(secondCrystal) + Number(thirdCrystal) + Number(fourthCrystal)),
    randomTotal: 0,
    randomPartOne: 0,
    randomPartTwo: 0}
var gameFinished = 1

var gameStart = function () {
    if (gameFinished == 1) {
        gameFinished = 0
        // This will produce a random number between 20 and 999, both included
        crystalValues.randomTotal = (Math.floor(Math.random() * 980) + 20)
        console.log(crystalValues.randomTotal)
        // This value, in order to have (hopefully) dissimilar non-zero numbers for the crystals, must be between 1 and total-6
        crystalValues.firstCrystal = (Math.floor(Math.random() * (randomTotal - 7) + 1))
        crystalValues.randomPartOne = crystalValues.randomTotal - crystalValues.firstCrystal
        
        crystalValues.secondCrystal = (Math.floor(Math.random() * (randomPartOne - n)))
        crystalValues.randomPartTwo = crystalValues.randomPartOne - crystalValues.secondCrystal
        crystalValues.thirdCrystal = (Math.floor(Math.random()))
        crystalValues.fourthCrystal = (crystalValues.randomTotal - (crystalValues.randomPartTwo + crystalValues.thirdCrystal)) / (Math.floor(Math.random() * Math.floor(4)))
    }
}
