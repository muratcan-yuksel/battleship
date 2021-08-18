const Ship = require("./ship");
//assign the ship factory function to a constant
//create gameBoard factory function
const gameBoard = () => {
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

  //function that places the ships at desired location and marks those places with the ship's name
  let placeShips = (shipName, startingPoint) => {
    let name = shipName.name;
    return board.splice(startingPoint, shipName.getLength(), name);
  };

  //   const receiveAttack = (coordinates) => {};

  return { board, placeShips };
};

module.exports = gameBoard;
