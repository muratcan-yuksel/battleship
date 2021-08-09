const ship = require("./ship")

test("is coordinate correct?", ()=>{
    expect(ship(4,7).position).toEqual([7,8,9,10]);
})
test ("is hit working?", ()=>{
    const bateau= ship(4,7,9)
    expect(bateau.hit(8) ).toEqual("hit!")
})

