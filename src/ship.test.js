const ship = require("./ship")

test("is coordinate correct?", ()=>{
    expect(ship(4,7)).toEqual([7,8,9,10]);
})

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

//   //create a ship factory function
// const Ship= (length, coordinate)=>{
//     this.length= length;
//     this.coordinate=coordinate;
//     let position=[];
//     for( let i= coordinate; i< (coordinate + length); i++){
// position.push(i)
//     }

    
// return(position)    

// }

// module.exports=Ship;