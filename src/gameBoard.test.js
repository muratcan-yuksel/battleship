const gameBoard = require("./gameBoard");
const ship = require("./ship");

// test("did ship1 got created?", () => {
//     const player = gameBoard();
//     expect(player.ship1.getLength()).toEqual(4);
//   });

xtest("did ship1 got created?", () => {
  const player = gameBoard();
  expect(player.ship1.getCoordinate()).toEqual(2);
});

xtest("does ship1 also gets created with a length?", () => {
  const player = gameBoard();
  let ship1 = ship(player.board[1][2], 3);

  expect(player.ship1.getLength()).toEqual(3);
});

test("can the user give coordinates to ships on board creation?", () => {
  const player = gameBoard(undefined, undefined, 1, 2);
  expect(player.ship2.getCoordinate()).toEqual(2);
});
