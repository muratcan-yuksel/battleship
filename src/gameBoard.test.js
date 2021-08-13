const gameBoard = require("./gameBoard");
const Ship = require("./ship");

test("is game board created?", () => {
  let player = gameBoard();
  expect(player).toEqual({
    board: [
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
    ],
  });
});

test("can I give coordinates while calling the ship factory?", () => {
  const player = gameBoard();
  player.ship1 = Ship(3);
  player.ship1.coordinates = { horizontal: 3, vertical: 2 };
  expect(player.ship1.coordinates).toEqual({ horizontal: 3, vertical: 2 });
});

test("when a ship receives attack ", () => {
  const player = gameBoard();
  player.ship1 = Ship(3);
  player.ship1.coordinates = { vertical: 2, horizontal: 3 };
  let coordinatesX = [2, 3];
  player.receiveAttack = (coordinates) => {
    if (
      coordinatesX[0] == player.ship1.coordinates.vertical &&
      coordinatesX[1] == player.ship1.coordinates.horizontal
    ) {
      return "hits!";
    } else return "of";
  };
  expect(player.receiveAttack()).toEqual("hits!");
});

test("when a ship avoids attack", () => {
  const player = gameBoard();
  player.ship1 = Ship(3);
  player.ship1.coordinates = { vertical: 2, horizontal: 3 };
  let coordinatesX = [2, 6];
  player.receiveAttack = (coordinates) => {
    if (
      coordinatesX[0] == player.ship1.coordinates.vertical &&
      coordinatesX[1] == player.ship1.coordinates.horizontal
    ) {
      return "hits!";
    } else return "of";
  };
  expect(player.receiveAttack()).toEqual("of");
});
