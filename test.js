const moves = [
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
  [1, 2],
  [2, 1],
  [0, 1],
  [0, 2],
  [2, 2]
];

let playerA = [];
let playerB = [];
// if (moves.length == 9) {
//   for (var i = 0; i < moves.length; i++) {
//     playerA = moves.splice(i + 1, 1).push();
//     console.log(playerA);
//   }
//   console.log(playerA);
// }

let b = true;
for (let i = 0; i < moves.length; ++i) {
  if (b === true) {
    playerA.push(moves[i]);
    b = false;
  } else {
    playerB.push(moves[i]);
    b = true;
  }
}
console.log(playerA);
console.log(playerB);
