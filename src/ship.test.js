const Ship = require("./ship");

test("does array takes hit functions ", () => {
  const bateau = Ship(4);
  bateau.hit(1);
  expect(bateau.shipParts).toEqual([0, "hit", 2, 3]);
});
