const Ship = require("./ship");
//assign the ship factory function to a constant
//create gameBoard factory function
const gameBoard = (horz1, vert1, horz2, vert2) => {
  //create the board
  const board = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
  // let getShip1 = () => ship1;
  // let ship1 = Ship(board[horz1][vert1], 3);
  let ship2 = Ship(board[horz2][vert2], 3);

  return { board, ship2 };
};

module.exports = gameBoard;
