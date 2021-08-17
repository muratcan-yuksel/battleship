const Ship = require("./ship");

test("does array takes hit functions (true version) ", () => {
  const bateau = Ship(4);
  bateau.hit(1);
  expect(bateau.shipParts).toEqual([0, "hit", 2, 3]);
});
xtest("does array takes hit functions 2", () => {
  const bateau = Ship(4);
  bateau.hit(1);
  expect(bateau.shipParts).toEqual([0, "hit", "hit", 3]);
});
test("what happens a couple of hits?", () => {
  const bateau = Ship(4);
  bateau.hit(1);
  expect(bateau.shipParts).toEqual([0, "hit", 2, 3]);
  bateau.hit(3);
  expect(bateau.shipParts).toEqual([0, "hit", 2, "hit"]);
  //does isSunk work?
  expect(bateau.isSunk()).toEqual(false);
});
