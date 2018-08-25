var values = {
  crystalValues: {
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0
  },
  wins: 0,
  losses: 0,
  chosenList: [],
  numberFirstClicked: 0,
  numberSecondClicked: 0,
  numberThirdClicked: 0,
  numberFourthClicked: 0,
  sumOfClicked: 0,
  getSumOfClicked: function(x) {
//   Unknown bug ruining the script right here... Undefined my arse!
    x = values.crystalValues.crystal1 * values.numberFirstClicked + values.crystalValues.crystal2 * values.numberSecondClicked + values.crystalValues.crystal3 * values.numberThirdClicked + values.crystalValues.crystal4 * values.numberFourthClicked;
    return x;
    },
  randomTotal: 0,
  totalsList: [13, 17, 19, 23, 27, 29, 31, 37, 41, 42, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
  crystalLists: {
    13: [[2, 3, 5, 99], [3, 5, 7, 99], [5, 7, 9, 99], [6, 7, 3, 99], [13, 2, 5, 99], [11, 2, 5, 99], [9, 4, 6, 99]],
    17: [[3, 4, 10, 99], [2, 7, 5, 990], [4, 5, 9, 99], [7, 8, 9, 99], [8, 9, 10, 99], [2, 5, 8, 99], [2, 4, 17, 99]],
    19: [[2, 3, 4, 99], [3, 4, 5, 99], [4, 5, 9, 99], [4, 6, 9, 99], [10, 5, 4, 99], [10, 6, 3, 99], [19, 4, 8, 99]],
    23: [[3, 7, 9, 99], [3, 8, 12, 99], [4, 7, 12, 99], [5, 6, 7, 99], [4, 8, 11, 99], [4, 9, 10, 99], [4, 5, 23, 99]],
    27: [[4, 5, 7, 99], [4, 6, 7, 99], [7, 8, 9, 99], [4, 5, 8, 99], [20, 3, -1, 99], [15, 12, 17, 99], [5, 6, 27, 99]],
    29: [[15, 14, 16, 99], [9, 8, 11, 99], [4, 6, 29, 99]],
    31: [[31, 99, 10, 5], [15, 16, 17, 99], [5, 16, 18, 99], [7, 16, 8, 99]],
    37: [[37, 5, 13, 99], [7, 15, 23, 99], [6, 7, 19, 99]],
    41: [[20, 21, 32, 99], [34, 7, 24, 99], [5, 37, 41, 99]],
    42: [[42, 42, 42, 42], [21, 21, 21, 21], [10, 2, 20, 2], [5, 10, 15, 2], [6, 9, 42, 12]],
    43: [[20, 22, 23, 99], [13, 20, 30, 99], [24, 27, 43, 99]],
    47: [[33, 34, 14, 99], [23, 24, 34, 99], [47, 99, 13, 22]],
    53: [[23, 30, 45, 99], [10, 13, 45, 99], [24, 36, 53, 99]],
    59: [[28, 31, 45, 99], [13, 20, 35, 99], [24, 53, 59, 99]],
    61: [[10, 1, 7, 99], [6, 11, 10, 99], [30, 15, 61, 99]],
    67: [[5, 8, 3, 99], [8, 27, 32, 99], [27, 32, 67, 99]],
    71: [[7, 10, 2, 99], [40, 20, 11, 99], [46, 57, 71, 99]],
    73: [[6, 9, 1, 99], [15, 13, 45, 99], [32, 47, 73, 99]],
    79: [[9, 7, 10, 99], [32, 47, 73, 99], [22, 67, 79, 99]],
    83: [[8, 3, 1, 99], [13, 30, 20, 99], [43, 40, 29, 99], [35, 67, 83, 99]],
    89: [[43, 3, 2, 99], [67, 22, 46, 99], [69, 79, 89, 99]],
    97: [[50, 47, 1, 99], [20, 33, 44, 99], [79, 99, 89, 97]]
  },
  arrayListHolder: [],
  gameFinished: 1,
  gameStart: function() {
    if (this.gameFinished == 1) {
      this.gameFinished = 0;
      // Resetting otherwise untouched variables to default values
      this.numberFirstClicked = 0;
      this.numberSecondClicked = 0;
      this.numberThirdClicked = 0;
      this.numberFourthClicked = 0;
      // Producing a random value to determine and assign which randomTotal will be used
      this.randomTotal = this.totalsList[Math.floor(Math.random() * this.totalsList.length)];
      $("#number").text(this.randomTotal)
      console.log(this.randomTotal);
      // Produce a set of values from a list that is paired to randomTotal
      this.arrayListHolder = this.crystalLists[this.randomTotal];
      this.chosenList = this.arrayListHolder[Math.floor(Math.random() * this.arrayListHolder.length)];
      console.log(this.chosenList);
      var orderOfCrystals = function(o) {
        for (
          var j, x, i = o.length;
          i;
          j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        );
        return o;
      };
      var shuffle = orderOfCrystals(this.chosenList);
      this.crystalValues.crystal1 = shuffle[0]
      this.crystalValues.crystal2 = shuffle[1]
      this.crystalValues.crystal3 = shuffle[2]
      this.crystalValues.crystal4 = shuffle[3]
      
      
    }
  },
  gameRun: function() {
      this.getSumOfClicked(this.sumOfClicked)
      if (this.sumOfClicked == this.randomTotal) {
          this.wins++
          $("#wins").text("Wins: " + this.wins)
          alert("You Win!")
          this.gameFinished = 1
        //   this.gameStart()
      }
      else if (this.sumOfClicked > this.randomTotal) {
          this.losses++
          $("#losses").text("Loss: " + this.losses)
          alert("Your total is " + this.sumOfClicked)
          alert("You lost!")
          this.gameFinished = 1
          this.gameStart()
      }
      else {
          alert("Your total is " + this.sumOfClicked)
          $("#scoreNumber").text(this.randomTotal)
          //   Push everything to the HTML so people can see the situation, instead of everything being unobservable

      }
  }
};
$(document).on("click", "#gem1", function(){
    values.numberFirstClicked++
    console.log(values.numberFirstClicked)

    values.gameRun()
})
$(document).on("click", "#gem2", function(){
    values.numberSecondClicked++
    values.gameRun()
})
$(document).on("click", "#gem3", function(){
    values.numberThirdClicked++
    values.gameRun()
})
$(document).on("click", "#gem4", function(){
    values.numberForthClicked++
    values.gameRun()
})
values.gameStart()
// Everything seems to work EXCEPT the buttons don't add the values they ought (adding 0 instead)