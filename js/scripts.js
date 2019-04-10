function Game() {

}

function Board() {
  this.playerOneSpaces = [];
  this.playerTwoSpaces = [];
}

// var win1 = \0,1,2\
// var win2 = \0,4,8\
// var win3 = \0,3,6\
// var win4 = \1,4,7\
// var win5 = \2,4,6\
// var win6 = \2,5,8\
// var win7 = \3,4,5\
// var win8 = \6,7,8\
//
// if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
//
// }





Board.prototype.addPlayerOneSpace = function(playerOneSpace) {
  this.playerOneSpaces.push(playerOneSpace);
}

Board.prototype.addPlayerTwoSpace = function(playerTwoSpace) {
  this.playerTwoSpaces.push(playerTwoSpace);
}


function Space(spaceId) {
  this.spaceId = spaceId;
}

// Space.prototype.playerClick() {
// }

function Player(selectOX) {
this.selectOX = selectOX;
}

var playerOne = new Player();
var playerTwo = new Player();


// User Interface Logic
var newGame = new Game();
var newBoard = new Board();




// function changeSpace(id) {
//   var space = newBoard.findSpace(id);
//   for ()
//
// }

var userOneAssignment;
var playerOne;
var playerTwo;

$(document).ready(function(){
  $(".userSelect").submit(function(event){
    event.preventDefault();
    var userOneAssignment = $("input:radio[name=select-x-o]:checked").val();
    if (userOneAssignment === "o") {
      var userTwoAssignment = "x";
    } else if (userOneAssignment === "x") {
      var userTwoAssignment = "o";
    }
    playerOne = new Player(userOneAssignment);
    playerTwo = new Player(userTwoAssignment);
  });
var clickCount = 0;
  $(".grid-content").click(function(event) {
    var clickedSpace = $(this);
    var getId = $(this).attr("id");
    clickCount++;
      if (clickCount % 2 === 0) {
        clickedSpace.addClass("playerTwoColor");
        clickedSpace.append(playerTwo.selectOX);
        var newSpace = new Space(getId);
        newBoard.addPlayerTwoSpace(newSpace);
      } else {
        clickedSpace.addClass("playerOneColor");
        clickedSpace.append(playerOne.selectOX);
        var newSpace = new Space(getId);
        newBoard.addPlayerOneSpace(newSpace);
      }
      // alert(newBoard.playerOneSpaces[0])
      var win1 = /[012][012][012]/
      // var win2 = /0,4,8/
      // var win3 = /0,3,6/
      // var win4 = /1,4,7/
      // var win5 = /2,4,6/
      // var win6 = /2,5,8/
      // var win7 = /3,4,5/
      // var win8 = /6,7,8/
      if (clickCount % 2 === 0) {
        for (var i = 0; i < newBoard.playerOneSpaces.length; i++) {
          console.log(newBoard.playerOneSpaces[i]);
      }
      } else {
      for (var i = 0; i < newBoard.playerTwoSpaces.length; i++) {
      console.log(newBoard.playerTwoSpaces[i]);
      }
    }
  });
});
