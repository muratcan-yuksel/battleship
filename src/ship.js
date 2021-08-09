//create a ship factory function
const Ship= (length, coordinate, number)=>{
  const getLength= () => length;
  const getCoordinate= ()=> coordinate;
    let position=[];
    for( let i= coordinate; i< (coordinate + length); i++){
position.push(i)
    }
   const hit= (number)=>{
if (position.indexOf(number) > -1){
    return "hit!"
}else {
    return "miss!"
}
    }

    
return{position,getLength, getCoordinate,hit}    

}

module.exports=Ship;