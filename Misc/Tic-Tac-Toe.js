/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const min_runs = 5;

  //checks if game is still running
  if (moves.length < min_runs) {
    return "Pending";
  }

  //checks if player A wins
  if (moves.length % 2 != 0 && moves.length < 9) {
    return "A";
  }

  //checks if player B wins
  if (moves.length % 2 == 0 && moves.length < 9) {
    return "B";
  }

  //edge case: last move played
  if (moves.length == 9) { 
    for (var i = 0; i < moves.length; i++) {
      playerA = moves.splice(i + 1, 1);
    }



    function checkWin ((array) => {

        for(let i = 0; i < array.length; i++) {
            if(array)
        }
    }

    console.log(playerA);
  }
};
