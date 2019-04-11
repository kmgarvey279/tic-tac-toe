// Game Object Logic
function Game() {

}

// Board Object Logic
function Board() {
  this.playerSpaces = [];
}

Board.prototype.addPlayerSpace = function(playerSpace) {
  this.playerSpaces.push(playerSpace);
}

// Space Object Logic
function Space(spaceId, mark) {
this.spaceId = spaceId;
this.mark = mark;
}

//Player Object Logic
function Player(selectTacoPizza) {
this.selectTacoPizza = selectTacoPizza;
}


// User Interface Logic
var playerOne;
var playerTwo;
var newGame = new Game();
var newBoard = new Board();

function userAssignment() {
var playerTwoId = $("input:radio[name=human-or-ai]:checked").val();
var userOneAssignment = $("input:radio[name=select-taco-pizza]:checked").val();
var userTwoAssignment;
if (userOneAssignment === "Pizza" && playerTwoId === "Human") {
  var userTwoAssignment = "Taco";
  } else if (userOneAssignment === "Taco" && playerTwoId === "Human") {
    var userTwoAssignment = "Pizza";
  } else if (playerTwoId === "AI") {
    var userTwoAssignment = "Computer";
  }
  playerOne = new Player(userOneAssignment);
  playerTwo = new Player(userTwoAssignment);
}

// function computerMove(insertId) {
//   var randomNumber = Math.floor(Math.random() * 8);
//   // function findSpace(random) {
//   // return $(#random)
//   // }
//   // for (var i=0; i < newBoard.playerSpaces.length; i++) {
//     if (randomNumber === insertId) {
//       randomNumber = Math.floor(Math.random() * 8);
//     } else {
//     // findSpace(randomNumber)
//     // clickedSpace = ($(".grid-content").val());
//     clickedSpace.unbind("click");
//     clickedSpace.addClass("computerColor");
//     clickedSpace.append('<img src="img/robot.png" />');
//     var playerChecked = "playerTwoChecked"
//     var newSpace = new Space(getId, playerChecked);
//     newBoard.addPlayerSpace(newSpace);
//     }
//   }
// }
var clickCount = 0;
$(document).ready(function(){
  $(".userSelect").submit(function(event){
    event.preventDefault();
    $(".boardGame").show();
    $(".panel-body").hide();
    userAssignment();
  });

  $(".grid-content").click(function(event) {
    var clickedSpace = $(this);
    $(this).unbind("click");
    var getId = $(this).attr("id");
    console.log(getId);
    clickCount++;
    // if (playerTwo.selectTacoPizza !== "Computer") {
      if (clickCount % 2 === 0) {
        clickedSpace.addClass("playerTwoColor");
        if (playerTwo.selectTacoPizza === "Pizza") {
          clickedSpace.append('<img src="img/pizza3.png" />');
        } else {
          clickedSpace.append('<img src="img/taco3.png" />');
        }
        var playerChecked = "playerTwoChecked";
        var newSpace = new Space(getId, playerChecked);
        newBoard.addPlayerSpace(newSpace);
      } else {
        clickedSpace.addClass("playerOneColor");
        if (playerOne.selectTacoPizza === "Pizza") {
          clickedSpace.append('<img src="img/pizza3.png" />');
        } else {
          clickedSpace.append('<img src="img/taco3.png" />');
        }
        var playerChecked = "playerOneChecked"
        var newSpace = new Space(getId, playerChecked);
        newBoard.addPlayerSpace(newSpace);
      }
    // } else if (playerTwo.selectTacoPizza === "Computer") {
    //   clickedSpace.addClass("playerOneColor");
    //   clickedSpace.append('<img src="img/taco3.png" />');
    //   var playerChecked = "playerOneChecked"
    //   var newSpace = new Space(getId, playerChecked);
    //   newBoard.addPlayerSpace(newSpace);
    //   computerMove(getId);
    // }

      var playerOneChecks = newBoard.playerSpaces.filter(space => space.mark === "playerOneChecked").map(mark=>parseInt(mark.spaceId));;
      console.log(playerOneChecks);

      var playerTwoChecks = newBoard.playerSpaces.filter(space => space.mark === "playerTwoChecked").map(mark=>parseInt(mark.spaceId));
      console.log(playerTwoChecks);
      const winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8]]

      const won1 = winConditions.some(winCondition=>winCondition.every(space=>playerOneChecks.includes(space)));
      const won2 = winConditions.some(winCondition=>winCondition.every(space=>playerTwoChecks.includes(space)));

      if (won1 === true) {
        alert("player one wins!")
      } else if (won2 === true) {
        alert("player two wins!")
      } else if (clickCount === 9) {
        alert("tie");
      }
  });
});
