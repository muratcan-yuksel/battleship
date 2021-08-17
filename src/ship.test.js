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
