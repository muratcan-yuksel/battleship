const ship = require("./ship");

xtest("is coordinate correct?", () => {
  expect(ship(7, 4).shipParts).toEqual([7, 8, 9, 10]);
});
xtest("is hit working?", () => {
  const bateau = ship(7, 4, 9);
  expect(bateau.hit(8)).toEqual("hit!");
});

xtest("did hit deleted the number from shipParts array?", () => {
  const bateau = ship(7, 4, 9);
  bateau.hit(8);
  expect(bateau.shipParts).toEqual([7, 9, 10]);
});
xtest("does isSunk work?", () => {
  const bateau = ship(7, 4, 9);
  bateau.hit(7);
  bateau.hit(8);
  bateau.hit(9);
  bateau.hit(10);
  expect(bateau.isSunk()).toEqual(true);
});
