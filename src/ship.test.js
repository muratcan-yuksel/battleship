const ship = require("./ship")

test("is coordinate correct?", ()=>{
    expect(ship(4,7).shipParts).toEqual([7,8,9,10]);
})
test ("is hit working?", ()=>{
    const bateau= ship(4,7,9)
    expect(bateau.hit(8) ).toEqual("hit!")
})

test("did hit deleted the number from shipParts array?", ()=>{
    const bateau= ship(4,7,9)
    bateau.hit(8);
    expect(bateau.shipParts).toEqual([7,9,10])
})
test("does isSunk work?", ()=>{
    const bateau= ship(4,7,9)
    bateau.hit(7);
    bateau.hit(8);
    bateau.hit(9);
    bateau.hit(10);
    expect(bateau.isSunk()).toEqual(true)

})